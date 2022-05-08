import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MonstersComponent } from './pages/monsters/monsters.component';
import { RacesInfoComponent } from './pages/races-info/races-info.component';
import { RacesComponent } from './pages/races/races.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'monsters',
    pathMatch: 'full'
  },
  {
    path: 'monsters',
    component: MonstersComponent
  },
  {
    path: 'races',
    component: RacesComponent
  },
  {
    path: 'race-info/:name',
    component: RacesInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
