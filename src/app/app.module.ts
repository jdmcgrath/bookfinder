import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CollectionComponent } from './collection/collection.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'collection', component: CollectionComponent },
];

var firebaseConfig = {
  apiKey: "AIzaSyBHX5tdlQEBUcwBoHnFdv3bWOgOy32JECs",
  authDomain: "bookfinder-dafee.firebaseapp.com",
  databaseURL: "https://bookfinder-dafee.firebaseio.com",
  projectId: "bookfinder-dafee",
  storageBucket: "bookfinder-dafee.appspot.com",
  messagingSenderId: "449818902077",
  appId: "1:449818902077:web:42417f75b822905aa63454"
};

@NgModule({
  declarations: [AppComponent, SearchComponent, CollectionComponent],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
