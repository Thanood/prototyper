import {bindable, autoinject, BindingEngine} from 'aurelia-framework';

@autoinject()
export class CollectorComponent {
  @bindable() public packages = [];
  public scrollable = { virtual: true };

  private datasource = new kendo.data.DataSource();

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
    d.forEach(item => {
      if ((item as any).fSelected) {
        this.datasource.remove((item as any));
      }
    });
    this.packages = (this.datasource.data() as any);
  }

  public packagesChanged(newValue) {
    alert('Change')
    newValue.forEach(pkg => {
      // this.addPackage(pkg.fModule, pkg.fVersion);
      this.datasource.pushCreate({ fModule: pkg.fModule, fVersion: pkg.fVersion });
    });
  }
}
