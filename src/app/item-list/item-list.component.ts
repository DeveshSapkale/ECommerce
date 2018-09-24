import { Component, OnInit } from '@angular/core';
import { Product } from '../../Shared/Product';
import { CommunicationService } from '../communication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent extends CommunicationService implements OnInit {

  itemlist: any;
  constructor(http: HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.GetAllData('Products')
      .subscribe(result => this.itemlist = result as Product[]);
  }

}
