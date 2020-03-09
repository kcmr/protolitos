import { Component, defineCustomElement, repeat } from '../../index.js';
import '../privates/proto-bar/proto-bar.js';
import theme from '../proto-theme/proto-theme.scss';
import style from './proto-text.scss';

export class ProtoText extends Component {
  static styles = [theme, style];

  static properties = {
    lines: { type: Number, value: 3 }
  };

  render({ lines }) {
    const _lines = Array(lines).fill(undefined);

    return `
      <div class="stack">
        ${repeat(_lines, () => `<proto-bar></proto-bar>`)}
      </div>
    `;
  }
}

defineCustomElement('proto-text', ProtoText);
