import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FolderPageRoutingModule} from './folder-routing.module';

import {FolderPage} from './folder.page';
import {HealthPlanComponent} from './health-plan/health-plan.component';
import {ClinicalNotesComponent} from './clinical-notes/clinical-notes.component';
import {AssesmentComponent} from './assesment/assesment.component';
import {DieticianComponent} from './dietician/dietician.component';
import {PregnancyCareComponent} from './health-plan/pregnancy-care/pregnancy-care.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FolderPageRoutingModule
    ],
    declarations: [FolderPage, HealthPlanComponent, AssesmentComponent , ClinicalNotesComponent, DieticianComponent, PregnancyCareComponent]
})
export class FolderPageModule {
}
