import {autoinject, bindable} from 'aurelia-framework';
import {PackageService} from '../data/package-service';

@autoinject()
export class VersionChooser {
  @bindable() public package;
  public grid: kendo.ui.Grid;
  public scrollable = { virtual: true };
  private datasource: kendo.data.DataSource;
  private versions = [];

  constructor(private element: Element, private packageService: PackageService) {
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
    let grid = e.sender;
    let selectedRow = grid.select();
    let dataItem: string = (grid.dataItem(selectedRow) as any).ver;
    const event = new CustomEvent('version-selected', { bubbles: true, detail: { version: dataItem } });
    this.element.dispatchEvent(event);
  }

  public packageChanged(newValue) {
    if (newValue) {
      this.packageService.getVersions(newValue)
      .then(versions => {
        this.versions = versions;
        this.datasource.data(this.versions);
      });
    } else {
      this.versions = [];
      this.datasource.data(this.versions);
    }
  }

  public selectMostRecentVersion() {
    if (this.grid) {
      this.grid.select('tr:eq(0)');
    }
  }
}
