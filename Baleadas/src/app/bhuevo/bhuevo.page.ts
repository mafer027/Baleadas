import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HuevoPage } from '../huevo/huevo.page';
import { HuevovPage } from '../huevov/huevov.page';

@Component({
  selector: 'app-bhuevo',
  templateUrl: './bhuevo.page.html',
  styleUrls: ['./bhuevo.page.scss'],
})
export class BhuevoPage implements OnInit {

  constructor(public modalController3: ModalController ) { }

  ngOnInit() {
  }
  async shModal() {
    const modal = await this.modalController3.create({
      component: HuevoPage,
      cssClass: 'my-class-modal'
    });
    return await modal.present();
  }

  async hModal() {
    const modal = await this.modalController3.create({
      component: HuevovPage,
      cssClass: 'my-class-modal'      
    });
    return await modal.present();
  }
}
