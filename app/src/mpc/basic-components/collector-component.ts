import {bindable} from 'aurelia-framework';

export class CollectorComponent {
  public scrollable = { virtual: true };

  private testData = [];

  // tslint:disable-next-line:no-unused-variable
  private datasource = new kendo.data.DataSource({
    transport: {
      read: (options) => {

        // here you can do an async API call to get your data
        // or use a local array with data
        // when you have all the data that you need you can call options.success()

        // the options variable contains information about pagination, filtering etc so
        // that can be used when doing an query

        options.success(this.testData);
      }
    }
  });

  constructor() {
    this.testData = [
      { fModule: 'aurelia-kendoui-bridge', fVersion: '1.0.1' },
      { fModule: 'aurelia-materialize-bridge', fVersion: '0.1.2' }
    ];
  };

  public addPackage(module: string, version: string) {
    // this.testData.push({ module: name, fVersion: version });
    // this.datasource.data(this.testData);
    this.datasource.pushCreate({ fModule: module, fVersion: version });
  }

  public removeSelectedPackages() {
    const d = this.datasource.data();
    d.forEach(item => {
      if (item.fSelected) {
        this.datasource.remove(item);
      }
    });
  }
}
