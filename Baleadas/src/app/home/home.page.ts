import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public alertController: AlertController, public navController: NavController) {}

  ngOnInit() {    
  }
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'SEB',
      message: '¿Desea su baleada con huevo y frijoles?',
      buttons: [
        {
          text: 'No',          
          id: 'no-button',
          handler: () => {
            console.log('Confirm Cancel');            
          }
        }, {
          text: 'Sí',
          id: 'yes-button',
          handler: (data) => {
            console.log('Confirm Ok', data);            
          }
        }
      ]
    });

    await alert.present();
  }

}
