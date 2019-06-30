import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  constructor(private firebase: AngularFireDatabase) { }
  phoneList: AngularFireList<any>;

  form = new FormGroup({
  	$key: new FormControl (null),
  	firstName: new FormControl('', Validators.required),
  	lastName: new FormControl('', Validators.required),
  	phone: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  getPhone(){
  	this.phoneList = this.firebase.list('phones');
  	return this.phoneList.snapshotChanges();
  };

  insertPhone (phone){
  	this.phoneList.push({
  		firstName: phone.firstName,
  		lastName: phone.lastName,
  		phone: phone.phone
  	});
  }

  populateForm(phone){
  	this.form.setValue(phone);
  }

  updatePhone(phone){
  	this.phoneList.update(phone.$key,{
  		firstName: phone.firstName,
  		lastName: phone.lastName,
  		phone: phone.phone
  	});
  }
  deletePhone($key: string){
  	this.phoneList.remove($key);
  }

}
