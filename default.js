var data = [
  {'name': "Keepo", 'content': 'purr meow purr mew <img src="">'},
  {'name': 'Whiskers', 'content': 'mew mew humans meow'},
  {'name': 'Nova', 'content': 'mew meow MEOW purr'},
  {'name': 'Whiskers', 'content': 'purrrrrrr #blessed <img src="">'},
  {'name': 'Nova','content': 'mow mow mow mroww'},
  {'name': 'Nova','content': 'mew mew mew purrrr'},
  {'name': 'Waffles','content': 'mew meow mew meow #beyonce <img src="">'},
  {'name': 'Fluffy', 'content': 'mewww meww mew'},
  {'name': 'Sniffles','content': '#blessed'},
  {'name': 'Keepo','content': 'meowmewmewoewmow'},
  {'name': 'Keepo', 'content': 'mew'},
]
//var tweets = JSON.parse(data);
var theTweets = "";
document.getElementById('showme');

for( var i=0; i < data.length; i++) {
  theTweets += "<div class='blah'><p><b>@" + data[i].name +
  '</b></p><p class="content">'+ data[i].content +
  "</p><button onclick=clicked()>follow</button></div>";
  ("index" + i + "value:" + data[i]);
  //console.log(theTweets);
}

showme.innerHTML = theTweets;

//function clicked() {
  //alert('click this!')
  // to do: make this button actually do something
//}
