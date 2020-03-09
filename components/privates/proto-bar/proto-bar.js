import { Component, defineCustomElement } from '../../../index.js';
import style from './proto-bar.scss';

export class ProtoBar extends Component {
  static styles = style;

  static properties = {
    height: { type: Number, value: 8 },
    radius: { type: Number, value: 4 }
  };

  render({ height, radius }) {
    const inlineStyle = `
      --proto-bar-height: ${height}px;
      --proto-bar-radius: ${radius}px;
    `;

    return `
      <div style="${inlineStyle}"></div>
    `;
  }
}

defineCustomElement('proto-bar', ProtoBar);
