sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("artechcapacitacionfiori.controller.HobbiesDetail", {
        onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteApp");
        }
    });
});