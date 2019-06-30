import { Component, OnInit } from '@angular/core';
import { PhoneBookService} from '../shared/phone-book.service';


@Component({
  selector: 'phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.sass']
})
export class PhoneBookComponent implements OnInit {

  constructor(private phonebookService: PhoneBookService) { }
  submitted: boolean;
  formControls = this.phonebookService.form.controls;
  showSuccessMessage: boolean;
 

  ngOnInit() {
  }

  onSubmit(){
  	this.submitted = true;
  	if(this.phonebookService.form.valid){
  		if(this.phonebookService.form.get('$key').value == null)
  			this.phonebookService.insertPhone(this.phonebookService.form.value);
  			else
  				this.phonebookService.updatePhone(this.phonebookService.form.value);
  			this.showSuccessMessage = true;
  			setTimeout(()=>this.showSuccessMessage=false,3000);
  			this.submitted = false;
  			this.phonebookService.form.reset();
  		} 
   	}

}
