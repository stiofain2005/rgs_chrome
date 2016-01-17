/**
 * Created by stephencampbell on 16/01/2016.
 */

// this is a content script that is injected into the page when it is loading

window.onload = function(){

    // get variables from the document
    var urlText = document.location.href;
    var titleText = document.title;
    var hostText = document.location.host;

    // check if the user is loggedIn to RGS ie has cookie been set
    if(localStorage.getItem("loggedIn") === true){
        // send message to the background script that it is loggedIn
        chrome.runtime.sendMessage({loggedIn:"true", urlText:urlText,titleText:titleText,hostText:hostText});

    }
    else{
        // send message to the background script that it is loggedIn
        chrome.runtime.sendMessage({loggedIn:"false", urlText:urlText,titleText:titleText,hostText:hostText});
    }
};