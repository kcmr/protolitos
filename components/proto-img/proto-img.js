import { Component, defineCustomElement } from '../../index.js';
import style from './proto-img.scss';

export class ProtoImg extends Component {
  static styles = style;

  static properties = {
    size: { type: Number },
    width: { type: Number },
    height: { type: Number },
    rounded: { type: Boolean },
    radius: { type: Number, value: 0 },
    bgColor: { type: String, value: 'currentColor' }
  };

  render({ bgColor, rounded, radius, size, width, height }) {
    const inlineStyle = `
      --proto-img-bg-color: ${bgColor};
      --proto-img-border-radius: ${rounded ? '50%' : radius + 'px'}; 
    `;

    return `
      <img
        src="data:image/png;base64,fake"
        alt=""
        style="${inlineStyle}"
        width="${size || width}"
        height="${size || height}"
      />
    `;
  }
}

defineCustomElement('proto-img', ProtoImg);
