// Custom addon for injecting remote js files
// Dec 05, 2012
(function() { var url = prompt("Give a JS source URL"); console.log(url.split('.')); if(url.split('.').pop() === 'js') { var script = document.createElement('script'); script.setAttribute('language','JavaScript'); script.setAttribute('src',url); document.body.appendChild(script); } else { alert("Need proper URL: '.js'"); } })();
