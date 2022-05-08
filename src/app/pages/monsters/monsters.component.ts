import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss'],
  providers: [ApisService]
})
export class MonstersComponent implements OnInit {

  dataMonsters: any = [];
  search: any = [];
  constructor(
    private api: ApisService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMonsters();
    console.log(this.router.url)
  }

  getMonsters(){
    this.api.getMonsters().subscribe(
      (monsters: any) => {
        this.dataMonsters = monsters.results;
        monsters.results.map(e => {
          // this.api.getMonsterByUrl(e.url).subscribe();
        })
      }
    )
  }

}
