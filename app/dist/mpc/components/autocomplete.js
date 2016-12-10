"use strict";
class Autocomplete {
    constructor() {
        this.items = [
            'aurelia-kendoui-bridge',
            'aurelia-materializebridge',
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
exports.Autocomplete = Autocomplete;

//# sourceMappingURL=autocomplete.js.map
