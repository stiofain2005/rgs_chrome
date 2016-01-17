/**
 * Created by stephencampbell on 16/01/2016.
 */

var urlText, titleText, hostText;

chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    //alert("In background");


});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    urlText = message.urlText;
    titleText = message.titleText;
    hostText = message.hostText;

    var ddp = new MeteorDdp("ws://localhost:3000/websocket");
    ddp.connect().then(function() {
        ddp.subscribe("posts");

        var post = {
            title: titleText,
            url: urlText,
            category: "Business"
        };
        ddp.call('postInsert',[post]);

    });




    if(message.loggedIn === "true"){
        chrome.browserAction.setPopup("category.html");
        //alert("In background loggedIn");
    }
    else{
        console.log("In background loggedOut");
        //alert("In background loggedOut");
        chrome.browserAction.setPopup({popup:"category.html"});

    }
});


/*chrome.browserAction.onClicked.addListener(function(tab){
    // does the localstorage boolean say true
    alert("test");
    console.log("Hello");
    /*
    //localStorage.setItem("loggedIn",true);

    //var pageUrl = document.URL;
    //console.log("URL = " + pageUrl);
    //var pageHostName = window.location.hostname;
    //console.log("Hostname = " + pageHostName);

    //if(localStorage.getItem("loggedIn")){
        // if yes
        //chrome.browserAction.setPopup("category.html");
        // connect to the database via ddp
        /*var ddp = new MeteorDdp("ws://localhost:3000/websocket");
        ddp.connect().then(function(){
            ddp.subscribe("posts");
            ddp.call("insert",[])
        })
        // insert a new post and use the url of the current tab
    //}
    else{
        chrome.browserAction.setPopup("popup.html");
    }


    // if no
        // set popup page
        // on clicking login
            // connect to the server and call loginfromExtension
            // set localstorage to true
            // insert the page
});*/