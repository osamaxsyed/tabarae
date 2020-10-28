import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.scss']
})
export class CategoryComponentComponent implements OnInit {
  @Input()
  category:Category;
  percentageRaised: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.category);
    this.percentageRaised = this.category.raisedAmount/this.category.targetAmount*100;
    console.log(this.percentageRaised);
  }

  donate(): void {
    if(this.category.raisedAmount<this.category.targetAmount){
      this.category.raisedAmount+=10;
      this.percentageRaised = this.calculatePercentageRaised(this.category.raisedAmount,this.category.targetAmount);

    }
  }

  calculatePercentageRaised(raisedAmount:number, targetAmount:number): number {
    return raisedAmount/targetAmount*100;
  }



}
