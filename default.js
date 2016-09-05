var tweets = [
  {'name': "Keepo", 'content': 'purr meow purr mew'},
  {'name': 'Whiskers', 'content': 'mew mew humans meow'},
  {'name': 'Nova', 'content': 'mew meow MEOW purr'},
  {'name': 'Whiskers', 'content': 'purrrrrrr #blessed'},
  {'name': 'Nova','content': 'mow mow mow mroww'},
  {'name': 'Nova','content': 'mew mew mew purrrr'},
  {'name': 'Waffles','content': 'mew meow mew meow #beyonce'},
  {'name': 'Fluffy', 'content': 'mewww meww mew'},
  {'name': 'Sniffles','content': '#blessed'},
  {'name': 'Keepo','content': 'meowmewmewoewmow'},
  {'name': 'Keepo', 'content': 'mew'},
]

var postButton = document.getElementById('post-button');
postButton.addEventListener('click', function(event){
  var homeScreen = document.getElementById('home-screen')
  homeScreen.classList.add('hide')
  var newPost = document.getElementById('new-post')
  newPost.classList.remove('hide')
})

var submitPost = document.getElementById('submit-post');
submitPost.addEventListener('click', function(theEvent){
  var commentBox = document.getElementById('comment');
  var commentText = commentBox.value;
  var newTweet = {'content':commentText, name:'Nova'};
  tweets.unshift(newTweet); //no quotes . unshift adds to front push adds to end
  showTweets(tweets);
  var homeScreen = document.getElementById('home-screen')
  homeScreen.classList.remove('hide')
  var newPost = document.getElementById('new-post')
  newPost.classList.add('hide')
})

function showTweets(tweets){   //function name and then parameter name
  var showMe = document.getElementById('showme');
  showMe.innerHTML="";
  for( var i=0; i<tweets.length; i++) {
    var tweet = tweets[i];
    var paragraph = document.createElement('p');
    paragraph.textContent=tweet.name + " " + tweet.content;
    showMe.appendChild(paragraph)
  }
}

showTweets(tweets)


//mdn adding classes
