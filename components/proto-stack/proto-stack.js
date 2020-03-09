import { Component, defineCustomElement } from '../../index.js';

export class ProtoStack extends Component {
  uid = performance
    .now()
    .toString()
    .replace('.', '-');

  static properties = {
    units: { type: Number, value: 1 }
  };

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('uid', `stack-${this.uid}`);
  }

  get renderRoot() {
    return this;
  }

  render({ units, uid }) {
    return `
      <style>
        proto-stack {
          display: block;
        }
        
        [uid="stack-${uid}"] > *:not(style) + * {
          margin-top: calc(8px * ${units});
        }
      </style>
    `;
  }
}

defineCustomElement('proto-stack', ProtoStack);
