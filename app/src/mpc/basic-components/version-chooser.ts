import {autoinject, bindable} from 'aurelia-framework';
import {PackageService} from '../data/package-service';

@autoinject()
export class VersionChooser {
  @bindable() public package;
  public scrollable = { virtual: true };
  private datasource: kendo.data.DataSource;
  private versions = [];

  constructor(private packageService: PackageService) {
    this.datasource = new kendo.data.DataSource({
      data: this.versions,
      schema: {
        model: {
          fields: {
          }
        }
      },
      pageSize: 10
    });

  }

  public rowSelected(e: kendo.ui.GridChangeEvent) {
    // e.preventDefault();
    // let grid = e.sender;
    // let selectedRow = grid.select();
    // let dataItem: string = grid.dataItem(selectedRow).ver;
    // alert(dataItem);
  }

  public packageChanged(newValue) {
    if (newValue) {
      this.packageService.getVersions(newValue)
      .then(versions => {
        this.versions = versions;
        this.datasource.data(this.versions);
      });
    }
  }
}
