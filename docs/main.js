const url = "https://gelehrtecrest.github.io/continueontheweb/";
const twitterurl = "https://twitter.com/intent/tweet?text=";
$(document).ready( function(){
	$("a").on('click',function(event){
		event.preventDefault();
		var text_all = document.getElementById("tweetBox");

		var encoded = btoa(encodeURIComponent(text_all.value))
		var urldata = url + 'get.html?t=' + encoded;
		var data = "%0D%0A%0D%0A%23この続きをWebで読もう " + urldata;
		var linkUrl = twitterurl + data;

		function action() {
			convertBitly(urldata).done(function (d) {
				if(d.data.url){
					data = "%0D%0A%0D%0A%23この続きをWebで読もう " + d.data.url;
					linkUrl = twitterurl + data;
				}
				location.href = linkUrl;
			});
		}
		setTimeout(action,1000);
	});
});

function convertBitly(url) {
    var encUrl = encodeURIComponent(url);
    var bitly = "https://api-ssl.bitly.com/v3/shorten?access_token=73a5adbde17b423b927541b3d13f14fb03310146&longUrl=" + encUrl;

    var d = new $.Deferred();

    $.ajax({
    	type: "get",
    	url: bitly,
    	dataType: "jsonp",
    	processData: false,
    	contentType: false,
    	success: d.resolve,
    	error: d.reject
    });
    return d.promise();
}
