myfunc = function() {
  var xpaths = {};
  xpaths["result"] = XPathResult.FIRST_ORDERED_NODE_TYPE;
  xpaths['id'] = '/html/body/div[3]/div[4]/div[2]/div[1]/div/p';

  var id = document.evaluate(xpaths["id"], document, null, xpaths['result'], null).singleNodeValue.outerText.split(":")[1];
  xpaths["timer"] = '//*[@id="timer_' + id + '"]';
  var timer = document.evaluate(xpaths["timer"], document, null, xpaths['result'], null).singleNodeValue.outerText.split(":")[2];

  console.log("Auction: " + id);
  console.log("Timer: " + timer);
  console.log("\n");

  if (timer < 6) console.log("\n\t\tless than 6s\n\n");

  };
  handler = setInterval(myfunc, 1000);
  
