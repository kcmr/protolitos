import { html } from 'lit-html';

import '../components/proto-img/proto-img.js';

export default {
  title: '<proto-img>'
};

export const widthHeightBgcolorAndRadius = () => html`
  <proto-img width="160" height="80" bg-color="#23BA77" radius="2"></proto-img>
`;

export const rounded = () => html`
  <proto-img size="80" bg-color="#D8D8D8" rounded></proto-img>
`;

export const squareWithSize = () => html`
  <proto-img size="80" bg-color="#ec7d7d"></proto-img>
`;
