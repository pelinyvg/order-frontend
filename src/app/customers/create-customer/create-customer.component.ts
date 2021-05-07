import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    code: '',
    phoneNumber: '',
    street: '',
    number: '',
    postalCode: '',
    country: ''
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }
}
