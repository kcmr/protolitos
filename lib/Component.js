export function defineCustomElement(tagName, klass) {
  if (!window.customElements.get(tagName)) {
    window.customElements.define(tagName, klass);
  }
}

export function repeat(array, cb) {
  return array.map(cb).join('');
}

function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

function getAttributes(props) {
  if (!props) return [];
  return Object.keys(props).map(camelCaseToDash);
}

function isBoolean(type) {
  return type === Boolean;
}

export class Component extends HTMLElement {
  constructor() {
    super();
    this.__renderRoot = this.renderRoot || this.attachShadow({ mode: 'open' });
    this.__setAttributes();
    this.__render = () =>
      (this.__renderRoot.innerHTML = `
      ${this.__getStyles()} ${this.render(this)}
    `);
  }

  connectedCallback() {
    this.__render();
  }

  attributeChangedCallback() {
    this.__render();
  }

  static get observedAttributes() {
    return getAttributes(this.properties);
  }

  __getStyles() {
    if (!this.__styles) {
      const styles = this.constructor.styles;
      const styleText = Array.isArray(styles) ? styles.join('') : styles;

      this.__styles = styleText
        ? `
        <style>
          ${styleText}
        </style>`
        : '';
    }

    return this.__styles;
  }

  __setAttributes() {
    const props = this.constructor.properties;
    if (!props) return;

    Object.keys(props).forEach((prop) => {
      const { value, type: Type } = props[prop];
      const attr = camelCaseToDash(prop);

      Object.defineProperty(this, prop, {
        get() {
          if (isBoolean(Type)) {
            return this.hasAttribute(attr);
          }

          return Type(this.getAttribute(attr) || value);
        },

        set(value) {
          if (isBoolean(Type) && value === false) {
            this.removeAttribute(attr);
          } else {
            this.setAttribute(attr, isBoolean(Type) ? '' : value);
          }
        }
      });
    });
  }
}
