// import {computedFrom} from 'aurelia-framework';
import {Package} from './package';

export class CollectorComponent {
  public scrollable = { virtual: true };

  private datasource = new kendo.data.DataSource({
    pageSize: 10
  });

  // tslint:disable-next-line:variable-name
  private _packages: Package[] = [];
  public get packages() {
    return this._packages;
  }

  public addPackage(pkg: Package) {
    if (!this.isDuplicate(pkg)) {
      this.datasource.add(pkg);
      this.setPackagesFromDataSource();
    }
  }

  public getPackages(): Package[] {
    return this._packages;
  }

  // somehow, computedFrom throws errors if used like this
  // @computedFrom('packages')
  public hasPackages(): boolean {
    return this._packages.length > 0;
  }

  public removeSelectedPackages() {
    const d = this.datasource.data();
    let uids = [];
    d.forEach(item => {
      if ((item as any).fSelected) {
        uids.push((item as kendo.data.Model).uid);
      }
    });
    uids.forEach(uid => {
      let item = this.datasource.getByUid(uid);
      if (item) {
        this.datasource.remove(item);
      }
    });
    this.setPackagesFromDataSource();
  }

  private isDuplicate(pkg: Package): boolean {
    const data = this.datasource.data();
    const item = data.find(i => (i as any).fModule === pkg.fModule);
    return !!item;
  }

  private setPackagesFromDataSource() {
    const data = this.datasource.data();
    this._packages = data.map(d => {
      const dataset = d as any;
      return { fModule: dataset.fModule, fVersion: dataset.fVersion, fSelected: (dataset.fSelected ? true : false) };
    });
  }
}
