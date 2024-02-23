var account = {
  "requestAccess": function(granted, denied) {
    let requestAccessPopup = window.open("", "UNIMONO_Account_Verification", "");
    requestAccessPopup.document.body.innerHTML = "<!DOCTYPE html><html><h1>The webpage at " + window.document.location.href/*Give the popup this webpage's URL*/ + "</h1></html>"
  }
};
export default account;
