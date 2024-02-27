var account = {
  "init": function() {
    while(document.querySelectorAll(".unimono-account-iframe").length > 1) { /*While there are more than one iframe...*/
      document.querySelectorAll(".unimono-account-iframe")[document.querySelectorAll(".unimono-account-iframe").length - 1].remove();/*Remove the last iframe.*/
    }
    if(document.querySelectorAll(".unimono-account-iframe").length <= 0) /*If there isn't already an iframe...*/{
      document.body.append("<div class = 'unimono-account-iframe'><iframe></iframe><noframes onclick = 'this.remove'>Uh oh! The feature allowing access to UNIMONO accounts is not working. Certain parts of this site might not be usable. Click this box to continue without UNIMONO account linking.</noframes></div>");
  },
  "accounts": [],
  "requestAccess": function(granted, denied) {
    let requestAccessPopup = window.open("", "UNIMONO_Account_Verification", "");
    let allowedCode = Math.random(); /*Get a random code >= 0 and < 1*/
    window.addEventListener("message", function(event) {
      if(event.data == allowedCode) {
        this.accounts = ["SOME DATA HERE"].concat(this.accounts); /*Add the user to the beginning of the array.*/
      }
    });
    requestAccessPopup.document.body.innerHTML = "<!DOCTYPE html><html><h1>The webpage at " + window.document.location.href/*Give the popup this webpage's URL*/ + " would like access to your account. Notice that, if you continue, full access to your account may be granted. This involves privileges to know and change up to any amount of data from your account. Do not authorize any permission to any application you do not fully trust (unless you honestly don't care).</h1><input type = \"button\" value = \"Allow Full Access\" onclick = \"window.opener.postMessage(" + allowedCode + ")\"></html>"
  }
};
export default account;
