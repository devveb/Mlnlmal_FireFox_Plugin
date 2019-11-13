
function mis() {
    console.log("url: "+window.location)
    var request = new XMLHttpRequest();
    request.open("POST", "http://mlnlmal.ml/api/shlk?v=3&orl="+window.top.location.href);
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

