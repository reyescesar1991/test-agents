import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required],
      date: ['', Validators.required],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      // In a real app, you would send this to your backend
      const formData = this.appointmentForm.value;
      console.log('Form submitted:', formData);
      
      // Add success animation/feedback here
      // Could use Angular Material snackbar or custom animation
    } else {
      // Mark all fields as touched to show validation errors
      this.appointmentForm.markAllAsTouched();
    }
  }
}
