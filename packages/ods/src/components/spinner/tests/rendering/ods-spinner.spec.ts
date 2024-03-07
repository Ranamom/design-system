import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_SPINNER_COLOR, ODS_SPINNER_SIZE, OdsSpinner } from '../../src';

describe('ods-spinner rendering', () => {
  let container: Element | null | undefined;
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsSpinner],
      html,
    });

    root = page.root;
    container = root?.shadowRoot?.querySelector('.ods-spinner__container');
  }

  describe('props', () => {
    describe('color', () => {
      it('should be reflected', async() => {
        await setup(`<ods-spinner color=${ODS_SPINNER_COLOR.primary}></ods-spinner>`);

        expect(root?.getAttribute('color')).toBe(ODS_SPINNER_COLOR.primary);
      });

      it('should render with expected default value', async() => {
        await setup(`<ods-spinner color=${ODS_SPINNER_COLOR.primary}></ods-spinner>`);

        expect(container?.classList.contains('ods-spinner__container--primary')).toBe(true);
      });
    });

    describe('size', () => {
      it('should be reflected', async() => {
        await setup(`<ods-spinner size="${ODS_SPINNER_SIZE.md}"></ods-spinner>`);

        expect(root?.getAttribute('size')).toBe(ODS_SPINNER_SIZE.md);
      });

      it('should not be set by default', async() => {
        await setup(`<ods-spinner></ods-spinner>`);

        expect(container?.classList.contains('ods-spinner__container--sm')).toBe(false);
        expect(container?.classList.contains('ods-spinner__container--md')).toBe(false);
        expect(container?.classList.contains('ods-spinner__container--lg')).toBe(false);
      });

      it('should render with unique size class if set', async() => {
        await setup(`<ods-spinner size="${ODS_SPINNER_SIZE.sm}"></ods-spinner>`);

        expect(container?.classList.contains('ods-spinner__container--sm')).toBe(true);
        expect(container?.classList.contains('ods-spinner__container--md')).toBe(false);
        expect(container?.classList.contains('ods-spinner__container--lg')).toBe(false);

        await setup(`<ods-spinner size="${ODS_SPINNER_SIZE.md}"></ods-spinner>`);

        expect(container?.classList.contains('ods-spinner__container--sm')).toBe(false);
        expect(container?.classList.contains('ods-spinner__container--md')).toBe(true);
        expect(container?.classList.contains('ods-spinner__container--lg')).toBe(false);

        await setup(`<ods-spinner size="${ODS_SPINNER_SIZE.lg}"></ods-spinner>`);

        expect(container?.classList.contains('ods-spinner__container--sm')).toBe(false);
        expect(container?.classList.contains('ods-spinner__container--md')).toBe(false);
        expect(container?.classList.contains('ods-spinner__container--lg')).toBe(true);
      });
    });
  });
});