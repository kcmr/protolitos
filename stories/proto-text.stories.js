import { html } from 'lit-html';

import '../components/proto-text/proto-text.js';

export default {
  title: '<proto-text>'
};

export const withoutAttrs = () => html`
  <proto-text></proto-text>
`;

export const customLines = () => html`
  <proto-text lines="5"></proto-text>
`;
