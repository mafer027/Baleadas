import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoEfectivoConSalPage } from './no-efectivo-con-sal.page';

describe('NoEfectivoConSalPage', () => {
  let component: NoEfectivoConSalPage;
  let fixture: ComponentFixture<NoEfectivoConSalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEfectivoConSalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoEfectivoConSalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
