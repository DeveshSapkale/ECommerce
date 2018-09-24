import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../../Shared/ProductCategory';
import { CommunicationService } from '../../communication.service';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Product } from '../../../Shared/Product';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent extends CommunicationService implements OnInit {
  categories: any;
  formGroup: FormGroup;
  constructor(http: HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.GetCategories('Product/Categories')
      .subscribe(result => this.categories = result as ProductCategory[]);
    this.formGroup = new FormGroup({
      productName: new FormControl(),
      productPrice: new FormControl(),
      productCategory: new FormControl()
    });
  }
  onSubmit() {
    const formValues = this.formGroup.value;
    const product = new Product();
    product.Product_Name = formValues.productName;
    product.Product_category_id = formValues.productCategory ;
    product.Best_before_months = 10;
    product.Expiry_date = new Date(2050, 9, 22);
    product.Mfg_date = new Date();
    product.Offer = 15;
    product.Price = formValues.productPrice;

    this.CreateData('Product/Create', product)
      .subscribe(result => result);
  }

}
