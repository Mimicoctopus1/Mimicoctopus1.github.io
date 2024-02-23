var account = {
  "requestAccess": function(granted, denied) {
    let requestAccessPopup = window.open("", "UNIMONO_Account_Verification", "");
    requestAccessPopup.document.body.innerHTML = "<!DOCTYPE html><html><h1>The webpage at " + window.document.location.href/*Give the popup this webpage's URL*/ + " would like access to your account. Notice that, if you continue, full access to your account may be granted. This involves privileges to know up to any amount of data from your account.</h1></html>"
  }
};
export default account;
