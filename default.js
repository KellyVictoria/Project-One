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

var profiles = [
  {
    name: 'Nova',
    image: 'https://s16.postimg.org/s5a3dst1x/Kelly_Kenney.jpg'
  },
  {
    name: 'Luna',
    image: 'http://tinyurl.com/hkod3bj'
  },
  {
    name: 'Whiskers',
    image: 'https://s16.postimg.org/o1m83gg6t/027_A2555.jpg'
  },
  {
    name: 'Waffles',
    image: 'http://tinyurl.com/hoflgwm'
  },
  {
    name: 'Keepo',
    image: 'http://tinyurl.com/z76ugwu'
  }
]


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

function getUserProfile(username, profiles) {
  for (var i = 0; i < profiles.length; i++) {
    var profile = profiles[i];
    if (username === profile.name) {
      return profile
    }
  }
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
    var tweetsForUser = getUserTweets(username, tweets);
    var profile = getUserProfile(username, profiles);
    showProfile(profile);
    showTweets(tweetsForUser);
  })

  return element;
}

showProfile(profiles[0]);
showTweets(tweets);





function profileElement(profile) {
  // <div>
  //   <h1 id="headline">Welcome, Nova!</h1>
  //   <img class="profile-image" src="https://s16.postimg.org/s5a3dst1x/Kelly_Kenney.jpg">
  //   <div class="profile">
  //     <p id="notifications"> You have 2 new messages and 3 new followers </p>
  //     <button type="button" id="post-button" class="btn btn-primary btn-lg">P  o  s  t</button>
  //   </div>
  // </div>
  var element = document.createElement('div');
  var headline = document.createElement('h1');
  headline.setAttribute('id', 'headline');
  headline.textContent = 'Welcome, ' + profile.name + '!';
  var profileImage = document.createElement('img');
  profileImage.classList.add('profile-image');
  profileImage.setAttribute('src', profile.image);
  var profileDetails = document.createElement('div');
  profileDetails.classList.add('profile');
  var notificationText = document.createElement('p');
  notificationText.setAttribute('id', 'notifications');
  notificationText.textContent = 'You have 3 new messages and 4 new followers';
  var postButton = document.createElement('button');
  postButton.setAttribute('id', 'post-button');
  postButton.classList.add('btn', 'btn-primary', 'btn-lg');
  postButton.setAttribute('type', 'button');
  postButton.textContent = ' P O S T ';
  element.appendChild(headline);
  element.appendChild(profileImage);
  element.appendChild(profileDetails);
  profileDetails.appendChild(notificationText);
  profileDetails.appendChild(postButton);
  postButton.addEventListener('click', function(){
    var homeScreen = document.getElementById('home-screen')
    homeScreen.classList.add('hide')
    var newPost = document.getElementById('new-post')
    newPost.classList.remove('hide')
  })


  return element;
}


function showProfile(profile) {
  var element = profileElement(profile);
  var containerProfile = document.getElementById('container-profile');
  containerProfile.innerHTML = '';
  containerProfile.appendChild(element);
}
