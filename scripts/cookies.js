/*** COOKIES.JS ***/


function fxnCheckCookie(ckname) {
    console.log("fxnCheckCookie..." + ckname);

    strApiKey = fxnGetCookie(ckname);

    if (strApiKey != null) {
        console.log("API Key: " + strApiKey + " 🗸");

        return strApiKey;

    } else {
        console.error("Cookie 'bandsite' not found X");
        console.log("call url to register api key...");

        fxnApiRegister();
    }
    
}



function fxnGetCookie(ckname){
    console.log("fxnGetCookie..." + ckname);

    var cookieArr = document.cookie.split(";");
    
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        // Removing whitespace and compare it with the given string
        if(ckname == cookiePair[0].trim()) {
            // Decode the cookie value and return
            console.log("fxnGetCookie... 🗸");
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    console.error("fxnGetCookie... X");
    return null;        // Return null if not found
}



function fxnSetCookie(cname, cvalue, exdays) {
    console.log("fxnSetCookie...");

    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    
    let expires = "expires=" + d.toString();
    
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

    console.log("setCookie... 🗸");

}



function fxnDeleteCookie(){
    console.log("fxnDeleteCookie...");
    document.cookie = "bandsite=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log("cookie deleted 🗸");

}