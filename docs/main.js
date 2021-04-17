const url = "https://gelehrtecrest.github.io/continueontheweb/"

function GetTweet(str,code){
	var text_all = document.getElementById("tweetBox");

	var encoded = btoa(encodeURIComponent(text_all.value))
	//var encoded = encodeURI(text_all.value);
	var urldata = url + 'get.html?t=' + encoded;
	var data = "\n\n #この続きをWebで読もう " + urldata 

	TWEET.innerHTML =　'<a class="btn btn-primary" href="https://twitter.com/intent/tweet?text=' + data + '" target="_blank">Twitterを起動</a>'
}
