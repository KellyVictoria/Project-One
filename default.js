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
  tweets.unshift(newTweet); //no quotes . unshift adds to front push adds to end
  confirm("Are you sure you want to post this?")
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
    var paragraphone = document.createElement('p');
    var paragraphtwo = document.createElement('p');
    var linebreak = document.createElement('br');
    paragraphone.textContent="@" + tweet.name + " : ";
    paragraphtwo.textContent= tweet.content ;
    showMe.appendChild(paragraphone);
    showMe.appendChild(linebreak);
    showMe.appendChild(paragraphtwo);
    showMe.appendChild(linebreak);

  showMe.classList.add("user");

}
}



showTweets(tweets)


//mdn adding classes




// Issue 3 - Can view another User's Timeline

var userButton = document.getElementById('');
postButton.addEventListener('click', function(){
  var homeScreen = document.getElementById('')
  homeScreen.classList.add('hide')
  var newPost = document.getElementById('')
  newPost.classList.remove('hide')
})

<!--
// JAVASCRIPT for issue 3
|
|
|

// establish variables
// container for tweets, pulls tweets with only chosen username
// function that hides previous home page content and pulls issue 3 content, 'swap view'
// eventlisteners that listen for clicks on the username

var followerTimeline = document.createElement("div");
var profileBlock = document.createElement("")
element.setAttribute()

function swap(location, next) {
var current = document.getElementById(location);
var active = current.getElementsByClassName('active')[0];
active.classList.remove('active');
active.classList.add('hide');

var next = document.getElementById(next);
next.classList.remove('hide');
next.classLIst.add('active');
}

var navigation = document.getElementById('navigation');

navigation.addEventListener('click', function(theEvent) {
var id = theEvent.target.getAttribute('data-id');
swap('view', id);
});


//swap('view', 'followed'); -->




//still need to add user profile icon to each tweets, also add links to each tweet object that will direct
//user to chosen profile page (issue 3)
// add user photo to navbar
