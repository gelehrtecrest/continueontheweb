window.onload = function(){
	var url = new URL(window.location.href);
	var params = url.searchParams;
	var urltext = params.get('t');
	if(urltext == null){
		urltext = "";
	}
	console.log(urltext)
	var text = decodeURI(urltext);
	console.log(text);
	document.getElementById('tweetBox').value = text;
}
