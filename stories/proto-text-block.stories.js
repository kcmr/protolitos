import { html } from 'lit-html';

import '../components/proto-text-block/proto-text-block.js';

export default {
  title: '<proto-text-block>'
};

export const withoutAttrs = () => html`
  <proto-text-block></proto-text-block>
`;

export const paragraphs = () => html`
  <proto-text-block paragraphs="5"></proto-text-block>
`;

export const paragraphLines = () => html`
  <proto-text-block paragraph-lines="5"></proto-text-block>
`;
