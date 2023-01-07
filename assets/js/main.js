
/*   V1   */

function toggleMenu() {
    var menuHolder = document.getElementById('sideMenuItemsHolder').style;
    var spanLogoText = document.getElementById('display-logo-middle').style;
    console.log(menuHolder.display)

    if (menuHolder.display === "none") {
        menuHolder.display = "block";
        spanLogoText.display = "none"

    } else {
        menuHolder.display = "none";
        spanLogoText.display = "block"
    }
}



function sendMail() {
      
    var email = 'pb.thelearn.tech@gmail.com';
      
    var subject = document.getElementById('mailersName').value;
      
    var emailBody = document.getElementById('mailersMessage').value;

    if (subject != "") {

        if  (emailBody != "") {
            
           document.location = "mailto:"+email+"?subject=Email from "+subject+"&body="+emailBody;
        }
    
        
    } else {
        
    }
}

function sendMailMobile() {
      
    var email = 'pb.thelearn.tech@gmail.com';
      
    var subject = document.getElementById('mailersNameMobile').value;
      
    var emailBody = document.getElementById('mailersMessageMobile').value;

   if (subject != "") {

        if  (emailBody != "") {
            
            document.location = "mailto:"+email+"?subject=Email from "+subject+"&body="+emailBody;
        } else {
            alert("Please fill Message before sending")
        }
    
        
    } else {
        alert("Please fill Name before sending")
    }
}


function scrollToView(id) {
    
    document.getElementById(id).scrollIntoView({behavior: 'smooth'}, true);
}

