import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BhuevoPage } from '../bhuevo/bhuevo.page';
import { BhfrijolesPage } from '../bhfrijoles/bhfrijoles.page';


@Component({
  selector: 'app-mymodal',
  templateUrl: './mymodal.page.html',
  styleUrls: ['./mymodal.page.scss'],
})
export class MymodalPage implements OnInit {

  constructor(public modalController1: ModalController) { }

  ngOnInit() {
  }
  async bhModal() {
    const modal = await this.modalController1.create({
      component: BhuevoPage,
      cssClass: 'my-class-modal'
    });
    return await modal.present();
  }

  async bhfModal() {
    const modal = await this.modalController1.create({
      component: BhfrijolesPage,
      cssClass: 'my-class-modal'      
    });
    return await modal.present();
  }

}
