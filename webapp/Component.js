sap.ui.define([
    "sap/ui/core/UIComponent",
    "artechcapacitacionfiori/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("artechcapacitacionfiori.Component", {
        metadata: {
            manifest: "json",
            interfaces: ["sap.ui.core.IAsyncContentCreation"]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();

             document.addEventListener("keydown", (e) => {
                // uso correcto del router
                const hash = sap.ui.core.routing.HashChanger.getInstance().getHash();

                // si hash está vacío -> pantalla principal ""
                const cleanRoute = hash ? hash.split("/")[0] : "";

                // Orden de pantallas (rutas)
                const order = ["", "HobbiesDetail", "JobDetail"];

                let index = order.indexOf(cleanRoute);

                // ESC → volver a inicio
                if (e.key === "Escape") {
                    router.navTo("RouteApp");
                    return;
                }

                // Flecha izquierda
                if (e.key === "ArrowLeft") {
                    if (index > 0) {
                        const prev = order[index - 1];
                        if (prev === "") router.navTo("RouteApp");
                        else if (prev === "HobbiesDetail") router.navTo("RouteHobbiesDetail");
                        else router.navTo("RouteJobDetail", { id: "id" });
                    }
                }

                // Flecha derecha
                if (e.key === "ArrowRight") {
                    if (index < order.length - 1) {
                        const next = order[index + 1];
                        if (next === "") router.navTo("RouteApp");
                        else if (next === "HobbiesDetail") router.navTo("RouteHobbiesDetail");
                        else router.navTo("RouteJobDetail", { id: "id" });
                    }
                }
            });


        }
    });
});
