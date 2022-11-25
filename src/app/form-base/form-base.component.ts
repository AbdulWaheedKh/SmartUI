import { FormControl, FormGroup } from '@angular/forms';
// import { AppConstants } from 'app/app.constant';
// import { validateMessages } from './validation-messages';

export class FormBaseComponent<T>  {
  model: T;
  isSaveAction: boolean = true;
  form: FormGroup;
  paramId: string;
  pageType: string;

  // dateFormat: String = AppConstants.DATE_FORMAT;
  // dateTimeFormat: String = AppConstants.DATE_TIME_FORMAT;
  // timeFormate: String = AppConstants.TIME_FORMATE;

  // presents: string[] = [AppConstants.ATTENDANCE_TYPE_PRESENT, AppConstants.ATTENDANCE_TYPE_ABSENT, AppConstants.ATTENDANCE_TYPE_LATE];
  present_labels = new Array();

  constructor() {
    // super();
    // this.present_labels[AppConstants.ATTENDANCE_TYPE_PRESENT] = AppConstants.ATTENDANCE_TYPE_PRESENT_LABEL;
    // this.present_labels[AppConstants.ATTENDANCE_TYPE_ABSENT] = AppConstants.ATTENDANCE_TYPE_ABSENT_LABEL;
    // this.present_labels[AppConstants.ATTENDANCE_TYPE_LATE] = AppConstants.ATTENDANCE_TYPE_LATE_LABEL;
  }

  // Validatiors 
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  // custom validator to check that two fields match
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  mustGreater(control1: string, control2: string) {
    return (formGroup: FormGroup) => {
      const controlFirst = formGroup.controls[control1];
      const controlSecond = formGroup.controls[control2];
      if (controlSecond.errors && !controlSecond.errors.mustGreater) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      // set error on matchingControl if validation fails
      if (controlFirst.value > controlSecond.value) {
        controlSecond.setErrors({ mustGreater: true });
      } else {
        controlSecond.setErrors(null);
      }
    }
  }

  // Sucess messages 
  // public showSaveSuccessMessage(matSnackBar: any) {
  //   matSnackBar.open(AppConstants.MESSAGE_SUCCESSFULLY_CREATED, AppConstants.MESSAGE_LABLE_OK, {
  //     verticalPosition: 'top',
  //     duration: 2000
  //   });
  // }

  // public showUpdateSuccessMessage(matSnackBar: any) {
  //   matSnackBar.open(AppConstants.MESSAGE_SUCCESSFULLY_UPDATED, AppConstants.MESSAGE_LABLE_OK, {
  //     verticalPosition: 'top',
  //     duration: 2000
  //   });
  // }

}
