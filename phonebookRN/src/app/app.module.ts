import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { PhoneBookListComponent } from './phone-book-list/phone-book-list.component';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { PhoneBookService } from './shared/phone-book.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ImportantNumbersComponent,
    PhoneBookComponent,
    PhoneBookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firbaseConfig),
    AngularFireDatabaseModule,
    FormsModule

  ],
  providers: [PhoneBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
