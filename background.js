function logTabs(tabs) {
    let tab = tabs[0]; // Safe to assume there will only be one result
    return tab.url;
}


function mis() {
    var url = browser.tabs.query({currentWindow: true, active: true}).then(logTabs, console.error);
    console.log("mis url: "+url);

    var request = new XMLHttpRequest();
    request.open("POST", "http://mlnlmal.ml/api/shlk?v=3&orl="+url);
    request.onreadystatechange = function() {
        console.log(this);
        if(this.readyState === 4 && this.status === 200) {

            //var json = JSON.parse(this.responseText);
            //console.log(json);
        }


    };
    navigator.clipboard.writeText("test11");
    request.send();

    browser.notifications.create({
        "type": "basic",
        "iconUrl": browser.extension.getURL("icons/link-48.png"),
        "title": "mlnlmal",
        "message": "helloworld"
    });





}

browser.browserAction.onClicked.addListener(mis);

