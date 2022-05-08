import { Component, Input, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-monsters-info',
  templateUrl: './monsters-info.component.html',
  styleUrls: ['./monsters-info.component.scss'],
  providers: [ApisService]
})
export class MonstersInfoComponent implements OnInit {

  @Input() url: String
  monsterInfo: any = [];
  showAct: boolean = false;

  constructor(
    private api: ApisService
  ) { }

  ngOnInit(): void {
    this.getMonsterInfo();
  }

  getMonsterInfo(){
    this.api.getMonsterByUrl(this.url).subscribe(
      (monsterInfo: any) => {
        monsterInfo.damage_immunities = monsterInfo.damage_immunities.join(", ");

        this.monsterInfo = monsterInfo;
        console.log(this.monsterInfo);
        
      }
    );
  }

  showActions(){
    this.showAct = !this.showAct
  }

}
