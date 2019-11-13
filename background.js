function logTabs(tabs) {
    let tab = tabs[0]; // Safe to assume there will only be one result
    console.log(tab.url);
    return tab.url;
}


function mis() {
    var url = browser.tabs.query({currentWindow: true, active: true}).then(logTabs, console.error);
    console.log("mis url: "+url);
    var request = new XMLHttpRequest();
    request.open("POST", "http://mlnlmal.ml/api/shlk?v=3&orl="+url);
    request.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            var json = JSON.parse(this.responseText);
            console.log(json);
            var su = json.shortUrl;
            var input = document.createElement('textarea');
            document.body.appendChild(input);
            input.value = su;
            input.focus();
            input.select();
            document.execCommand('Copy');
            input.remove();
            console.log("'"+su+"' is copied to clipboard.");
        }
    };
    request.send();
}

browser.browserAction.onClicked.addListener(mis);

