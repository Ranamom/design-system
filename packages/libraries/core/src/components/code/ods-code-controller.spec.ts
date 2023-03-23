import { OdsIconName, OdsIconSize } from '../icon/ods-icon-size';
import { OdsButton } from '../button/ods-button';
import { OdsButtonSize } from '../button/ods-button-size';
import { OdsButtonVariant } from '../button/ods-button-variant';
import { OdsCode } from './ods-code';
import { OdsCodeController } from './ods-code-controller';
import { OdsCodeMock } from './ods-code-mock';
import { OdsDeepPartial } from '../../types/ods-deep-partial';
import { OdsIcon } from '../icon/ods-icon';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';
import { OdsLogger } from '../../logger/ods-logger';
import { Ods } from '../../configure/ods';

Ods.instance().logging(false);

const navigatorMocked: OdsDeepPartial<Pick<typeof navigator, 'clipboard'>> = {
  clipboard: {
    writeText: jest.fn()
  }
}
Object.assign(navigator, navigatorMocked);

describe('spec:ods-code-controller', () => {
  let controller: OdsCodeController;
  let component: OdsCode;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  function setup(attributes: Partial<OdsCode> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsCodeController(component);
  }

  beforeEach(() => {
    component = new OdsCodeMock();
    component.el = document.createElement('osds-code') as HTMLElement;
    component.codeEl = document.createElement('code') as HTMLElement;

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsCodeController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  it('should initialize', () => {
    setup();
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    describe('methods:copyCode', () => {
      it('should copy code content to clipboard', () => {
        setup();
        const textNode = document.createTextNode('Code content');
        const slot = document.createElement('slot');
        const spyOnQuerySelectorCodeEL = jest.spyOn(component.codeEl, 'querySelector').mockImplementation(() => {
          return slot;
        });
        const spyOnAssignedElements = jest.spyOn(slot, 'assignedNodes').mockImplementation(() => [textNode]);
        const spyOnClipboard = jest.spyOn(navigator.clipboard, "writeText");
        controller.copyCode();
        expect(spyOnQuerySelectorCodeEL).toHaveBeenCalledWith('slot');
        expect(spyOnQuerySelectorCodeEL).toHaveBeenCalledTimes(1);
        expect(spyOnAssignedElements).toHaveBeenCalledWith();
        expect(spyOnAssignedElements).toHaveBeenCalledTimes(1);
        expect(spyOnClipboard).toHaveBeenCalledWith('Code content');
      });

      it('should call component.emitCopy', () => {
        setup();
        const spyOn = jest.spyOn(component, 'emitCopy');
        controller.copyCode();
        expect(spyOn).toHaveBeenCalled();
      });
    });

    describe('methods:autocompleteCopySlot', () => {
      it('should warn if ods-button size is different than sm', () => {
        setup();
        const button = document.createElement('osds-button') as (HTMLSlotElement & OdsButton);
        button.setAttribute('size', OdsButtonSize.sm);
        controller.autocompleteCopySlot(button, null);
        expect(loggerSpyReferences.methodSpies.warn).toBeCalledTimes(0);

        button.setAttribute('size', OdsButtonSize.md);
        controller.autocompleteCopySlot(button, null);
        expect(loggerSpyReferences.methodSpies.warn).toBeCalledWith('size on copy slot will be overridden with sm');
        expect(loggerSpyReferences.methodSpies.warn).toBeCalledTimes(1);
      });

      it('should warn if ods-icon size is different than xs', () => {
        setup();
        const button = document.createElement('osds-button') as (HTMLSlotElement & OdsButton);
        const icon = document.createElement('osds-icon') as (HTMLSlotElement & OdsIcon);
        button.appendChild(icon);

        icon.setAttribute('size', OdsIconSize.xs);
        controller.autocompleteCopySlot(button, icon);
        expect(loggerSpyReferences.methodSpies.warn).toBeCalledTimes(0);

        icon.setAttribute('size', OdsIconSize.xl);
        controller.autocompleteCopySlot(button, icon);
        expect(loggerSpyReferences.methodSpies.warn).toBeCalledWith('size on icon component will be overridden with xs');
        expect(loggerSpyReferences.methodSpies.warn).toBeCalledTimes(1);
      });

      it('should set ods-button attributes', () => {
        setup();
        const button = document.createElement('osds-button') as (HTMLSlotElement & OdsButton);
        controller.autocompleteCopySlot(button, null);
        expect(button.size).toBe(OdsButtonSize.sm);
        expect(button.variant).toBe(OdsButtonVariant.ghost);
        expect(button.contrasted).toBe(true);
      });

      it('should create default ods-icon in ods-button', () => {
        setup();
        const button = document.createElement('osds-button') as (HTMLSlotElement & OdsButton);
        controller.autocompleteCopySlot(button, null);
        const icon = button.querySelector('osds-icon') as (HTMLSlotElement & OdsIcon);
        expect(icon.size).toBe(OdsIconSize.xs);
        expect(icon.name).toBe(OdsIconName.COPY);
        expect(icon.contrasted).toBe(true);
      });

      it('should set attributes on custom ods-icon', () => {
        setup();
        const button = document.createElement('osds-button') as (HTMLSlotElement & OdsButton);
        const icon = document.createElement('osds-icon') as (HTMLSlotElement & OdsIcon);
        icon.name = OdsIconName.FILE;
        button.appendChild(icon);

        controller.autocompleteCopySlot(button, icon);
        expect(icon.name).toBe(OdsIconName.FILE);
        expect(icon.size).toBe(OdsIconSize.xs);
        expect(icon.contrasted).toBe(true);
      });
    });
  });
});