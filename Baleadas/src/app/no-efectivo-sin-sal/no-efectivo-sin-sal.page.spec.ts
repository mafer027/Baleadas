import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoEfectivoSinSalPage } from './no-efectivo-sin-sal.page';

describe('NoEfectivoSinSalPage', () => {
  let component: NoEfectivoSinSalPage;
  let fixture: ComponentFixture<NoEfectivoSinSalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEfectivoSinSalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoEfectivoSinSalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
