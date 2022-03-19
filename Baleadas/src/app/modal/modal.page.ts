import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MymodalPage } from '../mymodal/mymodal.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: MymodalPage,
      cssClass: 'my-class-modal'
    });
    return await modal.present();
  }
}
