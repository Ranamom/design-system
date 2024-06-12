import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-accordion navigation', () => {
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  it('summary should be focusable on tab', async() => {
    await setup(`
      <ods-accordion>
        <ods-text class="label" slot="summary" preset="label">Hello, world!</ods-text>
        <ods-text preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </ods-text>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    const isSummaryFocused = await page.evaluate(() => {
      const summary = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__wrapper__summary');
      const activeElement = document.activeElement?.shadowRoot?.activeElement;
      return summary === activeElement;
    });

    expect(isSummaryFocused).toBe(true);
  });

  it('summary should not be focusable on tab if disabled', async() => {
    await setup(`
      <ods-accordion is-disabled>
        <ods-text class="label" slot="summary" preset="label">Hello, world!</ods-text>
        <ods-text preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </ods-text>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    const isSummaryFocused = await page.evaluate(() => {
      const summary = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__wrapper__summary');
      const activeElement = document.activeElement?.shadowRoot?.activeElement;
      return summary === activeElement;
    });

    expect(isSummaryFocused).toBe(false);
  });

  it('details should toggle on "Enter" when focused', async() => {
    await setup(`
      <ods-accordion>
        <ods-text class="label" slot="summary" preset="label">Hello, world!</ods-text>
        <ods-text preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </ods-text>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    const isDetailsOpen = await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__wrapper');
      return details?.getAttribute('open') === '';
    });

    expect(isDetailsOpen).toBe(true);
  });

  it('details should toggle on "Space" when focused', async() => {
    await setup(`
      <ods-accordion>
        <ods-text class="label" slot="summary" preset="label">Hello, world!</ods-text>
        <ods-text preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </ods-text>
      </ods-accordion>
    `);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    await page.waitForChanges();

    const isDetailsOpen = await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__wrapper');
      return details?.getAttribute('open') === '';
    });

    expect(isDetailsOpen).toBe(true);
  });

  it('details should toggle on click', async() => {
    await setup(`
      <ods-accordion>
        <ods-text class="label" slot="summary" preset="label">Hello, world!</ods-text>
        <ods-text preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </ods-text>
      </ods-accordion>
    `);
    const details = await page.find('ods-accordion >>> .ods-accordion__wrapper');

    await details.click();
    await page.waitForChanges();

    const isDetailsOpen = await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__wrapper');
      return details?.getAttribute('open') === '';
    });

    expect(isDetailsOpen).toBe(true);
  });

  it('details should not toggle on click if disabled', async() => {
    await setup(`
      <ods-accordion is-disabled>
        <ods-text class="label" slot="summary" preset="label">Hello, world!</ods-text>
        <ods-text preset="span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
        </ods-text>
      </ods-accordion>
    `);
    const details = await page.find('ods-accordion >>> .ods-accordion__wrapper');

    await details.click();
    await page.waitForChanges();

    const isDetailsOpen = await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__wrapper');
      return details?.getAttribute('open') === '';
    });

    expect(isDetailsOpen).toBe(false);
  });

});
