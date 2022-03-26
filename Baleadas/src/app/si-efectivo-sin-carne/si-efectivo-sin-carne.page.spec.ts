import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiEfectivoSinCarnePage } from './si-efectivo-sin-carne.page';

describe('SiEfectivoSinCarnePage', () => {
  let component: SiEfectivoSinCarnePage;
  let fixture: ComponentFixture<SiEfectivoSinCarnePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SiEfectivoSinCarnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiEfectivoSinCarnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
