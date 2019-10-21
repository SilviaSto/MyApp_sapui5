sap.ui.define(					// define module(AMD)
	[
		"sap/ui/core/mvc/Controller",   //dependancies
		"sap/m/MessageToast"
	], 
	function (Controller, MessageToast) {        // we put the names of the used dependancies as a callback functions
		Controller.extend("opensap.myapp.controller.App", {  //custom object
			onShowHello: function() {						
							// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();  //we get the msg bundle
			var sRecipient = this.getView().getModel("textPanel").getProperty("/recipient/name");  // we want to display the recipient
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
			}
		});
	}
	);