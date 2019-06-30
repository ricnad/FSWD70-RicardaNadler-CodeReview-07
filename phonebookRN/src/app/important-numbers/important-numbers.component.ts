import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'important-numbers',
  templateUrl: './important-numbers.component.html',
  styleUrls: ['./important-numbers.component.sass']
})
export class ImportantNumbersComponent implements OnInit {
	inumberArray = [
	{
		firstname: "Ricarda",
		lastname: "Nadler",
		pnumber: "12345678"
	},
	{
		firstname: "Martin",
		lastname: "Nadler",
		pnumber: "22345678"
	},
	{
		firstname: "Susi",
		lastname: "Nadler",
		pnumber: "32345678"
	},
	{
		firstname: "Leo",
		lastname: "Nadler",
		pnumber: "42345678"
	}

	];

  constructor() { }


  ngOnInit() {
  }

}
