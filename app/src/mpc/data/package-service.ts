import {autoinject, Loader} from 'aurelia-framework';

@autoinject()
export class PackageService {
  constructor(private loader: Loader) { }

  public getPackages() {
    return new Promise(resolve => {
      resolve([
        'aurelia-kendoui-bridge',
        'aurelia-materialize-bridge',
        'bootstrap3',
        'd3',
        'dragula',
        'drop',
        'font-awesome',
        'jquery-ui',
        'jquery',
        'lodash',
        'mdl',
        'tether'
      ]);
    });
  }

  public getVersions(pkg: string) {
    return this.loader.loadText(`mpc/data/${pkg}.json`)
      .then(response => {
        const p = JSON.parse(response);
        const versions = p.versions.reverse().map(v => {
          return {ver: v};
        });
        return versions;
      });
  }
}
