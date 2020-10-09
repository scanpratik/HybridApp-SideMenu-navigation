import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DieticianComponent } from './dietician.component';

describe('DieticianComponent', () => {
  let component: DieticianComponent;
  let fixture: ComponentFixture<DieticianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieticianComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DieticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
