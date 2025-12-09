sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("artechcapacitacionfiori.controller.JobDetail", {
        onInit: function() {
            this.getOwnerComponent()
                .getRouter()
                .getRoute("RouteJobDetail")
                .attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            const id = oEvent.getParameter("arguments").id;

            this.byId("textProf2").setTitle(
                `Tecnologías:
                - SAP UI5
                - JavaScript
                - HTML/CSS
                - ABAP básico

                Experiencia:
                - Prácticas UI5
                - Proyectos académicos
                - Ejercicios en SAP Fiori`
                );
            },


        onNavBack () {
            this.getOwnerComponent().getRouter().navTo("RouteApp");
        }
    });
});