import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	private timer;

	constructor(public navCtrl: NavController) {

		this.timer = setTimeout(() => this.navCtrl.navigateForward('/Login'), 2000);
  	}

}
