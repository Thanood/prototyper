import {computedFrom} from 'aurelia-framework';

export class MpcComponent {
  public selectedPackage: string = null;
  public selectedVersion: string = null;

  @computedFrom('selectedPackage', 'selectedVersion')
  public get isAddPairButtonEnabled() {
    return this.selectedPackage !== null && this.selectedVersion !== null;
  }

  public onPackageSelect(selection) {
    this.selectedPackage = selection.dataItem;
  }

  public onVersionSelect(e) {
    let grid = e.sender;
    let selectedRow = grid.select();
    let dataItem: string = grid.dataItem(selectedRow).ver;
    this.selectedVersion = dataItem;
  }

  public addThisPair() {
    alert(`add: ${this.selectedPackage}@${this.selectedVersion}`);
  }
}
