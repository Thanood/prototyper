import {computedFrom} from 'aurelia-framework';
import {CollectorComponent} from './collector-component';
import {Package} from './package';

export class MpcComponent {
  public selectedPackage: string = null;
  public selectedVersion: string = null;
  public collector: CollectorComponent;

  @computedFrom('selectedPackage', 'selectedVersion')
  public get isAddPairButtonEnabled() {
    return this.selectedPackage !== null && this.selectedVersion !== null;
  }

  @computedFrom('collector.packages')
  public get isRemoveButtonEnabled() {
    return this.collector.packages.length > 0;
  }

  public onFiltering() {
    this.selectedPackage = null;
    this.selectedVersion = null;
  }

  public onPackageSelect(selection) {
    this.selectedPackage = selection.package;
  }

  public onVersionSelect(selection) {
    this.selectedVersion = selection.version;
  }

  public addPair() {
    this.collector.addPackage({ fModule: this.selectedPackage, fVersion: this.selectedVersion });
  }

  public addPackages(packages: Package[]) {
    packages.forEach(pkg => this.collector.addPackage(pkg));
  }

  public getPackages(): Package[] {
    return this.collector.getPackages();
  }

  public removeSelected() {
    this.collector.removeSelectedPackages();
  }
}
