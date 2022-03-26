import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoEfectivoConCarnePage } from './no-efectivo-con-carne.page';

describe('NoEfectivoConCarnePage', () => {
  let component: NoEfectivoConCarnePage;
  let fixture: ComponentFixture<NoEfectivoConCarnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEfectivoConCarnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoEfectivoConCarnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
