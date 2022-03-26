import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoEfectivoSinCarnePage } from './no-efectivo-sin-carne.page';

describe('NoEfectivoSinCarnePage', () => {
  let component: NoEfectivoSinCarnePage;
  let fixture: ComponentFixture<NoEfectivoSinCarnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEfectivoSinCarnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoEfectivoSinCarnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
