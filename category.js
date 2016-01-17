/**
 * Created by stephencampbell on 17/01/2016.
 */



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submit_post").addEventListener("click", function () {
        var port = chrome.extension.connect({name: "Sample Communication"});
        port.postMessage(document.getElementById("category").value);
        port.onMessage.addListener(function (msg) {
            //console.log("message recieved"+ msg);
        });
        //category = document.getElementById("category").value;
        //console.log(category);
        //document.getElementById("submit_post").addEventListener("click", addPost(category));
    });
});

