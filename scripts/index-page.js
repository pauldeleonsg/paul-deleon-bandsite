/*** INDEX-PAGE.JS ***/

// COMMENTS FUNCTIONS

async function fxnGetConvo(txtkey){
    console.log("fxnGetConvo...");
    let strUrlConvo = baseUrl + "comments/?api_key=" + txtkey;
    console.log("Comments URL:" + strUrlConvo);

    try {
        const response = await axios.get(strUrlConvo);
        console.log(response);

        let apiStatus = response.status;        
        console.log("Status: " + apiStatus);

        fxnParseConvo(response.data);

    } catch (error) {
        console.error(error);
    }

}



function fxnParseConvo(data){
    console.log("fxnParseConvo...")

    let txtDataStr = JSON.stringify(data);
    let txtDataParse = JSON.parse(txtDataStr);

    txtDataParse.sort((a, b)=>{return b.timestamp - a.timestamp});

    txtDataParse.forEach(function (convo) {
        
        let txtDataArr = JSON.stringify(convo);
        let txtDataArrRec = JSON.parse(txtDataArr);

        fxnDisplayConvo(txtDataArrRec.id, txtDataArrRec.name, txtDataArrRec.timestamp, txtDataArrRec.comment, txtDataArrRec.likes);
        
    });
    
    console.log("fxnParseConvo... 🗸")
}



function fxnDisplayConvo(itmdId, itmName, itmTime, itmComment, itmLikes){
    console.log("fxnDisplayConvo...")

    //just logging to check ;b
    console.log("ID: " + itmdId);
    console.log("Time: " + fxnUtilDateShort(itmTime));   
    console.log("Name: " + itmName);
    console.log("Comment: " + itmComment);
    console.log("Likes: " + itmLikes);

    let divID = "divID" + itmdId;        //create ID for DOM elements
    
    let elem1 = document.createElement("div");
    elem1.setAttribute("id", divID+"a");
    elem1.setAttribute("class", "convo-div__row--one");

    let elem2 = document.createElement("div");
    elem2.setAttribute("id", divID+"b");
    elem2.setAttribute("class", "convo-div__img-avatar");

    itmFile = "./assets/images/icon-profile.png";
    let elem3 = document.createElement("img");
    elem3.setAttribute("id", divID+"c");
    elem3.setAttribute("class", "avatar");
    elem3.src = itmFile;

    let elem4 = document.createElement("ul");
    elem4.setAttribute("id", divID+"d");
    elem4.setAttribute("class", "convo-ul__comment");

    document.getElementById("divConvo").appendChild(elem1);
    document.getElementById(divID+"a").appendChild(elem2);
    document.getElementById(divID+"b").appendChild(elem3);
    document.getElementById(divID+"a").appendChild(elem4);
    
    
    var elem5 = document.createElement("li");
    var elem5b = document.createTextNode(itmName);
    var elem6 = document.createElement("li");
    var elem6b = document.createTextNode(fxnUtilDateShort(itmTime));
    var elem7 = document.createElement("li");
    var elem7b = document.createTextNode(itmComment);
    var elem8 = document.createElement("li");
    elem8.id = "li-" + itmdId;

    itmLikeAction = itmLikes + " Like(s) ";
    if (itmLikes === 0){
        itmLikeAction = "Like ";
    }
    var elem8b = document.createTextNode(itmLikeAction);
    var elem8c = document.createElement("img");
    elem8c.className = "likes";
    elem8c.src = "./assets/icons/icon-like.svg";
    elem8c.onclick = function(event) {
        fxnApiConvoLike(strApiKey, itmdId, itmLikes);
    }
    
    
    elem5.appendChild(elem5b);
    elem6.appendChild(elem6b);
    elem7.appendChild(elem7b);
    elem8.appendChild(elem8b);
    elem8.appendChild(elem8c);
    

    document.getElementById(divID+"d").appendChild(elem5);
    document.getElementById(divID+"d").appendChild(elem6);
    document.getElementById(divID+"d").appendChild(elem7);
    document.getElementById(divID+"d").appendChild(elem8);

    let elem9 = document.createElement("hr");
    document.getElementById("divConvo").appendChild(elem9);

    console.log("fxnDisplayConvo... 🗸")
}



async function fxnApiConvoLike(itmKey, itmID, itmCnt){
    let elemLike = document.getElementById("li-"+ itmID);
    elemLike.replaceChildren;
    elemLike.innerText = (itmCnt + 1) + " Like(s)";

    let strUrlPostLike = baseUrl + "comments/" + itmID + "/like?api_key=" + itmKey;
    console.log("strUrlPostLike: " + strUrlPostLike);

    try {
        const response = await axios.put(strUrlPostLike);
        console.log(response);

        let strStatus = response.status;
        console.log("strStatus " + strStatus);
        return

    } catch (error) {
        console.error(error);
    }
    
}


async function fxnGetForm(){
    console.log("fxnGetForm...")
    
    txtName = "";       
    txtComment = "";
    txtCommentTmp = "";
    txtDate = "";
    txtErr1 = ""
    txtErr2 = ""

    document.getElementById("frmName").setAttribute("style", "");
    document.getElementById("frmComment").setAttribute("style", "");

    txtName = document.getElementById("frmName").value;
    txtCommentTmp = document.getElementById("frmComment").value;
    txtComment = txtCommentTmp.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    txtDate = fxnUtilGetDate();

    fxnUtilCheckForm(txtName, txtComment);

    if (txtErr1 != "" || txtErr2 != "") {
        if(txtErr1 != ""){
            document.getElementById("frmName").setAttribute("style", "border: 1px solid red");
        }

        if(txtErr2 != ""){
            document.getElementById("frmComment").setAttribute("style", "border: 1px solid red");
        } 

        alert(txtErr1 + txtErr2);
        return
    }

    const divConvo = document.getElementById('divConvo');
    divConvo.replaceChildren();

    fxnPostConvo(strApiKey, txtName, txtComment);

    //find a way to avoid this
    setTimeout(() => {
        fxnGetConvo(strApiKey)
    }, 500);

    fxnClearConvoForm();

    console.log("fxnGetForm... 🗸");
}



async function fxnPostConvo(txtkey, txtName, txtComment) {
    console.log("fxnPostConvo...");

    let strUrlPostConvo = baseUrl + "comments/?api_key=" + txtkey;
    console.log("strUrlPostConvo: " + strUrlPostConvo);

    let postBody = { 
        "name": txtName,
        "comment": txtComment
    };


    try {
        const response = await axios.post(strUrlPostConvo, postBody);
        console.log(response);

        let strStatus = response.status;
        return strStatus;

    } catch (error) {
        console.error(error);
    }

    console.log("fxnPostConvo... 🗸");
}



async function letsGetItStarted() {
    console.log("let's get it started...");
    console.log("check if there's a cookie for the api");

    strApiKey = fxnCheckCookie(cookieName);

    fxnGetConvo(strApiKey);

    console.log("letsGetItStarted... 🗸");

}
  




