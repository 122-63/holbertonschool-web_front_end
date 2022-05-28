function createElement(data) {
  let paragraph = document.createElement("p");
  paragraph.textContent = data;
  document.body.appendChild(p);
}
function queryWikipedia(callback) {
  let url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&re";

  let oReq = new XMLHttpRequest();
  oReq.open("GET", url);
  oReq.send();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      callback(null, JSON.parse(oReq.responseText));
    }
  };
}
queryWikipedia(createElement);
