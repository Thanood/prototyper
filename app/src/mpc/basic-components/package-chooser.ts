import {autoinject, bindable, Loader} from 'aurelia-framework';
import {PackageService} from '../data/package-service';

@autoinject()
export class PackageChooser {
  public items = [];
  // public items = [
  //   'aurelia-kendoui-bridge',
  //   'aurelia-materialize-bridge',
  //   'bootstrap3',
  //   'd3',
  //   'dragula',
  //   'drop',
  //   'font-awesome',
  //   'jquery-ui',
  //   'jquery',
  //   'lodash',
  //   'mdl',
  //   'tether'
  // ];
  public autocomplete;

  constructor(private packageService: PackageService) { }

  public attached() {
    // todo: read from filesystem abstraction
    // setTimeout(() => {
      // this.items = [
      //   'aurelia-kendoui-bridge',
      //   'aurelia-materialize-bridge',
      //   'bootstrap3',
      //   'd3',
      //   'dragula',
      //   'drop',
      //   'font-awesome',
      //   'jquery-ui',
      //   'jquery',
      //   'lodash',
      //   'mdl',
      //   'tether'
      // ];
      // this.autocomplete.setDataSource(this.items);
    // }, 1000);

    // so why does this work and not the above? :-)
    this.packageService.getPackages()
    .then(packages => {
      this.items = (packages as any);
      this.autocomplete.setDataSource(this.items);
    });
  }

  public onSelect(e) {
    // let autocomplete = e.sender;
    // let dataItem = autocomplete.dataItem(e.item.index());
    // alert(dataItem);
  }
}
