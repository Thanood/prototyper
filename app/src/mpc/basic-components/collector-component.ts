
import {bindable, autoinject, BindingEngine} from 'aurelia-framework';

@autoinject()
export class CollectorComponent {
  public scrollable = { virtual: true };

  private datasource = new kendo.data.DataSource({
    pageSize: 10
  });

  constructor(private bindingEngine: BindingEngine) {}

  bind() {
    this.bindingEngine.collectionObserver(this.packages)
    .subscribe(() => this.packagesChanged(this.packages));
  }

  public addPackage(module: string, version: string) {
    this.datasource.pushCreate({ fModule: module, fVersion: version });
    this.packages.push({ fModule: module, fVersion: version });

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

  public packagesChanged(newValue) {
    alert('Change')
    newValue.forEach(pkg => {
      // this.addPackage(pkg.fModule, pkg.fVersion);
      this.datasource.pushCreate({ fModule: pkg.fModule, fVersion: pkg.fVersion });

    });
  }
}
