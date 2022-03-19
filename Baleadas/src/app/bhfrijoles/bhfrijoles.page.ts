import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AguacatePage } from '../aguacate/aguacate.page';
import { CarnePage } from '../carne/carne.page';


@Component({
  selector: 'app-bhfrijoles',
  templateUrl: './bhfrijoles.page.html',
  styleUrls: ['./bhfrijoles.page.scss'],
})
export class BhfrijolesPage implements OnInit {

  constructor(public modalController2: ModalController ) { }

  ngOnInit() {
  }
  async aModal() {
    const modal = await this.modalController2.create({
      component: AguacatePage,
      cssClass: 'my-class-modal'
    });
    return await modal.present();
  }

  async cModal() {
    const modal = await this.modalController2.create({
      component: CarnePage,
      cssClass: 'my-class-modal'      
    });
    return await modal.present();
  }
}
