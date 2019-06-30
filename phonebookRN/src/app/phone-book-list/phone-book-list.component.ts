import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from '../shared/phone-book.service';


@Component({
  selector: 'phone-book-list',
  templateUrl: './phone-book-list.component.html',
  styleUrls: ['./phone-book-list.component.sass']
})
export class PhoneBookListComponent implements OnInit {
	phoneArray=[];
	showDeletedMessage: boolean;
	searchText: string="";

  constructor(private phonebookService: PhoneBookService) { }

  ngOnInit() {
  	 this.phonebookService.getPhone().subscribe(
                 (list) => {
                         this.phoneArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                    }
  								})
  			});
  }

    onDelete($key){
  	if(confirm("Are you sure you want to delete this phone number?")){
  		this.phonebookService.deletePhone($key);
  		this.showDeletedMessage = true;
  		setTimeout(()=> this.showDeletedMessage=false, 3000);
  	}
  }
  	filterCondition(phone){
      return phone.firstName.toLowerCase().indexOf(this.searchText.toLowerCase())!=-1;
  	}

    filterCondition1(phone){
      return phone.lastName.toLowerCase().indexOf(this.searchText.toLowerCase())!=-1;
    }

}
