/**
 * Created by stephencampbell on 17/01/2016.
 */



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submit_post").addEventListener("click", function () {
        window.close();
        var port = chrome.extension.connect({name: "Sample Communication"});
        port.postMessage(document.getElementById("category").value);
        port.onMessage.addListener(function (msg) {
            //console.log("message recieved"+ msg);
        });
    });
});

