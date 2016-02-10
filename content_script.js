/**
 * Created by stephencampbell on 16/01/2016.
 */

// this is a content script that is injected into the page when it is loading

window.onload = function(){

    // get variables from the document
    var urlText = document.location.href;
    var titleText = document.title;
    var hostText = document.location.host;

    chrome.runtime.sendMessage({urlText:urlText,titleText:titleText,hostText:hostText});
};