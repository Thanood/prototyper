export class Screen {
  public packages = [];
  public semverModifier = '^';

  public getSelectedPackages() {
    alert(`packages selected: ${this.packages.length}, see console for details`);
    console.log('selected packages:');
    let modifier = this.semverModifier;
    if (modifier == '=') modifier = '';
    this.packages.forEach(pkg => console.log(`${pkg.fModule}@${modifier}${pkg.fVersion}`));
  }

  public addPredefinedPackages() {
    // this.packages.push({ fModule: 'aurelia-kendoui-bridge', fVersion: '1.0.1'});
    // this.packages.push({ fModule: 'jquery', fVersion: '3.0.0'});
    this.packages = this.packages.concat([
      { fModule: 'aurelia-kendoui-bridge', fVersion: '1.0.1'},
      { fModule: 'jquery', fVersion: '3.0.0'}
    ]);
  }
}
