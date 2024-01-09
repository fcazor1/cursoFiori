sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("neoris.cursos.fiori.test.project1.controller.View1", {
            onInit: function () {

            },

            onPress: function (oEvent) {
                alert(oEvent);
            }
        });
    });
