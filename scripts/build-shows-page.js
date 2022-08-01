/*** BUILD-SHOWS-PAGE.JS ***/


// SHOWS FUNCTIONS

async function fxnGetShows(txtkey){
    console.log("fxnGetShows...");
    let strUrlShows = baseUrl + "showdates/?api_key=" + txtkey;
    console.log("Shows URL:" + strUrlShows);

    try {
        const response = await axios.get(strUrlShows);
        console.log(response);

        let apiStatus = response.status;        
        console.log("Status: " + apiStatus);

        fxnParseShows(response.data);

    } catch (error) {
        console.error(error);
    }

}



function fxnParseShows(data){
    console.log("fxnParseShows...")

    let txtDataStr = JSON.stringify(data);
    let txtDataParse = JSON.parse(txtDataStr);
    
    txtDataParse.forEach(function (convo) {
        
        let txtDataArr = JSON.stringify(convo);
        let txtDataArrRec = JSON.parse(txtDataArr);

        fxnDisplayShows(txtDataArrRec.id, txtDataArrRec.date, txtDataArrRec.place, txtDataArrRec.location);
        
    });
    
    theHeaderMaybe();       //idk... to make the header maybe >:D

    console.log("fxnParseShows... 🗸")
}



function fxnDisplayShows(itmdId, itmDate, itmPlace, itmLocation){
    console.log("fxnDisplayConvo...")

    //just logging to check ;b
    console.log("ID: " + itmdId);
    console.log("Date: " + fxnUtilDayDateShort(itmDate));        //convert the string date to integer
    console.log("Place: " + itmPlace);
    console.log("Location: " + itmLocation);
    

    let divID = "divID" + itmdId;        //create ID for DOM elements
    var btnStr, btnClass, btnFxn; 
    
    let elem1 = document.createElement("div");
    elem1.setAttribute("id", divID+"a");
    elem1.setAttribute("class", "ticket");

    let elem2 = document.createElement("span");
    elem2.setAttribute("class", "ticket__label font-label");
    var elem2b = document.createTextNode("Date");
    elem2.appendChild(elem2b);

    let elem3 = document.createElement("span");
    elem3.setAttribute("class", "ticket__index ticket__desc");
    var elem3b = document.createTextNode(fxnUtilDayDateShort(itmDate));
    elem3.appendChild(elem3b);

    let elem4 = document.createElement("span");
    elem4.setAttribute("class", "ticket__label font-label");
    var elem4b = document.createTextNode("Venue");
    elem4.appendChild(elem4b);

    let elem5 = document.createElement("span");
    elem5.setAttribute("class", "ticket__desc");
    var elem5b = document.createTextNode(itmPlace);
    elem5.appendChild(elem5b);

    let elem6 = document.createElement("span");
    elem6.setAttribute("class", "ticket__label font-label");
    var elem6b = document.createTextNode("Location");
    elem6.appendChild(elem6b);

    let elem7 = document.createElement("span");
    elem7.setAttribute("class", "ticket__desc");
    var elem7b = document.createTextNode(itmLocation);
    elem7.appendChild(elem7b);

    btnStr = "Buy Tickets";
    btnFxn = `getTicket("${fxnUtilDayDateShort(itmDate)}")`;

    let elem8 = document.createElement("button");
    var elem8b = document.createTextNode(btnStr);
    elem8.setAttribute("id", "tix" + itmdId);
    elem8.setAttribute("class", btnClass);
    elem8.setAttribute("onclick", btnFxn);
    elem8.appendChild(elem8b);
    
    let elem9 = document.createElement("hr");

    document.getElementById("divShows").appendChild(elem1);
    document.getElementById(divID+"a").appendChild(elem2);
    document.getElementById(divID+"a").appendChild(elem3);
    document.getElementById(divID+"a").appendChild(elem4);
    document.getElementById(divID+"a").appendChild(elem5);
    document.getElementById(divID+"a").appendChild(elem6);
    document.getElementById(divID+"a").appendChild(elem7);
    document.getElementById(divID+"a").appendChild(elem8);
    document.getElementById(divID+"a").appendChild(elem9);


    console.log("fxnDisplayShows... 🗸")
}



function theHeaderMaybe(){
    
    let divID = "divIDLast";        //create ID for DOM elements
    //var btnStr, btnClass, btnFxn; 

    let elem1 = document.createElement("div");
    elem1.setAttribute("id", divID);
    elem1.setAttribute("class", "ticket");

    let elem2 = document.createElement("span");
    elem2.setAttribute("class", "ticket__labelhr font-label");
    var elem2b = document.createTextNode("Date");
    elem2.appendChild(elem2b);

    let elem3 = document.createElement("span");
    elem3.setAttribute("class", "ticket__labelhr font-label");
    var elem3b = document.createTextNode("Venue");
    elem3.appendChild(elem3b);

    let elem4 = document.createElement("span");
    elem4.setAttribute("class", "ticket__labelhr font-label");
    var elem4b = document.createTextNode("Location");
    elem4.appendChild(elem4b);

    document.getElementById("divShows").appendChild(elem1);
    document.getElementById(divID).appendChild(elem2);
    document.getElementById(divID).appendChild(elem3);
    document.getElementById(divID).appendChild(elem4);

}



function getTicket(event){
    var msgShow;

    msgShow = "BUY YOUR TICKETS\n";
    msgShow = msgShow + "The shopping cart module for the show on " + event + " is in progress.\n\n"
    msgShow = msgShow + "Please visit us again soon."
    alert(msgShow);

}



function soldOut(event){
    var msgShow;

    msgShow = "SOLD OUT SHOW!!!\n";
    msgShow = msgShow + "We're sorry, but our show on " + event + " is already sold out.\n\n"
    msgShow = msgShow + "Please choose a different show."
    alert(msgShow);

}


async function onWithTheShows(){
    console.log("on with the shows...");

    console.log("check if there's a cookie for the api");

    strApiKey = fxnCheckCookie(cookieName);

    fxnGetShows(strApiKey);

    console.log("onWithTheShows... 🗸");

}