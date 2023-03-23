import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { defineCustomElements } from '@ovhcloud/ods-stencil-content-addon/loader';
import { defineCustomElements as tileCustomElements } from '@ovhcloud/ods-stencil-tile/loader';
import { olesIpsum, OlesIpsumGeneration } from '@ovhcloud/ods-core';

defineCustomElements();
tileCustomElements();

/* story parameters  */
export const storyParams = {};

const Template = (args: any) => html`
  <style>
    .tile_container {
      width: 848px;
      color: var(--ods-color-primary-800);
    }

    .start {
      text-decoration: line-through;

    }

    .bottom {
      text-align: right;
    }
  </style>

  <osds-tile class="tile_container" size="sm" flex>
    <span slot='start'><osds-text level="subtitle" size="xs" color="primary">${unsafeHTML(args.tileContent || olesIpsum(OlesIpsumGeneration.words, 2))}</osds-text></span>
    <span slot='end'>${unsafeHTML(args.contentAddon)}</span>
  </osds-tile>

`;

export const CommitmentTileStory = Template.bind({});
CommitmentTileStory.args = {
  contentAddon: '<osds-content-addon ...=${getTagAttributes(args)}>\n' +
    '  <span slot="start" class="start"><osds-text level="caption" size="xs" color="primary">+ XXXX,XX ¤</osds-text></span>\n' +
    '  <span slot="main"><osds-text level="subtitle" color="promotion">XXXX,XX ¤</osds-text></span>\n' +
    '  <span slot="bottom" class="bottom"><osds-text level="caption" size="xs" color="primary">ex.VAT / month</osds-text></span>\n' +
    '</osds-content-addon>\n',
};