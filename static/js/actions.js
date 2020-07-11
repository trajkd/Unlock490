$(document).on("click", "#sidebarCollapse", function() {
    $('#sidebar').toggleClass('active');
});

$(window).on('load', function() {
	$.ajax($('.container').load("/login")).done(function() {
		document.title = 'Accesso - Unlock490';
		$("#loader").hide();
	});
    return false;
});

var pickupconfirmed = false;

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
    menu: "/menu",
    pickup: "/pickup",
    pickuphour: "/pickuphour",
    confirmpickup: "/confirmpickup",
    readyforpickup: "/readyforpickup"
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

$(document).on("click", "#profile", function() {
	location.hash = "#profile";
	document.title = 'Profilo - Unlock490';
    return false;
});

$(document).on("click", "#pickup", function() {
	if (pickupconfirmed) {
		location.hash = "#readyforpickup";
	} else {
		location.hash = "#pickup";
	}
	document.title = 'Ritiro - Unlock490';
	return false;
});

$(document).on("click", "#therapy", function() {
	location.hash = "#therapy";
	document.title = 'Terapia - Unlock490';
    return false;
});

$(document).on("click", "#notifications", function() {
	location.hash = "#notifications";
	document.title = 'Notifiche - Unlock490';
    return false;
});

$(document).on("click", "#guide", function() {
	location.hash = "#guide";
	document.title = 'Guida - Unlock490';
    return false;
});

$(document).on("click", "#settings", function() {
	location.hash = "#settings";
	document.title = 'Impostazioni - Unlock490';
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

$(document).on("click", "#filterAllDays", function() {
	$('#filterAllDays').addClass('active');
	$('#filterCurrentWeek').removeClass('active');
    $('#filterNextWeek').removeClass('active');
    $("#available-day1").show();
    $("#available-day2").show();
    $("#available-day3").show();
    $("#available-day4").show();
    $("#available-day5").show();
    $("#available-day6").show();
});

$(document).on("click", "#filterCurrentWeek", function() {
    $('#filterAllDays').removeClass('active');
	$('#filterCurrentWeek').addClass('active');
    $('#filterNextWeek').removeClass('active');
    $("#available-day1").show();
    $("#available-day2").show();
    $("#available-day3").show();
    $("#available-day4").show();
    $("#available-day5").show();
    $("#available-day6").hide();
});

$(document).on("click", "#filterNextWeek", function() {
    $('#filterAllDays').removeClass('active');
	$('#filterCurrentWeek').removeClass('active');
    $('#filterNextWeek').addClass('active');
    $("#available-day1").hide();
    $("#available-day2").hide();
    $("#available-day3").hide();
    $("#available-day4").hide();
    $("#available-day5").hide();
    $("#available-day6").show();
});

$(document).on("click", ".available-day", function() {
	location.hash = "#pickuphour";
	document.title = 'Ritiro - Unlock490';
    return false;
});

$(document).on("click", "#filterAllHours", function() {
	$('#filterAllHours').addClass('active');
	$('#filterAM').removeClass('active');
    $('#filterPM').removeClass('active');
    $("#available-hour1").show();
    $("#available-hour2").show();
    $("#available-hour3").show();
    $("#available-hour4").show();
    $("#available-hour5").show();
    $("#available-hour6").show();
    $("#available-hour7").show();
    $("#available-hour8").show();
    $("#available-hour9").show();
    $("#available-hour10").show();
    $("#available-hour11").show();
});

$(document).on("click", "#filterAM", function() {
    $('#filterAllHours').removeClass('active');
	$('#filterAM').addClass('active');
    $('#filterPM').removeClass('active');
    $("#available-hour1").show();
    $("#available-hour2").show();
    $("#available-hour3").show();
    $("#available-hour4").show();
    $("#available-hour5").show();
    $("#available-hour6").show();
    $("#available-hour7").hide();
    $("#available-hour8").hide();
    $("#available-hour9").hide();
    $("#available-hour10").hide();
    $("#available-hour11").hide();
});

$(document).on("click", "#filterPM", function() {
    $('#filterAllHours').removeClass('active');
	$('#filterAM').removeClass('active');
    $('#filterPM').addClass('active');
    $("#available-hour1").hide();
    $("#available-hour2").hide();
    $("#available-hour3").hide();
    $("#available-hour4").hide();
    $("#available-hour5").hide();
    $("#available-hour6").hide();
    $("#available-hour7").show();
    $("#available-hour8").show();
    $("#available-hour9").show();
    $("#available-hour10").show();
    $("#available-hour11").show();
});

$(document).on("click", ".available-hour", function() {
	location.hash = "#confirmpickup";
	document.title = 'Ritiro - Unlock490';
    return false;
});

$(document).on("click", "#confirmpickupButton", function() {
	pickupconfirmed = true;
	location.hash = "#readyforpickup";
	document.title = 'Ritiro - Unlock490';
    return false;
});

$(document).on("click", "#modifypickupButton", function() {
	location.hash = "#pickup";
	document.title = 'Ritiro - Unlock490';
    return false;
});