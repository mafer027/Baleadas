import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoEfectivoConHuevoPage } from './no-efectivo-con-huevo.page';

describe('NoEfectivoConHuevoPage', () => {
  let component: NoEfectivoConHuevoPage;
  let fixture: ComponentFixture<NoEfectivoConHuevoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEfectivoConHuevoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoEfectivoConHuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
