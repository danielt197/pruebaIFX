import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-races-info',
  templateUrl: './races-info.component.html',
  styleUrls: ['./races-info.component.scss'],
  providers: [ApisService]
})
export class RacesInfoComponent implements OnInit {

  nameRace: String;
  raceInfo: any = [];
  toggles:any = {
    age: false,
    alignment: false,
    language_desc: false,
    size_description: false
  }

  constructor(
    private api: ApisService,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getRaceInfo();
  }
  
  getRaceInfo(){
    this.nameRace = this.actRouter.snapshot.params.name;
    this.api.getRacesByUrl(this.nameRace).subscribe(
      (raceInfo: any) => {
        console.log(raceInfo);
        this.raceInfo = raceInfo;
        
      }
    )
  }

  Toggle(element){
    this.toggles[`${element}`] = !this.toggles[`${element}`]
  }

}
