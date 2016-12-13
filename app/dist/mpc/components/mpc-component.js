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
        this.versions = [];
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
