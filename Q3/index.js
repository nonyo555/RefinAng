import jsdom from "jsdom";
import request from 'request'
const { JSDOM } = jsdom
var param = process.argv[2]
request.defaults({jar: true})
const j = request.jar();
const cookie = request.cookie('hasCookie=true');
const url = 'https://codequiz.azurewebsites.net/';
j.setCookie(cookie, url);
request({url: url, jar: j}, function (error, response, body) {
  let dom = new JSDOM(body)
  if(param == "B-INCOMESSF"){
    console.log(dom.window.document.querySelector("tr:nth-child(2) td:nth-child(2)").textContent);
  }
  else if (param == "BM70SSF"){
    console.log(dom.window.document.querySelector("tr:nth-child(3) td:nth-child(2)").textContent);
  }
  else if (param == "BEQSSF"){
    console.log(dom.window.document.querySelector("tr:nth-child(4) td:nth-child(2)").textContent);
  }
  else if (param == "B-FUTURESSF"){
    console.log(dom.window.document.querySelector("tr:nth-child(5) td:nth-child(2)").textContent);
  }
  
});