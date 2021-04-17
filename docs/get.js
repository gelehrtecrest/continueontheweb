window.onload = function(){
	var url = new URL(window.location.href);
	var params = url.searchParams;
	var urltext = params.get('t');
	if(urltext == null){
		urltext = "";
	}
	var text = decodeURIComponent(atob(urltext));
	document.getElementById('tweetBox').value = text;
}
