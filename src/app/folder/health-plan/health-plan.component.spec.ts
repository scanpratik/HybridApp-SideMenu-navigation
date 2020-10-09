import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HealthPlanComponent } from './health-plan.component';

describe('HealthPlanComponent', () => {
  let component: HealthPlanComponent;
  let fixture: ComponentFixture<HealthPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthPlanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
