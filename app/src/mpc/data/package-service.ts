import {autoinject, Loader} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@autoinject()
export class PackageService {
  constructor(private loader: Loader, private http: HttpClient) { }

  public getPackages(query: string): Promise<string[]> {
    if (query) {
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
    } else {
      return Promise.resolve([]);
    }
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
