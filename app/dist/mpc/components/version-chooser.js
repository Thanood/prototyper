"use strict";
class VersionChooser {
    constructor() {
        this.versions = [
            "3.2.1",
            "4.0.3",
            "4.1.0",
            "4.2.0",
            "4.3.0",
            "4.4.0",
            "4.5.0",
            "4.6.1",
            "4.6.3",
            "4.7.0",
            "4.7.1",
            "4.7.2",
            "4.7.3",
            "4.7.4",
            "4.7.5",
            "4.7.6",
            "4.7.7",
            "4.7.8",
            "4.7.9",
            "4.8.0",
            "4.7.1",
            "4.7.2",
            "4.7.3",
            "4.7.4",
            "4.7.5",
            "4.7.6",
            "4.7.7",
            "4.7.8",
            "4.7.9",
            "4.8.0",
            "4.8.1",
            "4.8.2",
            "4.8.3",
            "4.8.4",
        ];
        this.datasource = new kendo.data.DataSource({
            data: this.versions,
            pageSize: 40
        });
    }
    rowSelected(e) {
        let grid = e.sender;
        let selectedRow = grid.select();
        let dataItem = grid.dataItem(selectedRow);
        alert(dataItem);
    }
}
exports.VersionChooser = VersionChooser;

//# sourceMappingURL=version-chooser.js.map
