/**
 * Created by stephencampbell on 16/01/2016.
 */

var urlText, titleText, hostText, cookieUser, cookieUserId;


chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        addPost(msg);
    });

});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    urlText = message.urlText;
    titleText = message.titleText;
    hostText = message.hostText;

    chrome.cookies.get({ url: /*'http://localhost:3000'*/'http://readgoodstuff.meteor.com', name: 'userName' },
        function (cookie) {
            cookieUser = cookie.value;
        });

    chrome.cookies.get({ url: /*'http://localhost:3000'*/'http://readgoodstuff.meteor.com', name: 'userId' },
        function (cookie) {
            cookieUserId = cookie.value;
        });


    chrome.browserAction.setPopup({popup:"category.html"});

});

addPost = function(message){
    var categoryVar = message.category;
    var publishVar = message.publish;
    console.log(categoryVar);
    console.log(publishVar);

    var ddp = new MeteorDdp("wss://readgoodstuff.meteor.com/websocket");
    //var ddp = new MeteorDdp("ws://localhost:3000/websocket");
    ddp.connect().then(function() {
        ddp.subscribe("posts");
        var post = {
            title: titleText,
            url: urlText,
            category: categoryVar,
            clicks:0,
            userId:cookieUserId,
            user: cookieUser,
            publish:publishVar
        };
        ddp.call('postInsert',[post]);
        ddp.close();
    });
};
