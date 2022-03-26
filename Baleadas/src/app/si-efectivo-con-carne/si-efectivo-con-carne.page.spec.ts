import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiEfectivoConCarnePage } from './si-efectivo-con-carne.page';

describe('SiEfectivoConCarnePage', () => {
  let component: SiEfectivoConCarnePage;
  let fixture: ComponentFixture<SiEfectivoConCarnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SiEfectivoConCarnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiEfectivoConCarnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
