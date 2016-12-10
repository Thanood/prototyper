"use strict";
require("bootstrap");
function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-kendoui-bridge');
    aurelia.start().then(() => aurelia.setRoot());
}
exports.configure = configure;

//# sourceMappingURL=main.js.map
