function checkLoginState() {
  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

function statusChangeCallback(response) {
  if (response.status === 'connected') {
    console.log('Successfully logged in with Facebook');
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  $("p").hide();
  .text(response.name);
  $("img").attr("src","response.picture.data.url");
}



}
