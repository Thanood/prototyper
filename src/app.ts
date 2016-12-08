import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Monterey prototyper';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome/screen',       nav: true, title: 'Welcome' },
      { route: ['mpc'],         name: 'mpc',      	  moduleId: 'mpc/screen',           nav: true, title: 'MPC' },
      { route: ['atc'],         name: 'atc',      	  moduleId: 'atc/screen',           nav: true, title: 'ATC' },


    ]);

    this.router = router;
  }
}
