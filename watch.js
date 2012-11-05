javascript:(function(){var id=document.evaluate("/html/body/div[3]/div[5]/div[2]/div[1]/div/p",document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue.outerText.split(":")[1];console.log(id);var tpath = '//*[@id="timer_' + id + '"]'; var timer = document.evaluate(tpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue.outerText.split(":")[2]; console.log("Auction: " + id);setInterval(console.log("Timer: " + timer), 500); })();

javascript: myfunc = function(){var id=document.evaluate("/html/body/div[3]/div[5]/div[2]/div[1]/div/p",document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue.outerText.split(":")[1];console.log(id);var tpath = '//*[@id="timer_' + id + '"]'; var timer = document.evaluate(tpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue.outerText.split(":")[2]; console.log("Auction: " + id); console.log("Timer: " + timer); }; setInterval(myfunc, 500);



//Div injector
var clr = document.createelement("script");
clr.type = "text/javascript";
clr.textContent = "clearInterval(myfunc);

var div = document.createElement("div");
document.body.appendChild(div);
div.innerHTML = "<button type='button' value='STOP' style='position:absolute; left: 0px; top:0px; right:50px; z-index:1000;'>STOP</button>" 

