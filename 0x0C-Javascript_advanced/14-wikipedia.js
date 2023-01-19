function createElement(data){
    let p = document.createElement('p');
    p.innerHTML = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // callback(this.responseText);
            callback(JSON.parse(this.responseText).query.pages["21721040"].extract);
        }
        if (this.readyState == 4 && this.status != 200) {
            callback("Error");
        }
    };

    request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    request.send();   
}

queryWikipedia(createElement);
