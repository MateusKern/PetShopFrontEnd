import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error',
  template: `
  <p *ngIf="shouldShowErrorMessage()" class="text-danger">
    {{ errorMessage }}
  </p>`
})
export class ErrorComponent {
  @Input() formControl!: FormControl | FormGroup | FormArray

  constructor() { }

  public shouldShowErrorMessage(): boolean {
    return this.formControl.invalid && this.formControl.touched
  }

  public get errorMessage(): string | null {
    // if (this.formControl.errors.erro) {
    //   return this.formControl.errors.erro.value
    // } else if (this.formControl.errors.errorMessage) {
    //   return this.formControl.errors.errorMessage
    // } else if (this.formControl.errors) {
    //   return 'Por favor preencha o campo corretamente'
    // } else {
      return null
    // }
  }
}
