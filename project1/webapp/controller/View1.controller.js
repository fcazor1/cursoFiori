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
                this.loadFragment({
                    name: "neoris.cursos.fiori.test.project1.view.ComboBox"
                });
                var sPath = "/MatWebComboSet";
                var oModelOdata = this.getOwnerComponent().getModel();
                var ofilter = new satisfies.ui.model.Filter("TipoDato", sap.ui.model.FilterOperator.EQ, 'PAIS');
                oModelOdata.read(sPath, {
                    filters: [ofilter],
                    success: function (oData, response){
                        var oModelPaises = new sap.ui.model.json.JSONModel();
                        if (oData.results.length>0) {
                            oModelPaises.setData(oData.results);
                        }else{
                            data = {};
                            oModelPaises.setData(data);
                        }
                        this.getView().setModel(oModelPaises, "Paises");
                    },
                    error: function (oError){
                        sap.m.MessageToast.show(oError.message);
                    }
                });
            },

            onPress: function (oEvent) {
                alert(oEvent.oSource.getSelectedKey());
            }
        });
    });
