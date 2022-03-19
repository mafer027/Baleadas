import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiEfectivoConHuevoPage } from './si-efectivo-con-huevo.page';

describe('SiEfectivoConHuevoPage', () => {
  let component: SiEfectivoConHuevoPage;
  let fixture: ComponentFixture<SiEfectivoConHuevoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SiEfectivoConHuevoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiEfectivoConHuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
