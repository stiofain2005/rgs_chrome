/**
 * Created by stephencampbell on 16/01/2016.
 */

var urlText, titleText, hostText;


chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        //port.postMessage("Hi Popup.js");
        addPost(msg);
    });

});

chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    //alert("In background");



});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    urlText = message.urlText;
    titleText = message.titleText;
    hostText = message.hostText;



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

addPost = function(category){
    var ddp = new MeteorDdp("ws://readgoodstuff.meteor.com/websocket");
    ddp.connect().then(function() {
        ddp.subscribe("posts");
        console.log("in addpost " + category);
        var post = {
            title: titleText,
            url: urlText,
            category: category
        };
        ddp.call('postInsert',[post]);

    });
};