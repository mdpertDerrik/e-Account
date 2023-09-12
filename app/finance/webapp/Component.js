sap.ui.define([
        "sap/ui/core/UIComponent",
        "finance/model/models",
        "sap/f/library",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, models, fioriLibrary, JSONModel) {
        "use strict";

        return UIComponent.extend("finance.Component", {
            metadata: {
                manifest: "json"
            },

            init: function () {

                UIComponent.prototype.init.apply(this, arguments);

                var oRouter = this.getRouter();

                //set layout model
                this.setModel(new JSONModel, "layout");

                oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
                oRouter.initialize();

                this.setModel(models.createDeviceModel(), "device");
            },

            _onBeforeRouteMatched: function(oEvent) {
                var oLayoutModel = this.getModel("layout"),
                    sLayout = oEvent.getParameters().arguments.layout;
    
                if(!sLayout) {
                    sLayout = "OneColumn";
                }
                oLayoutModel.setProperty("/layout", sLayout);
    
            }
        });
    }
);