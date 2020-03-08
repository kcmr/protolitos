import { Component, defineCustomElement, repeat } from '../../index.js';
import '../proto-text/proto-text.js';
import style from './proto-text-block.scss';
import theme from '../proto-theme/proto-theme.scss';

export class ProtoTextBlock extends Component {
  static styles = [theme, style];

  static properties = {
    paragraphs: { type: Number, value: 3 },
    paragraphLines: { type: Number, value: 3 }
  };

  render({ paragraphs, paragraphLines }) {
    const _paragraphs = Array(paragraphs).fill(undefined);

    return `
      <div class="stack">
        ${repeat(
          _paragraphs,
          () => `<proto-text lines="${paragraphLines}"></proto-text>`
        )}
      </div>
    `;
  }
}

defineCustomElement('proto-text-block', ProtoTextBlock);
