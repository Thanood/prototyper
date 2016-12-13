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
            "4.7.0"
        ];
        this.dataSource = new kendo.data.DataSource({
            data: this.versions,
            pageSize: 10
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
}
exports.MpcComponent = MpcComponent;

//# sourceMappingURL=mpc-component.js.map
