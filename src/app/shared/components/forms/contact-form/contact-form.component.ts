import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
    standalone: false
})
export class ContactFormComponent {
  public contactForm!: FormGroup;
  public formSubmitted = false;

  constructor(private toastrService: ToastrService) { }

  ngOnInit () {
    this.contactForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      subject:new FormControl(null,Validators.required),
      message:new FormControl(null,Validators.required),
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      console.log('contact-form-value', this.contactForm.value);
      this.toastrService.success(`Message sent successfully`);

      // Reset the form
      this.contactForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }
    console.log('contact-form', this.contactForm);
  }

  get name() { return this.contactForm.get('name') }
  get email() { return this.contactForm.get('email') }
  get subject() { return this.contactForm.get('subject') }
  get message() { return this.contactForm.get('message') }
}
