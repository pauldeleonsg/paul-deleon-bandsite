/* CODCONVO.JS */


/*** VARIABLES ***/

var txtName, txtComment, txtDate, txtErr1, txtErr2;


let convoComments = [
    {
        cName : "Miles Acosta",
        cDate : "12/20/2020",
        cText : "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        cFile : "./assets/images/icon-profile.png",
    },
    {
        cName : "Emilie Beach",
        cDate : "01/09/2021",
        cText : "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.", 
        cFile : "./assets/images/icon-profile.png",
    },
    {
        cName : "Connor Walton",
        cDate : "02/17/2021",
        cText : "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        cFile : "./assets/images/icon-profile.png",
    },
]   



/*** FUNCTIONS ***/

function logComment(name, index){
    // test: log comments in console
    console.log(`rec: ${index + 1} | name: ${name.cName} | date: ${name.cDate} | text: ${name.cText}`);

}


function domComment(name, index){
    // create DOM for each record
    // no innerHTML

    let divID = "divID" + index;        //create ID for DOM elements
    
    let elem1 = document.createElement("div");
    elem1.setAttribute("id", divID+"a");
    elem1.setAttribute("class", "convo-div__content3");

    let elem2 = document.createElement("div");
    elem2.setAttribute("id", divID+"b");
    elem2.setAttribute("class", "convo-div__img-avatar");
    
    let elem3 = document.createElement("img");
    elem3.setAttribute("id", divID+"c");
    elem3.setAttribute("class", "avatar");
    elem3.src = name.cFile;

    let elem4 = document.createElement("ul");
    elem4.setAttribute("id", divID+"d");
    elem4.setAttribute("class", "convo-ul__comment");

    document.getElementById("divConvo").appendChild(elem1);
    document.getElementById(divID+"a").appendChild(elem2);
    document.getElementById(divID+"b").appendChild(elem3);
    document.getElementById(divID+"a").appendChild(elem4);
    
    
    var elem5 = document.createElement("li");
    var elem5b = document.createTextNode(name.cName);
    var elem6 = document.createElement("li");
    var elem6b = document.createTextNode(name.cDate);
    var elem7 = document.createElement("li");
    var elem7b = document.createTextNode(name.cText);
    
    elem5.appendChild(elem5b);
    elem6.appendChild(elem6b);
    elem7.appendChild(elem7b);
    
    document.getElementById(divID+"d").appendChild(elem5);
    document.getElementById(divID+"d").appendChild(elem6);
    document.getElementById(divID+"d").appendChild(elem7);

    let elem8 = document.createElement("hr");
    document.getElementById("divConvo").appendChild(elem8);
}



function getDate(){
    //  ✓  get current date m/d/yyyy
    var theTime = new Date();
    var theMonth = theTime.getMonth() + 1;
    var theDay = theTime.getDate();
    var theYear = theTime.getFullYear();
    return (theMonth + "/" + theDay + "/" + theYear);
}



function getForm(){
    // ✓   clear vars
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
                
    txtDate = getDate();
    
    chkForm(txtName, txtComment);

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

    pushArray(txtName, txtDate, txtComment);
    displayComment();
    clearConvoForm();
}


function chkForm(name, comment){

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

}


function pushArray(name, date, comment){
    let convoRec = {
        cName : name,
        cDate : date,
        cText : comment,
        cFile : "./assets/images/Mohan-muruge.jpg",
    }

    convoComments.push(convoRec);

}

function clearConvoForm(){
    document.getElementById("frmName").value = "";
    document.getElementById("frmComment").value = "";

}



function displayComment(){
    //  ✓  sort array by date
    convoComments.reverse((a, b) => a.cDate - b.cDate);     

    //  ✓  read reversed array
    //  ✓  create append DOM
    convoComments.forEach((cName, index) => domComment(cName, index));

}




/*** CALLER ***/

//displayComment();
//getDate();



/*** REFERENCES ***/
// Array & DOMs:
// https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/

//https://www.javascripttutorial.net/javascript-array-foreach/

//https://www.freecodecamp.org/news/javascript-array-foreach-tutorial-how-to-iterate-through-elements-in-an-array-with-map/


// Time
//http://www.tizag.com/javascriptT/javascriptdate.php


// Validation
//https://www.javatpoint.com/javascript-form-validation
//https://jsfiddle.net/TimothyKanski/wnt8o12j/