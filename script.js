
var pattern = / /;
var tip = "";
function CountryChange() {

    var imgFlag = document.getElementById("imgFlag");
    var countryName = document.getElementById("lstCountries").value;
    var txtMobile = document.getElementById("txtMobile");

    switch (countryName) {
        case "India":
            imgFlag.src = "indiaimg.png";
            pattern = /\+91\d{10}/;
            tip = "eg : +91 and 10 digits";
            txtMobile.Placeholder = tip
            break;

        case "US":
            imgFlag.src = "usimg.webp";
            pattern = /\+\(1\)\(\d{3}\)\s\d{3}-\d{4}/;
            tip = "eg: +(1)(000) 000-0000";
            txtMobile.Placeholder = tip
            break;

        case "Uk":
            imgFlag.src = "ukflag.jpg";
            pattern = /\+\(44\)\s\d{4}\s\d{4}/;
            tip = "eg: +(44) 0000 0000";
            txtMobile.Placeholder = tip
            break;

        case "China":
            imgFlag.src = "chinaflag.jpg";
            pattern = /\+\(86\)\s\d{3}\s\d{4}\s\d{4}/;
            tip = "eg: +(44) 0000 0000";
            txtMobile.Placeholder = tip
            break;

        default:
            alert("Please Select a Country");
            break;
    }
}

function VerifyClick() {
    var mobile = document.getElementById("txtMobile").value;

    var lblMobile = document.getElementById("lblMobile");

    if (mobile.match(pattern)) {

        document.write(`<h3>Your mobile ${mobile} verified..</h3>`);

    } else {

        lblMobile.innerHTML = `Invalid Mobile : ${tip}`;

    }
}