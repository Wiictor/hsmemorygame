var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/plus.login');
$("sign-in").show();
$("#user-pic").hide();
$("#user-name").hide();
$("#sign-out").hide();
var token = undefined;
var user = undefined;
var profilePicUrl = undefined;
var userName = undefined;
function onSignIn() {
          firebase.auth().signInWithPopup(provider).then(function(result) {
        token = result.credential.accessToken;
        user = result.user;
        profilePicUrl = user.photoURL;
        userName = user.displayName;
        $("#user-pic").html("<img src='"+profilePicUrl+"' style='border-radius:50%; width:100%'/>");
        $("#user-name").text(userName);
        $("#user-pic").css('display','block');
        $("#user-name").css('display','block');
        $("#sign-out").css('display','block');
        $("#sign-in").css('display','none');
        }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        });
      };

function signOut() {
          firebase.auth().signOut().then(function() {
            token = undefined;
            user = undefined;
            profilePicUrl = undefined;
            userName = undefined;
            $("#user-pic").css('display','none');
            $("#user-name").css('display','none');
            $("#sign-out").css('display','none');
            $("#sign-in").css('display','block');
        }, function(error) {
        });
      }
