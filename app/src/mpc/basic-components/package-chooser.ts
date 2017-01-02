import {autoinject} from 'aurelia-framework';
import {PackageService} from '../data/package-service';

@autoinject()
export class PackageChooser {
  public items = [];
  public autocomplete: kendo.ui.AutoComplete;

  // tslint:disable-next-line:no-unused-variable
  private datasource = new kendo.data.DataSource({
    serverFiltering: true,
    transport: {
      read: (options) => {
        this.packageService.getPackages(this.autocomplete.value())
        .then(packages => {
          this.items = packages;
          options.success(this.items);
        });
      }
    }
  });

  constructor(private element: Element, private packageService: PackageService) { }

  public clear() {
    this.autocomplete.value('');
  }

  public onSelect(e) {
    // let grid = e.sender;
    // let selectedRow = grid.select();
    // let dataItem: string = (grid.dataItem(selectedRow) as any).ver;
    const event = new CustomEvent('package-selected', { bubbles: true, detail: { package: e.dataItem } });
    this.element.dispatchEvent(event);
  }

  public onFiltering() {
    // keep this to fire/propagate kendo event
    const event = new CustomEvent('package-filtering', { bubbles: true, detail: { value: this.autocomplete.value() } });
    this.element.dispatchEvent(event);
  }
}
