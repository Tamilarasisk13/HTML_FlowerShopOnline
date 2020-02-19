function ValidateDetails() {
    flag = true;
    ValidateCardNumber();
    ValidateSecurityCode();
    ValidateExpiryDate();
    ValidateName();
    ValidateAddress1();
    ValidateAddress2();
    ValidateAddress3();
    ValidateCity();
    ValidateRegion();
    ValidatePostCode();
    ValidatePhoneNumber();
    ValidateFax();
    ValidateEmail();
    if (flag == true) {
        alert("Successfull");
        location.replace("Index.html");
    }


}
function ValidateCardNumber() {                 // Validate card number
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (document.getElementById("cardNumber").value.trim() == "") {
        document.getElementById("requiredcardNumber").style.display = "inline";
        flag = false;
    }
    else if (!document.getElementById("cardNumber").value.match(regex)) {
        document.getElementById("requiredcardNumber").style.display = "none";
        document.getElementById("ValidcardNumber").style.display = "inline";
        flag = false;
    }
    else {
        document.getElementById("ValidcardNumber").style.display = "none";
        document.getElementById("requiredcardNumber").style.display = "none";
    }
}

function ValidateSecurityCode() {          // Validate Security code
    var regex1 = /^[0-9]{3}$/;
    if (document.getElementById("securityCode").value.trim() == "") {
        document.getElementById("requiredsecurityCode").style.display = "inline";
        flag = false;
    }
    else if (!document.getElementById("securityCode").value.match(regex1)) {
        document.getElementById("requiredsecurityCode").style.display = "none";
        document.getElementById("ValidsecurityCode").style.display = "inline";
        flag = false;
    }
    else {
        document.getElementById("ValidsecurityCode").style.display = "none";
        document.getElementById("requiredsecurityCode").style.display = "none";
    }
}
function ValidateExpiryDate() {                   //Validate Expiry date
    var x = document.getElementById("month").selectedIndex;
    var y = document.getElementById("year").selectedIndex;
    if ((x == "") || (y == "")) {
        document.getElementById("requireddate").style.display = "inline";
        flag = false;
    }
    else {
        document.getElementById("requireddate").style.display = "none";
    }
}

function ValidateName() {              // Validate Name
    var x = document.getElementById("cardHolderName").value;
    var regex2 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (x.trim() == "") {
        document.getElementById("requiredcardHolderName").style.display = "inline";
        flag = false;
    }
    else if (!x.match(regex2)) {
        document.getElementById("ValidcardHolderName").style.display = "inline";
        document.getElementById("requiredcardHolderName").style.display = "none";
        flag = false;
    }
    else {
        document.getElementById("ValidcardHolderName").style.display = "none";
        document.getElementById("requiredcardHolderName").style.display = "none";
    }
}

function ValidateAddress1() {                    // Validate Address1
    var regex4 = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (document.getElementById("Address1").value.trim() == "") {
        document.getElementById("requiredAddress1").style.display = "inline";
        flag = false;
    }
    else if (!document.getElementById("Address1").value.match(regex4)) {
        document.getElementById("ValidAddress1").style.display = "inline";
        document.getElementById("requiredAddress1").style.display = "none";
        flag = false;
    }

    else {
        document.getElementById("ValidAddress1").style.display = "none";
        document.getElementById("requiredAddress1").style.display = "none";
    }

}

function ValidateAddress2() {                              // Validate Address2
    var regex4 = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (document.getElementById("Address2").value.trim() == "") {
        document.getElementById("ValidAddress2").style.display = "none";

    }
    else if (!document.getElementById("Address2").value.match(regex4)) {
        document.getElementById("ValidAddress2").style.display = "inline";
        flag = false;
    }

    else {

        document.getElementById("ValidAddress2").style.display = "none";
    }
}
function ValidateAddress3() {                           // Validate Address3
    var regex4 = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (document.getElementById("Address3").value.trim() == "") {
        document.getElementById("ValidAddress3").style.display = "none";

    }
  else if (!document.getElementById("Address3").value.match(regex4)) {
        document.getElementById("ValidAddress3").style.display = "inline";
        flag = false;
    }
    else {
        document.getElementById("ValidAddress3").style.display = "none";
    }
}
function ValidateCity() {                      // Validate city
    var regex8 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (document.getElementById("place").value.trim() == "") {
        document.getElementById("requiredplace").style.display = "inline";
        flag = false;
    }
    else if (!document.getElementById("place").value.match(regex8)) {
        document.getElementById("Validplace").style.display = "inline";
        document.getElementById("requiredplace").style.display = "none";
        flag = false;
    }
    else {
        document.getElementById("Validplace").style.display = "none";
        document.getElementById("requiredplace").style.display = "none";
    }
}

function ValidateRegion() {                        // Validate region
    var regex8 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (document.getElementById("region").value.trim() == "") {
        document.getElementById("Validregion").style.display = "none";

    }
    else if (!document.getElementById("region").value.match(regex8)) {
        document.getElementById("Validregion").style.display = "inline";
        flag = false;
    }
    else {

        document.getElementById("Validregion").style.display = "none";
    }
}


function ValidatePostCode() {                     // Validate post code
    var regex3 = /^(\d{4}|\d{6})$/;
    if (document.getElementById("code").value.trim() == "") {
        document.getElementById("requiredcode").style.display = "inline";
        flag = false;
    }
    else if (!document.getElementById("code").value.match(regex3)) {
        document.getElementById("Validcode").style.display = "inline";
        document.getElementById("requiredcode").style.display = "none";
        flag = false;

    }
    else {
        document.getElementById("Validcode").style.display = "none";
        document.getElementById("requiredcode").style.display = "none";
    }
}

function ValidatePhoneNumber() {                //Validate Phone number
    var regex5 = /^[7-9][0-9]{9}$/;
    if (document.getElementById("telephone").value.trim() == "") {
        document.getElementById("Validtelephone").style.display = "none";  
    }
    else if (!document.getElementById("telephone").value.match(regex5)) {
        document.getElementById("Validtelephone").style.display = "inline";
        flag = false;
    }
    else {
        document.getElementById("Validtelephone").style.display = "none";
    }
}

function ValidateFax() {                          // Validate Fax
 
    var regex7 = /[\+? *[1-9]+]?[0-9 ]+/;
    if (document.getElementById("Fax").value.trim() == "") {
        document.getElementById("ValidFax").style.display = "none";

    }
    else if (!document.getElementById("Fax").value.match(regex7)) {
        document.getElementById("ValidFax").style.display = "inline";
        flag = false;
    }
    else {
        document.getElementById("ValidFax").style.display = "none";
    }
}
function ValidateEmail() {                           // Validate Email
    
    var regex6 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (document.getElementById("email").value.trim() == "") {
        document.getElementById("requiredemail").style.display = "inline";

    }
    else if (!document.getElementById("email").value.match(regex6)) {
        document.getElementById("Validemail").style.display = "inline";
        document.getElementById("requiredemail").style.display = "none";
        flag = false;
    }
    else {
        document.getElementById("requiredemail").style.display = "none";
        document.getElementById("Validemail").style.display = "none";
    }
}

function Cancel()
{
    alert("Page cancelled");
location.replace("Index.html");
}

function Reload()
{
    alert("Page Reloaded");
location.replace("Index.html");
}

