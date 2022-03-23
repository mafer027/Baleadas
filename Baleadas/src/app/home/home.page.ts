import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    public alertController: AlertController
  ) {}

  goTonoEfectivoSinHuevo(){
    this.router.navigate(['/no-efectivo']);
  }

  goTosiEfectivoSinHuevo(){
    this.router.navigate(['/si-efectivo']);
  }

  goTonoEfectivoConHuevo(){
    this.router.navigate(['/no-efectivo-con-huevo']);
  }

  goTosiEfectivoConHuevo(){
    this.router.navigate(['/si-efectivo-con-huevo']);
  }

  goTosiEfectivoConSal(){
    this.router.navigate(['/si-efectivo-con-sal']);
  }

  goTonoEfectivoConSal(){
    this.router.navigate(['/no-efectivo-con-sal']);
  }

  goTonoEfectivoSinSal(){
    this.router.navigate(['/no-efectivo-sin-sal']);
  }
  goTosiEfectivoSinSal(){
    this.router.navigate(['/si-efectivo-sin-sal']);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ordenando la Baleada',
      message: 'Desea su Baleada Con Huevo y Frijoles?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm No');
            this.presentAlertConHuevo();
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Si');
            this.presentAlertAguacate();
          }
        }
      ]
    });

    await alert.present();
  } //Elige si quiere Baleada con Frijoles y Huevo Nivel 0

  async presentAlertConHuevo() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ordenando la Baleada',
      message: 'Solo con Huevo?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm No: Con Huevo');
            this.presentAlertEfectivoSinHuevo();
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Si: Con Huevo');
            this.presentAlertEfectivoConHuevo();
          }
        }
      ]
    });

    await alert.present();
  } //Despues de Elegir (NO) En el Primer Nivel 

  async presentAlertEfectivoSinHuevo() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ordenando la Baleada',
      message: 'Efectivo?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm No: Efectivo sin Huevo');
            this.goTonoEfectivoSinHuevo();
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Si: Efectivo sin Huevo');
            this.goTosiEfectivoSinHuevo();
          }
        }
      ]
    });

    await alert.present();
  } //Despues de Elegir (NO) en el Segundo Nivel - Huevo

  async presentAlertEfectivoConHuevo() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ordenando la Baleada',
      message: 'Efectivo?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm No: Efectivo con Huevo');
            this.goTonoEfectivoConHuevo();
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Si: Efectivo con Huevo');
            this.goTosiEfectivoConHuevo();
          }
        }
      ]
    });

    await alert.present();
  } //Despues de Elegir (SI) en el Segundo Nivel - Huevo

  async presentAlertAguacate() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ordenando la Baleada',
      message: 'Quiere Aguacate Adicional?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm No: Aguacate Adicional');
            this.presentAlertCarne();
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Si: Aguacate Adicional');
            this.presentAlertSalPimienta();
          }
        }
      ]
    });

    await alert.present();
  } //Despues de Elegir (SI) En el Pimer Nivel

  async presentAlertSalPimienta() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ordenando la Baleada',
      message: 'Sal y Pimienta?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm No: Sal y Pimienta');
            this.presentAlertEfectivoSinSal();
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Si: Sal Y Pimienta');
            this.presentAlertEfectivoConSal();
          }
        }
      ]
    });

    await alert.present();
  } //Despues de Elegir (SI) En el Segundo Nivel - Aguacate

  async presentAlertCarne() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ordenando la Baleada',
      message: 'Carne?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm No: Carne');
            
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Si: Carne');

          }
        }
      ]
    });

    await alert.present();
  } //Despues de Elegir (NO) En el Segundo Nivel - Aguacate //Sin Terminar

  async presentAlertEfectivoConSal() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ordenando la Baleada',
      message: 'Efectivo?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm No: Efectivo con Sal y Pimienta');
            this.goTonoEfectivoConSal();
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Si: Efectivo con Sal y Pimienta');
            this.goTosiEfectivoConSal();
          }
        }
      ]
    });

    await alert.present();
  } //Despues de Elegir (SI) En el Tercer Nivel - Sal y Pimienta

  async presentAlertEfectivoSinSal() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ordenando la Baleada',
      message: 'Efectivo?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm No: Efectivo sin Sal');
            this.goTonoEfectivoSinSal();
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Si: Efectivo sin Sal');
            this.goTosiEfectivoSinSal();
          }
        }
      ]
    });

    await alert.present();
  } //Despues de Elegir (NO) En el Tercer Nivel - Sal y Pimienta
}
