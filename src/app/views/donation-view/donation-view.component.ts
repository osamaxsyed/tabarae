import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-donation-view',
  templateUrl: './donation-view.component.html',
  styleUrls: ['./donation-view.component.scss']
})
export class DonationViewComponent implements OnInit {

  categories: Category[] = [
    {
        name: "Water",
        raisedAmount: 10,
        targetAmount: 200
    },
    {
        name: "Electricity",
        raisedAmount: 30,
        targetAmount: 600
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
