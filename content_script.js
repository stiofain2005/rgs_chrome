/**
 * Created by stephencampbell on 16/01/2016.
 */

window.onload = function(){

    var urlText = document.location.href;
    var titleText = document.title;
    var hostText = document.location.host;


    if(localStorage.getItem("loggedIn") === true){
        chrome.runtime.sendMessage({loggedIn:"true", urlText:urlText,titleText:titleText,hostText:hostText});

    }
    else{
        chrome.runtime.sendMessage({loggedIn:"false", urlText:urlText,titleText:titleText,hostText:hostText});
    }
};