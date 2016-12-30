import {autoinject, Loader} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@autoinject()
export class PackageService {
  constructor(private loader: Loader, private http: HttpClient) { }

  public getPackages(query: string) {
    // return new Promise(resolve => {
    //   resolve([
    //     'aurelia-kendoui-bridge',
    //     'aurelia-materialize-bridge',
    //     'bootstrap3',
    //     'd3',
    //     'dragula',
    //     'drop',
    //     'font-awesome',
    //     'jquery-ui',
    //     'jquery',
    //     'lodash',
    //     'mdl',
    //     'tether'
    //   ]);
    // });
    return this.http.fetch(`https://api.npms.io/v2/search?q=${query}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then(packages => {
      return (packages as any).results.map(pkg => pkg.package.name);
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
