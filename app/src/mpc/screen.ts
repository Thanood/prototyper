import {MpcComponent} from './basic-components/mpc-component';

export class Screen {
  public semverModifier = '^';

  private mpc: MpcComponent;

  public getSelectedPackages() {
    const packages = this.mpc.getPackages();
    alert(`packages selected: ${packages.length}, see console for details`);
    console.log('selected packages:');
    let modifier = this.semverModifier;
    if (modifier == '=') modifier = '';
    packages.forEach(pkg => console.log(`${pkg.fModule}@${modifier}${pkg.fVersion}`));
  }

  public addPredefinedPackages() {
    this.mpc.addPackages([
      { fModule: 'aurelia-kendoui-bridge', fVersion: '1.0.1'},
      { fModule: 'jquery', fVersion: '3.0.0'}
    ]);
  }
}
