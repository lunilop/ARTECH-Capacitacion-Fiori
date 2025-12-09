sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("artechcapacitacionfiori.controller.App", {
        goToHobbiesDetail: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteHobbiesDetail");
        },

        goToJobDetail: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteJobDetail",  {
                id: "id"   
            });
        },
    });
});