// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// require("!style!css!./bootstrap/css/bootstrap.css");
require("!style!css!./plugins/jvectormap/jquery-jvectormap-1.2.2.css");
require("!style!css!./dist/css/skins/_all-skins.min.css");
require("!style!css!./dist/css/AdminLTE.min.css");
require("!style!css!./css/main.css");
require("!style!css!./css/duoshuo_change.css");
require("!style!css!./plugins/iCheck/flat/blue.css");
require("!style!css!./plugins/daterangepicker/daterangepicker.css");
// require("!style!css!./css/font-awesome.min.css");
// require("!style!css!./css/ionicons.min.css");
require("!style!css!./css/baidushare.css");


require("./router.js")

// require("./plugins/sparkline/jquery.sparkline.min.js")
require("./bootstrap/js/bootstrap.min.js")
// require("./plugins/jvectormap/jquery-jvectormap-1.2.2.min.js")
// require("./plugins/jvectormap/jquery-jvectormap-world-mill-en.js")
require("./plugins/slimScroll/jquery.slimscroll.min.js")
// require("./dist/js/demo.js")
require("./dist/js/app.min.js")
function setScroll(){
  $("#app").slimScroll({
  	height: $(window).height(),
  	alwaysVisible: true,
  });
}
setScroll();
$(window).on("resize",setScroll);
$(document).ajaxStart(function() { Pace.restart(); });
