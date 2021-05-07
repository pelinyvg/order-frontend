import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../service/item.service';
import {Item} from '../../model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  itemSelected: Item | any;
  searchText: any;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(
      items => this.items  = items
    );
  }
}
