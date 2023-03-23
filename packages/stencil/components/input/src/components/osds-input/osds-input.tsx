import { Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import {
  OdsErrorStateControl,
  OdsFormControl,
  OdsFormForbiddenValues,
  OdsIconName,
  OdsIconSize,
  OdsInput,
  OdsInputController,
  OdsInputEvents,
  OdsInputMethods,
  OdsInputSize,
  OdsInputType,
  OdsInputValidityState,
  OdsInputValue,
  OdsInputValueChangeEventDetail,
  OdsLogger,
  odsInputDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 *
 */
@Component({
  tag: 'osds-input',
  styleUrl: 'osds-input.scss',
  shadow: true,
})
export class OsdsInput implements OdsInput<OdsStencilMethods<OdsInputMethods>, OdsStencilEvents<OdsInputEvents>> {
  private logger = new OdsLogger('OsdsInput');
  private static inputIds = 0;
  private inputId = `ods-input-${OsdsInput.inputIds++}`;
  controller: OdsInputController = new OdsInputController(this);

  @Element() el!: HTMLElement;
  inputEl?: HTMLInputElement;

  /**
   * The tabindex of the input.
   * @internal
   */
  @State() inputTabindex = 0;
  @State() hasFocus = false;

  /** @see OdsInputAttributes.ariaLabel */
  @Prop() ariaLabel: HTMLElement['ariaLabel'] = odsInputDefaultAttributes.ariaLabel;

  /** @see OdsInputAttributes.ariaLabelledby */
  @Prop() ariaLabelledby?: string = odsInputDefaultAttributes.ariaLabelledby;

  /** @see OdsInputAttributes.type */
  @Prop({ reflect: true }) type: OdsInputType = odsInputDefaultAttributes.type;

  /** @see OdsInputAttributes.disabled */
  @Prop({ reflect: true }) disabled?: boolean = odsInputDefaultAttributes.disabled;

  /** @see OdsInputAttributes.contrasted */
  @Prop({ reflect: true }) contrasted?: boolean = odsInputDefaultAttributes.contrasted;

  /** @see OdsInputAttributes.color */
  @Prop({ reflect: true }) color?: OdsThemeColorIntent = odsInputDefaultAttributes.color;

  /** @see OdsInputAttributes.flex */
  @Prop({ reflect: true }) flex?: boolean = odsInputDefaultAttributes.flex;

  /** @see OdsInputAttributes.size */
  @Prop({ reflect: true }) size?: OdsInputSize = odsInputDefaultAttributes.size;

  /** @see OdsInputAttributes.max */
  @Prop({ reflect: true }) max?: number = odsInputDefaultAttributes.max;

  /** @see OdsInputAttributes.min */
  @Prop({ reflect: true }) min?: number = odsInputDefaultAttributes.min;

  /** @see OdsInputAttributes.step */
  @Prop({ reflect: true }) step?: number = odsInputDefaultAttributes.step;

  /** @see OdsInputAttributes.placeholder */
  @Prop({ reflect: true }) placeholder?: string = odsInputDefaultAttributes.placeholder;

  /** @see OdsInputAttributes.label */
  @Prop({ reflect: true }) label?: string = odsInputDefaultAttributes.label;

  /** @see OdsInputAttributes.name */
  @Prop({ reflect: true }) name?: string = odsInputDefaultAttributes.name;

  /** @see OdsInputAttributes.required */
  @Prop({ reflect: true }) required?: boolean = odsInputDefaultAttributes.required;

  /** @see OdsInputAttributes.readOnly */
  @Prop({ reflect: true }) readOnly?: boolean = odsInputDefaultAttributes.readOnly;

  /** @see OdsInputAttributes.value */
  @Prop({ reflect: true, mutable: true }) value: OdsInputValue = odsInputDefaultAttributes.value;

  /** @see OdsInputAttributes.defaultValue */
  @Prop({ reflect: true }) defaultValue: OdsInputValue = odsInputDefaultAttributes.defaultValue;

  /** @see OdsInputAttributes.icon */
  @Prop({ reflect: true }) icon?: OdsIconName = odsInputDefaultAttributes.icon;

  /** @see OdsInputAttributes.formControl */
  @Prop({ reflect: true }) formControl?: OdsFormControl<OdsInputValidityState> = odsInputDefaultAttributes.formControl;

  /** @see OdsInputAttributes.errorStateControl */
  @Prop({ reflect: true }) errorStateControl?: OdsErrorStateControl = odsInputDefaultAttributes.errorStateControl;

  /** @see OdsInputAttributes.error */
  @Prop({ reflect: true }) error?: boolean = odsInputDefaultAttributes.error;

  /** @see OdsInputAttributes.forbiddenValues */
  @Prop({ reflect: true }) forbiddenValues: OdsFormForbiddenValues<number> = odsInputDefaultAttributes.forbiddenValues;

  /** @see OdsInputEvents.odsValueChange */
  @Event() odsValueChange!: EventEmitter<OdsInputValueChangeEventDetail>;

  /** @see OdsInputEvents.odsInputBlur */
  @Event() odsInputBlur!: EventEmitter<void>;

  /** @see OdsInputEvents.odsInputFocus */
  @Event() odsInputFocus!: EventEmitter<void>;

  @Watch('formControl')
  onFormControlChange(formControl?: OdsFormControl<OdsInputValidityState>) {
    this.controller.onFormControlChange(formControl);
  }

  @Watch('defaultValue')
  onDefaultValueChange(defaultValue?: OdsInputValue) {
    this.controller.onDefaultValueChange(defaultValue);
  }

  @Watch('value')
  onValueChange(value: OdsInputValue, oldValue?: OdsInputValue) {
    this.controller.onValueChange(value, oldValue);
  }

  @Listen('focus')
  focus() {
    this.setFocus.bind(this)();
  }

  /**
   * @see OdsInputBehavior.beforeInit
   */
  beforeInit() {
    this.controller.beforeInit();
  }

  componentWillLoad() {
    this.beforeInit();
  }

  /**
   * @see OdsInputBehavior.emitChange
   */
  emitChange(value: OdsInputValue, oldValue?: OdsInputValue) {
    this.logger.debug('emit', { value, oldValue });
    this.odsValueChange.emit({
      value: value == null ? value : `${value}`,
      oldValue: oldValue == null ? oldValue : `${oldValue}`,
      validity: this.controller.getInputValidity()
    });
  }

  /**
   * @see OdsInputBehavior.emitFocus
   */
  emitFocus(): void {
    this.odsInputFocus.emit();
  }

  /**
   * @see OdsInputBehavior.emitBlur
   */
  emitBlur(): void {
    this.odsInputBlur.emit();
  }

  /**
   * @see OdsInputMethods.setFocus
   */
  @Method()
  async setFocus() {
    this.inputEl?.focus();
  }

  /**
   * @see OdsInputMethods.getValidity
   */
  @Method()
  async getValidity() {
    return this.controller.getInputValidity(this.inputEl);
  }

  /**
   * @see OdsInputMethods.clear
   */
  @Method()
  async clear() {
    this.controller.clear();
  }

  /**
   * @see OdsInputMethods.reset
   */
  @Method()
  async reset() {
    this.controller.reset();
  }

  /**
   * @see OdsInputMethods.setFocus
   */
  @Method()
  async stepUp() {
    this.controller.stepUp();
  }

  /**
   * @see OdsInputMethods.stepDown
   */
  @Method()
  async stepDown() {
    this.controller.stepDown();
  }

  /**
   * @see OdsInputMethods.setInputTabindex
   */
  @Method()
  async setInputTabindex(value: number) {
    this.controller.setInputTabindex(value);
  }

  hasError(): boolean {
    return this.controller.hasError();
  }

  /**
   * @see OdsInputBehavior.onBlur
   */
  onBlur(): void {
    this.controller.onBlur();
  }

  /**
   * @see OdsInputBehavior.onFocus
   */
  onFocus(): void {
    this.controller.onFocus();
  }

  /**
   * @see OdsInputBehavior.onInput
   */
  onInput(event: Event) {
    this.controller.onInput(event);
  }

  /**
   * @see OdsInputBehavior.onChange
   */
  onChange(/*event: Event*/) {
    this.controller.onChange();
  }

  render() {
    const {
      ariaLabel,
      ariaLabelledby,
      color,
      disabled,
      hasError,
      hasFocus,
      icon,
      inputId,
      inputTabindex,
      max,
      min,
      name,
      placeholder,
      readOnly,
      required,
      step,
      type,
      value,
    } = this;

    const labelId = ariaLabelledby ? ariaLabelledby : `${inputId}-label`;

    return (
      <Host {...{
        class: {
          'ods-error': Boolean(hasError.bind(this)()),
        },
        tabindex: inputTabindex,
        hasFocus,
      }}
      >
        <input
          {...{
            ariaLabel,
            ariaLabelledby: labelId || null,
            disabled,
            id: inputId,
            max,
            min,
            name,
            onBlur: () => this.onBlur(),
            onChange: () => this.onChange(),
            onFocus: () => this.onFocus(),
            onInput: (e) => this.onInput(e),
            placeholder,
            readOnly,
            ref: (el) => this.inputEl = el as HTMLInputElement,
            required,
            step,
            tabindex: '-1',
            type,
            value: value?.toString() || '',
          }}
        >
        </input>
        {
          icon && (
            <osds-icon
              {...{
                ariaName: `${icon} icon`,
                name: icon,
                size: OdsIconSize.xs,
                color
              }}></osds-icon>
          ) || ''
        }
      </Host>
    );
  }
}