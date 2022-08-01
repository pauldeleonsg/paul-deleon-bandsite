/*** UTIL.JS ***/

function fxnUtilGetDate(){
    //  ✓  get current date m/d/yyyy
    var theTime = new Date();
    var theMonth = theTime.getMonth() + 1;
    var theDay = theTime.getDate();
    var theYear = theTime.getFullYear();
    return (theMonth + "/" + theDay + "/" + theYear);
}



function fxnUtilDateLong(itmdate){
    const arrMonths = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const txtDate = new Date(parseInt(itmdate, 10));
    let txtDateFormat = arrMonths[txtDate.getMonth()] + " " + txtDate.getDate() + ", " + txtDate.getFullYear()
    
    return txtDateFormat;
}



function fxnUtilDateShort(itmdate){
    const txtDate = new Date(parseInt(itmdate, 10));
    let txtDateFormat = (txtDate.getMonth() + 1) + "/" + txtDate.getDate() + "/" + txtDate.getFullYear()
    
    return txtDateFormat;
}



function fxnUtilDayDateShort(itmdate){
    const txtDate = new Date(parseInt(itmdate, 10));

    const arrMonths = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let itmmos = arrMonths[txtDate.getMonth()];

    const wkDayArr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat", "Sun"];
    let itmday = wkDayArr[txtDate.getDay()];

    let txtDateFormat = itmday + " " + itmmos + " " + txtDate.getDate() + ", " + txtDate.getFullYear()
    
    return txtDateFormat;
}



function fxnDisableForm(txtApiKey){
    document.getElementById("fxnDisableForm").disabled = true;

}



function fxnUtilCheckForm(name, comment){
    console.log("fxnUtilCheckForm...");

    if (name.length == 0){
        txtErr1 = "- Name cannot be blank.\n";
    } else if (name.length > 50){
        txtErr1 = "- Invalid name (maximum 50 characters).\n";
    }

    if (comment.length == 0){
        txtErr2 = "- Please enter a valid comment.\n";
    } else if (comment.length > 400){
        txtErr2 = "- Invalid name (maximum 200 characters).\n";
    }

    console.log("fxnUtilCheckForm... 🗸");
}



function fxnClearConvoForm(){
    document.getElementById("frmName").value = "";
    document.getElementById("frmComment").value = "";

}


function fxnDisplayWindowSize(){
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    
    document.write("Width: " + w + ", " + "Height: " + h);
}
//window.addEventListener("resize", displayWindowSize);


async function fxnApiRegister() {
    console.log("fxnApiRegister...");
    let strUrlReg = baseUrl + "register/";
    console.log("Register URL:" + strUrlReg);
    
    try {
        const response = await axios.get(strUrlReg);

        let apiStatus = response.status;        
        console.log("Status: " + apiStatus);

        let txtRegisterStr = JSON.stringify(response.data);
        let txtRegisterObj = JSON.parse(txtRegisterStr);
        strApiKey = txtRegisterObj.api_key;
        console.log("API Key: " + strApiKey + " 🗸");

        fxnSetCookie(cookieName, strApiKey, 1);
        fxnCheckCookie(cookieName);     //IMPORTANT: will cause loop if cookie is not set

    } catch (error) {
        console.error(error);
    }

}


