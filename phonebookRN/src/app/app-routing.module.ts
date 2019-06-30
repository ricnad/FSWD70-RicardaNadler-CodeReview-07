import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';


const routes: Routes = [
{
	path:"", component: HomeComponent
},
{
	path:"important", component: ImportantNumbersComponent
},
{
	path: "phone", component: PhoneBookComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
