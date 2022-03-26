import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiEfectivoSinSalPage } from './si-efectivo-sin-sal.page';

describe('SiEfectivoSinSalPage', () => {
  let component: SiEfectivoSinSalPage;
  let fixture: ComponentFixture<SiEfectivoSinSalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SiEfectivoSinSalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiEfectivoSinSalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
