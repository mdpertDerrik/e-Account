sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/f/library",
        "sap/ui/model/odata/v4/ODataModel"
    ],
    function(BaseController, JSONModel, fioriLibrary) {
      "use strict";
  
      return BaseController.extend("finance.controller.Detail", {
      //---------------------------------------------------------------------------------------------------------------
      onInit: function () {

        var oModel = new JSONModel({
            fullScreen: true,
            exitFullScreen: false,
            close: true
        });
        // setModel : "buttons"
        this.getView().setModel(oModel, "buttons");

        // getOwnerComponent().getRouter()
        this.oRouter = this.getOwnerComponent().getRouter();

        // oOwnerComponent.getModel()
        // this.oModel = this.getOwnerComponent().getModel();

        // _onFinanceMatched
        this.oRouter.getRoute("Detail").attachPatternMatched(this._onFinanceMatched, this);
      },
      //---------------------------------------------------------------------------------------------------------------
      _onFinanceMatched: function (oEvent) {
          let oLayoutModel = this.getOwnerComponent().getModel("layout");
          let oLayout = oEvent.getParameter("arguments").layout;
          oLayoutModel.setProperty("/layout", oLayout);
          
          // this._finance= oEvent.getParameter("arguments").accountId || this._finance|| "0";
          // this.getView().bindElement({
          //   path: "/" + this._finance,
          //   model: "layout"
          // })

      },
      //---------------------------------------------------------------------------------------------------------------
      onFullScreen: function () {
        var oFCL = this.getView().getParent().getParent();
        oFCL.setLayout(fioriLibrary.LayoutType.MidColumnFullScreen);

        var oButtons = this.getView().getModel("buttons");
        oButtons.setProperty("/fullScreen", false);
        oButtons.setProperty("/exitFullScreen", true);
      },
      //---------------------------------------------------------------------------------------------------------------
      onExitFullScreen: function () {
          var oFCL = this.getView().getParent().getParent();
          oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);  

          var oButtons = this.getView().getModel("buttons");
          oButtons.setProperty("/fullScreen", true);
          oButtons.setProperty("/exitFullScreen", false);
      },
      //---------------------------------------------------------------------------------------------------------------
      onClose: function () {
          var oFCL = this.getView().getParent().getParent();
          oFCL.setLayout(fioriLibrary.LayoutType.OneColumn);

          var oButtons = this.getView().getModel("buttons");
          oButtons.setProperty("/fullScreen", true);
          oButtons.setProperty("/exitFullScreen", false);         
      },
      //---------------------------------------------------------------------------------------------------------------
      openDatePicker: function(oEvent) {
        this.getView().byId("DP").openBy(oEvent.getSource().getDomRef());
      },
      //---------------------------------------------------------------------------------------------------------------
      changeDateHandler: function(oEvent) {
        MessageToast.show("Date selected: " + oEvent.getParameter("value"));
      }
      //---------------------------------------------------------------------------------------------------------------
    });
  }
);
  