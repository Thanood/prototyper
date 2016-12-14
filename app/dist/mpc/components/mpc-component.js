"use strict";
class MpcComponent {
    constructor() {
        this.items = [
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
        ];
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
        this.dataSource = new kendo.data.DataSource({
            data: this.versions,
            pageSize: 20
        });
    }
    bind() {
        const nodeRequire = (window.System)._nodeRequire;
        if (nodeRequire) {
            const fs = nodeRequire('fs');
            console.log(JSON.parse(fs.readFileSync('dist/mpc/data/bootstrap3.json', 'utf8')));
        }
        else {
            console.log('Detected browser environment');
        }
    }
    attached() {
        kendo.jQuery(this.pager).kendoPager({
            dataSource: this.dataSource
        });
    }
}
exports.MpcComponent = MpcComponent;

//# sourceMappingURL=mpc-component.js.map
