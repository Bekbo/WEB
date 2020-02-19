import { Component, OnInit } from '@angular/core';
import {Category} from '../Category';
import {CategoryService} from '../category.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService, private location: Location
) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories.slice(0, 4));
  }
  share(product) {
    window.open('https://telegram.me/share/url?url=' + product.url + '/&text=' + product.name);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  back() {
    this.location.back();
  }
}
