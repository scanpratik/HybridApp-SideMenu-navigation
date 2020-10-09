import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-health-plan',
    templateUrl: './health-plan.component.html',
    styleUrls: ['./health-plan.component.scss'],
})
export class HealthPlanComponent implements OnInit {

    subpart = '';

    constructor() {
    }

    public imgPath: 'assets/images/healthImage.png';

    ngOnInit() {
    }

    gotoHealthCoach() {

        this.subpart = 'preg';


    }
}


