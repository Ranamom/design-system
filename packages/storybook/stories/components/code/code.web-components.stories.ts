import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { defineCustomElements } from '@ovhcloud/ods-components/code/loader';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/code/CHANGELOG.md';
// @ts-ignore
import page from './code.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.default,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  codeContent: {
    category: 'Slot',
    defaultValue: '$ mongo'
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Code [atom]/Web Component',
  id: 'code',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams),
};

/* Story options */

/* Default */
const TemplateDefault = (args: any) => html`
  <osds-code ...=${getTagAttributes(args)}>${unsafeHTML(args.codeContent)}</osds-code>
`;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

const TemplateCopy = (args: any) => html`
<osds-code ...=${getTagAttributes(args)}><span slot="copy"><osds-button color="default" contrasted size="sm" variant="ghost"><osds-icon name="copy" size="xs" contrasted></osds-icon></osds-button></span>${unsafeHTML(args.codeContent)}</osds-code>
`;
export const Copy = TemplateCopy.bind({});
Copy.args = {
...extractStoryParams(storyParams),
};

