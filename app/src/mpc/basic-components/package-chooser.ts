export class PackageChooser {
  
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

  onSelect(e) {
    let autocomplete = e.sender;
    let dataItem = autocomplete.dataItem(e.item.index());
    alert(dataItem);
  }  
}