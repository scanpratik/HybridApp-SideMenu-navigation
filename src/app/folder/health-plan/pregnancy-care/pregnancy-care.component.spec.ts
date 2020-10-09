import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PregnancyCareComponent } from './pregnancy-care.component';

describe('PregnancyCareComponent', () => {
  let component: PregnancyCareComponent;
  let fixture: ComponentFixture<PregnancyCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregnancyCareComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PregnancyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
