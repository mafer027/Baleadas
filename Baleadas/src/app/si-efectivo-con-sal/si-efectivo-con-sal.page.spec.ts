import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiEfectivoConSalPage } from './si-efectivo-con-sal.page';

describe('SiEfectivoConSalPage', () => {
  let component: SiEfectivoConSalPage;
  let fixture: ComponentFixture<SiEfectivoConSalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SiEfectivoConSalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiEfectivoConSalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
