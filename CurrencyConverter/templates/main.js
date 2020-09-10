function sendReq() {
  var request = new XMLHttpRequest();
  // var num = document.getElementById('eth')
  request.open("POST", "http://localhost:8000/convert/process", true);
  function reqReadyStateChange() {
    if (request.readyState == 4 && request.status == 200)
      console.log(request.body);
    else{
      console.log(request);
    }
  }
  var body = "eth=" + 1;
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  request.onreadystatechange = reqReadyStateChange;
  request.send(body)
}