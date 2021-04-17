const url = "https://gelehrtecrest.github.io/continueontheweb/"

function GetTweet(str,code){
	var text_all = document.getElementById("tweetBox");
	//var input_data = text_all.value.replace(/\r?\n/g, '%0D%0A');

	var encoded = encodeURI(text_all);
	var urldata = url + 'get.html?t=' + encoded;
	var data = "この続きはWebで " + urldata;

	TWEET.innerHTML =　'<a class="btn btn-primary" href="https://twitter.com/intent/tweet?text=' + data + '" target="_blank">Twitterを起動</a>'
}
