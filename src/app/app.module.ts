import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonstersComponent } from './pages/monsters/monsters.component';
import { RacesComponent } from './pages/races/races.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MonstersPipe } from './pages/monsters/monsters.pipe';
import { MonstersInfoComponent } from './components/monsters-info/monsters-info.component';
import { RacesPipe } from './pages/races/races.pipe';
import { RacesInfoComponent } from './pages/races-info/races-info.component';

@NgModule({
  declarations: [
    
    AppComponent,
    MonstersComponent,
    RacesComponent,
    MonstersPipe,
    MonstersInfoComponent,
    RacesPipe,
    RacesInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  exports: [
    MonstersInfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
