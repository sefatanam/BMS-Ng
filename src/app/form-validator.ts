import { FormGroup } from '@angular/forms'
import { FormInterface } from './form-interface'

export function createFormPageValidator(form: FormGroup): { [key: string]: any } | null {
    const formValue: FormInterface = form.value;
    return createFormPageValueValidator(formValue);

}

export function createFormPageValueValidator(formValue: FormInterface): { [key: string]: any } | null {
    const errors = {};
    if (!formValue.firstName && !formValue.firstName) {
        errors['firstName'] = true;
    }
    if (!formValue.lastName && !formValue.lastName) {
        errors['lastName'] = true;
    }
    if (!formValue.contactNo && !formValue.contactNo) {
        errors['contactNo'] = true;
    }

    return Object.keys(errors).length ? errors : null;
}

// export function deliveryPageFromValidator(deliveryPageFrom: FormGroup): { [key: string]: any } | null {
//     const formValue: DeliveryPageFormValue = deliveryPageFrom.value;
//     return deliveryPageFromValueValidator(formValue);
//   }
