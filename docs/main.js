const url = "https://gelehrtecrest.github.io/continueontheweb/";
const twitterurl = "https://twitter.com/intent/tweet?text=";
$(document).ready( function(){
	$("a").on('click',function(event){
		event.preventDefault();
		//var linkUrl = $(this).attr('href');
		var text_all = document.getElementById("tweetBox");

		var encoded = btoa(encodeURIComponent(text_all.value))
		var urldata = url + 'get.html?t=' + encoded;
		var data = "%0D%0A%0D%0A%23この続きをWebで読もう " + urldata;
		var linkUrl = twitterurl + data;

		function action() {
			location.href = linkUrl;
		}
		setTimeout(action,1000);
	});
});
