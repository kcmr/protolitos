import { Component, html, defineCustomElement } from '../../index.js';
import style from './proto-img.scss';

export class ProtoImg extends Component {
  static styles = style;
  
  static properties = {
    size: { type: Number },
    width: { type: Number },
    height: { type: Number },
    rounded: { type: Boolean },
    radius: { type: Number, value: 0 },
    bgColor: { type: String, value: 'currentColor' },
  };

  render() {
    const imgStyle = `
      --proto-img-bg-color: ${this.bgColor};
      --proto-img-border-radius: ${this.rounded ? '50%' : this.radius+'px'}; 
    `;

    return html`
      <img
        src="data:image/png;base64,fake"
        alt=""
        style="${imgStyle}"
        width="${this.size || this.width}"
        height="${this.size || this.height}"
      />
    `;
  }
}

defineCustomElement('proto-img', ProtoImg);