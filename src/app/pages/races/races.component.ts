import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
  providers: [ApisService]
})
export class RacesComponent implements OnInit {

  dataRaces : any = [];
  search: String;

  constructor(
    private api: ApisService
  ) { }

  ngOnInit(): void {
    this.getRaces();
  }

  getRaces(){
    this.api.getRaces().subscribe(
      (races: any) => {
        // console.log(races);
        this.dataRaces = races.results;
      }
    );
  }

}
