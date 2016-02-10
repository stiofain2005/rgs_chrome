/**
 * Created by stephencampbell on 17/01/2016.
 */



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submit_post").addEventListener("click", function () {
        window.close();
        var port = chrome.extension.connect({name: "Sample Communication"});
        var publishVar;
        if(document.getElementById('publishBox').checked){
            publishVar = true;
        }
        else{
            publishVar = false;
        }
        port.postMessage({category:document.getElementById("category").value,publish:publishVar});
    });
});

