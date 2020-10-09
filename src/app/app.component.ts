import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'PersonalCare',
      url: '/folder/PersonalCare',
      icon: 'person'

    },
    {
      title: 'HealthObservation',
      url: '/folder/HealthObservation',
      icon: 'pulse'
    },
    {
      title: 'Fitness',
      url: '/folder/Fitness',
      icon: 'fitness'
    },
    {
      title: 'VitalParameters',
      url: '/folder/VitalParameters',
      icon: 'thermometer'
    },
    {
      title: 'PatientRecord',
      url: '/folder/PatientRecord',
      icon: 'file-tray'
    },
    {
      title: 'HealthChat',
      url: '/folder/HealthChat',
      icon: 'chatbubbles'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
