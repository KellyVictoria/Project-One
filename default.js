var tweets = [
  {'name': "Keepo", 'content': 'purr meow purr mew'},
  {'name': 'Luna', 'content': 'mew mew humans meow'},
  {'name': 'Nova', 'content': 'mew meow MEOW purr'},
  {'name': 'Whiskers', 'content': 'purrrrrrr #blessed'},
  {'name': 'Nova','content': 'mow mow mow mroww'},
  {'name': 'Luna','content': 'mew mew mew purrrr'},
  {'name': 'Waffles','content': 'mew meow mew meow #beyonce'},
  {'name': 'Fluffy', 'content': 'mewww meww mew'},
  {'name': 'Luna','content': '#blessed'},
  {'name': 'Keepo','content': 'meowmewmewoewmow'},
  {'name': 'Luna', 'content': 'mew'}
]

var postButton = document.getElementById('post-button');
postButton.addEventListener('click', function(){
  var homeScreen = document.getElementById('home-screen')
  homeScreen.classList.add('hide')
  var newPost = document.getElementById('new-post')
  newPost.classList.remove('hide')
})

var submitPost = document.getElementById('submit-post');
submitPost.addEventListener('click', function(){
  var commentBox = document.getElementById('comment');
  var commentText = commentBox.value;
  var newTweet = {'content':commentText, name:'Nova'};
  tweets.unshift(newTweet);
  confirm("Are you sure you want to post this?")
  showTweets(tweets);
  var homeScreen = document.getElementById('home-screen')
  homeScreen.classList.remove('hide')
  var newPost = document.getElementById('new-post')
  newPost.classList.add('hide')
})

function showTweets(tweets) {
  var mainView = document.getElementById('main-view');
  mainView.innerHTML = '';
  for (var i = 0; i < tweets.length; i++) {
    var tweet = tweets[i];
    var element = tweetElement(tweet);
    mainView.appendChild(element);
  }
}

function getUserTweets(username, tweets) {
  var userTweets = [];
  for (var i = 0; i < tweets.length; i++) {
    var tweet = tweets[i];
    if (username === tweet.name) {
      userTweets.push(tweet);
    }
  }

  return userTweets;
}

function tweetElement(tweet) {
  // <div class="tweet">
  //   <p class="tweet-username">
  //     @keepo :
  //   </p>
  //   <p class="tweet-text">
  //    meow meow
  //   </p>
  // </div>
  var element = document.createElement('div');
  element.classList.add('tweet');
  var userParagraph = document.createElement('p');
  userParagraph.classList.add('tweet-username');
  userParagraph.textContent = '@' + tweet.name;
  userParagraph.setAttribute('data-username', tweet.name)
  var tweetContent = document.createElement('p');
  tweetContent.classList.add('tweet-text');
  tweetContent.textContent = tweet.content;
  element.appendChild(userParagraph);
  element.appendChild(tweetContent);

  userParagraph.addEventListener('click', function (event){
    var username = event.target.getAttribute('data-username');
    var tweetsForUser = getUserTweets(username, tweets)
    showTweets(tweetsForUser);
  })

  return element;
}

showTweets(tweets);
