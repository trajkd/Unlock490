$(window).on('load', function() {
	$.ajax($('.container').load("/login")).done(function() {
		document.title = 'Accesso - Unlock490';
		$("#loader").hide();
	});
    return false;
});

function getContent(fragmentId, callback){

  var pages = {
  	home: "/login",
    login: "/login",
    signup: "/signup",
    emailphonesignup: "/emailphonesignup",
    verifyemail: "/verifyemail",
    verifyphone: "/verifyphone",
    success: "/success",
    doubts: "/doubts",
    newpassword: "/newpassword",
    verifyemailforrecovery: "/verifyemailforrecovery",
    verifyphoneforrecovery: "/verifyphoneforrecovery",
    choosenewpassword: "/choosenewpassword",
    recoverysuccess: "/recoverysuccess",
    menu: "/menu"
  };

  callback(pages[fragmentId]);
}

function loadContent(){
	$("#loader").show();
    var fragmentId = location.hash.substr(1);

  getContent(fragmentId, function (content) {
    $.ajax($('.container').load(content)).done(function() {
    	$("#loader").hide();
    });
  });

}

if(!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent)

$(document).on("click", "#signup", function() {
    location.hash = "#signup";
    document.title = 'Iscrizione - Unlock490';
    return false;
});

$(document).on("click", "#signupButton", function() {
	location.hash = "#emailphonesignup";
	document.title = 'Dati aggiuntivi - Unlock490';
    return false;
});

$(document).on("click", "#emailphonesignupButton", function() {
	location.hash = "#verifyemail";
	document.title = 'Verifica email - Unlock490';
    return false;
});

$(document).on("click", "#verifyemailButton", function() {
	location.hash = "#verifyphone";
	document.title = 'Verifica cellulare - Unlock490';
    return false;
});

$(document).on("click", "#verifyphoneButton", function() {
	location.hash = "#success";
	document.title = 'Iscrizione terminata - Unlock490';
    return false;
});

$(document).on("click", "#loginButton", function() {
	location.hash = "#menu";
	document.title = 'Menu - Unlock490';
    return false;
});

$(document).on("click", "#doubts", function() {
	location.hash = "#doubts";
	document.title = 'Dubbi sulla password - Unlock490';
    return false;
});

$(document).on("click", "#newpassword", function() {
	location.hash = "#newpassword";
	document.title = 'Reimposta password - Unlock490';
    return false;
});

$(document).on("click", "#recoveryButton", function() {
	location.hash = "#verifyemailforrecovery";
	document.title = 'Reimposta password - Unlock490';
    return false;
});

$(document).on("click", "#verifyemailforrecoveryButton", function() {
	location.hash = "#verifyphoneforrecovery";
	document.title = 'Reimposta password - Unlock490';
    return false;
});

$(document).on("click", "#verifyphoneforrecoveryButton", function() {
	location.hash = "#choosenewpassword";
	document.title = 'Reimposta password - Unlock490';
    return false;
});

$(document).on("click", "#choosepasswordButton", function() {
	location.hash = "#recoverysuccess";
	document.title = 'Reimposta password - Unlock490';
    return false;
});

$(document).on("click", "#toLogin", function() {
	location.hash = "#login";
	document.title = 'Accesso - Unlock490';
    return false;
});
    // $.ajax({
    //     url: '/emailphonesignup',
    //     type: 'post',
    //     dataType: 'json',
    //     data: $('form#signupForm').serialize(),
    //     success: function(data) {
    //                // ... do something with the data...
    //              }
    // });