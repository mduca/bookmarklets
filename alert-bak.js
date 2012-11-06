alert("Its working");

loadjscssfile("http://twitter.github.com/bootstrap/assets/js/bootstrap.js");
loadjscssfile("http://twitter.github.com/bootstrap/assets/css/bootstrap.css");
loadjscssfile("http://raw.github.com/mduca/bookmarklets/master/hermes.prototype.js");


function loadjscssfile(filename, filetype){

  removejscssfile(filename,filetype);//remove if they exist, when you reload a bookmarklet you don't want to stack files.

  if (filetype=="js") {  
    var fileref=document.createElement('script')
    fileref.setAttribute("type","text/javascript")
    fileref.setAttribute("src", filename)
  }
  else if (filetype=="css") { 
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)
    }

  if (typeof fileref!="undefined")
  {
    document.getElementsByTagName("head")[0].appendChild(fileref)
  }
}

function removejscssfile(filename, filetype){
  var targetelement= "none"; //determine element type to create nodelist from

  if(filetype=="js") {
    targetelement = "script";
  }
  else if(filetype=="css") {
    targetelement = "link";
  }

  var targetattr = "none"; //determine corresponding attribute to test for

  if(filetype=="js") {
    targetattr = "src";
  }
  else if(filetype=="css"){
    targetattr = "href";
  }

  var allsuspects=document.getElementsByTagName(targetelement)

  for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
    {
      allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
  }
}
