import { OdsComponentController } from '../../ods-component-controller';
import { OdsSelectValidityState } from './ods-select-validity-state';
import { OdsSelect } from './ods-select';

/**
 * common controller logic for select component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsSelectController extends OdsComponentController<OdsSelect> {

  constructor(component: OdsSelect) {
    super(component);
  }

  /**
   * get the validity object properties of the component.
   * it is based on the validity state of the vanilla select.
   * in case of no vanilla select passed, it returns the default value for each property
   */
  getValidity(): OdsSelectValidityState {
    const requiredError = this.hasRequiredError();
    return {
      valid: !requiredError,
      invalid: requiredError,
      forbiddenValue: false,
      valueMissing: requiredError,
      stepMismatch: false,
      customError: false,
    };
  }

  /**
   * if the value of the component is required:
   * it returns true if the value is undefined.
   * it returns false if the value is set.
   */
  hasRequiredError(): boolean {
    if (this.component.required) {
      return !this.component.value;
    }
    return false;
  }
}