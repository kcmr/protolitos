import { render, html } from 'lit-html';

export { html } from 'lit-html';
export const defineCustomElement = (tagName, klass) => {
  if (!window.customElements.get(tagName)) {
    window.customElements.define(tagName, klass);
  }
};

function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

function getAttributes(props) {
  return Object.keys(props).map(camelCaseToDash);
}

export class Component extends HTMLElement {
  constructor({ shadow = true } = {}) {
    super();
    this.__renderRoot = shadow ? this.attachShadow({ mode: 'open' }) : this;
    this.__setAttributes();
    this.__render = () => render(html`
      ${this.__getStyles()} 
      ${this.render()}
    `, this.__renderRoot);
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
    const styles = this.constructor.styles;
    const style = Array.isArray(styles) ? styles.join('') : styles;
    return style ? html`<style>${style}</style>` : '';
  }

  __setAttributes() {
    const props = this.constructor.properties;

    Object.keys(props).forEach((prop) => {
      const { value, type: Type } = props[prop];
      const attr = camelCaseToDash(prop);

      Object.defineProperty(this, prop, {
        get() {
          if (Type === Boolean) {
            return this.hasAttribute(attr);
          }

          return Type(this.getAttribute(attr) || value);
        },
        set(value) {
          this.setAttribute(attr, Type(value));
        }
      });
    });
  }
}
