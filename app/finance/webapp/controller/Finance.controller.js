sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library'
],

    function (Controller, fioriLibrary) {
        "use strict";

        return Controller.extend("finance.controller.Finance", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
            },

            onItemPress: function(oEvent) {
                // var oFCL = this.getView().getParent().getParent();
                // oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);

                var sPath = oEvent.getSource().getBindingContext().getPath(),  
                    sFinance = sPath.split("/").slice(-1).pop();

                this.oRouter.navTo("Detail", {layout: "TwoColumnsMidExpanded", accountId: sFinance});
            }
        });
    });
