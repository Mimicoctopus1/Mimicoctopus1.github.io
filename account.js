var account = {
  "requestAccess": function(granted, denied) {
    let requestAccessPopup = window.open("", "UNIMONO_Account_Verification", "");
    requestAccessPopup.document.body.innerHTML = "<!DOCTYPE html><html><h1>The webpage at " + window.opener.document.location.href + "</h1></html>"/*window.opener represents the window object of the tab that opened the popup.*/
  }
};
export default account;
