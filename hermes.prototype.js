if ($('hermes') == undefined) {
//if (getElementById("hermes") === 'undefined') {
  console.log("Adding Hermes");
  var barHtml = "<div id='hermes' class='navbar' style='width: 340px;'><div class='navbar-inner'><div class='container' style='width: auto;'><a class='brand' href='#'>Hermes</a><div class='btn-group' data-toggle='buttons-radio'><button id='btnStart' class='btn btn-success'>Start</button><button id='btnStop' class='btn btn-danger'>Stop</button></div><ul class='nav pull-right' role='navigatoin'><li class='dropdown'><a id='settings' href='#' role='button' class='dropdown-toggle' data-toggle='dropdown'>Settings<b class='caret'></b></a><ul class='dropdown-menu'><li><a href='#' rel='popover' placement='right' data-content='This is the settings popover dialog'>Option 1</a></li><li class='divider'></li><li><a href='#' rel='popover' placement='right' data-content='This is the settings popover dialog'>Option 2</a></li></ul></li></ul></div></div></div>";

  //$("body").append(barHtml);
  $(body).insert(barHtml);
} else {
  alert("already loaded");
  $("body").remove(barHtml);
}
