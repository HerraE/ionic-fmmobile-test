import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss']
})
export class HomePage {

  private auftragSearch: any = {
    auftragNr: 'B2788665'
  };

  constructor(public navCtrl: NavController) {

  }

}
