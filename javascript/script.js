function page(content){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("tabs").innerHTML = this.responseText;
    }
  };
    history.pushState(content, null,content+".html");
    window.addEventListener('popstate', function(content){
        xhttp.open("GET",content.state+'.html', true);
        xhttp.send();

    })
    xhttp.open("GET",content+".html", true);
    xhttp.send();
}
page('about');