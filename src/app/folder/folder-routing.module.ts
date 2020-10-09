import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FolderPage} from './folder.page';
import {DieticianComponent} from './dietician/dietician.component';

const routes: Routes = [
    {
        path: '',
        component: FolderPage
    },
    {
        path: 'dietcian',
        component: DieticianComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FolderPageRoutingModule {
}
