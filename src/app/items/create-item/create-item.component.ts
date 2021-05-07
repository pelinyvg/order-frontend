import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../service/item.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  createItemForm = this.formBuilder.group({
      name: new FormControl('',
        [Validators.required,
        Validators.minLength(4)]),
      description: new FormControl('',
        [Validators.required,
          Validators.maxLength(255)]),
      price: new FormControl('',
        [Validators.required,
          Validators.min(0)]),
      amountOfStock: new FormControl('',
        [Validators.required,
          Validators.min(0)])
    }
  );
  myText = '';

  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.itemService.addItem(this.createItemForm.value).subscribe(
      () => {
        this.createItemForm.reset();
        this.router.navigateByUrl('items');
      }
    );
  }

  get name(): any { return this.createItemForm.get('name'); }
  get description(): any { return this.createItemForm.get('description'); }
  get price(): any { return this.createItemForm.get('price'); }
  get amountOfStock(): any { return this.createItemForm.get('amountOfStock'); }
}
