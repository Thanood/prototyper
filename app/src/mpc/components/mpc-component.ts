//import "kendo.ui.datasource";

export class MpcComponent {
  public items = [
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
  ]

  public bind() {
    const nodeRequire = ((<any>window).System)._nodeRequire;
    if (nodeRequire) {
      const fs = nodeRequire('fs');
      console.log(JSON.parse(fs.readFileSync('dist/mpc/data/bootstrap3.json', 'utf8')));
    } else {
      console.log('Detected browser environment');
    }
  }

  public versions = [

  ]

  dataSource = new kendo.data.DataSource({
    data: this.versions,
    pageSize: 10
  });

}