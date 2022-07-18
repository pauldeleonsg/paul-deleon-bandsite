/* CODSHOWS.JS */


/*** VARIABLES ***/


let listShows = [
    {
        cRec : 1,
        cDate : "Jun 06, 2022",
        cDay : "Mon",
        cVenue : "Araneta Coliseum",
        cLocation : "Manila, PH",
        cStatus : 6,
    },
    {
        cRec : 2,
        cDate : "Jul 07, 2022",
        cDay : "Thu",
        cVenue : "SG Expo",
        cLocation : "Singapore, SG",
        cStatus : 6,
    },
    {
        cRec : 3,
        cDate : "Sept 06, 2022",
        cDay : "Tue",
        cVenue : "Ronald Lane",
        cLocation : "San Francisco, CA",
        cStatus : 4,
    },
    {
        cRec : 4,
        cDate : "Sept 09, 2022",
        cDay : "Sun",
        cVenue : "Pier 3",
        cLocation : "San Francisco, CA",
        cStatus : 4,
    },
    {
        cRec : 5,
        cDate : "Oct 15, 2022",
        cDay : "Sat",
        cVenue : "View Lounge",
        cLocation : "San Francisco, CA",
        cStatus : 3,
    },
    {
        cRec : 6,
        cDate : "Nov 06, 2022",
        cDay : "Sun",
        cVenue : "Hyatt Agency",
        cLocation : "San Francisco, CA",
        cStatus : 2,
    },
    {
        cRec : 7,
        cDate : "Nov 11, 2022",
        cDay : "Sat",
        cVenue : "Moscow Center",
        cLocation : "San Francisco, CA",
        cStatus : 2,
    },
    {
        cRec : 8,
        cDate : "Dec 15, 2022",
        cDay : "Thu",
        cVenue : "Press Club",
        cLocation : "San Francisco, CA",
        cStatus : 1,
    },
    {
        cRec : 9,
        cDate : "Jan 03, 2023",
        cDay : "Tue",
        cVenue : "FREX",
        cLocation : "Fredericton, NB",
        cStatus : 0,
    },
    {
        cRec : 10,
        cDate : "Feb 03, 2023",
        cDay : "Fri",
        cVenue : "Confederation Box Office",
        cLocation : "Charlottetown, PE",
        cStatus : 0,
    },
]   


/*** FUNCTIONS ***/

//listShows.forEach((cDate, index) => logShows(cDate, index));

function logShows(show, index){
    // test: log shows in console
    console.log(`${index + 1})  date: ${show.cDay} ${show.cDate} | venue: ${show.cVenue} | location: ${show.cLocation} | status: ${show.cStatus}`);
}


function domShows(show, index){
    // ✓   create DOM for each record
    // ✓   no innerHTML

    
    let divID = "divID" + index;        //create ID for DOM elements
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
    var elem3b = document.createTextNode(show.cDay + " " + show.cDate);
    elem3.appendChild(elem3b);

    let elem4 = document.createElement("span");
    elem4.setAttribute("class", "ticket__label font-label");
    var elem4b = document.createTextNode("Venue");
    elem4.appendChild(elem4b);

    let elem5 = document.createElement("span");
    elem5.setAttribute("class", "ticket__desc");
    var elem5b = document.createTextNode(show.cVenue);
    elem5.appendChild(elem5b);

    let elem6 = document.createElement("span");
    elem6.setAttribute("class", "ticket__label font-label");
    var elem6b = document.createTextNode("Location");
    elem6.appendChild(elem6b);

    let elem7 = document.createElement("span");
    elem7.setAttribute("class", "ticket__desc");
    var elem7b = document.createTextNode(show.cLocation);
    elem7.appendChild(elem7b);

    if (show.cStatus == 6) {
        btnStr = "Sold Out";
        btnFxn = `soldOut("${show.cDay} ${show.cDate}")`;
    } else {
        btnStr = "Buy Tickets";
        btnFxn = `getTicket("${show.cDay} ${show.cDate}")`;
    }

    let elem8 = document.createElement("button");
    var elem8b = document.createTextNode(btnStr);
    elem8.setAttribute("id", "tix" + show.cRec);
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



function displayShows(){
    //  ✓  read array
    //  ✓  create append DOM
    
    listShows.forEach((cDate, index) => domShows(cDate, index));

    theHeaderMaybe();       //idk... to make the header maybe >:D

}




/*** CALLER ***/




/*** REFERENCES ***/
// Array & DOMs:
// https://www.valentinog.com/blog/html-table/
// https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-7.php