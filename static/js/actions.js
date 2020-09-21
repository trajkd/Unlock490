$(document).on("click touch", "#sidebarCollapse", function() {
    $('#sidebar').toggleClass('active');
});

$(window).on('load', function() {
	location.hash = "#tutorial";
	$.ajax($('.container').load("/tutorial")).done(function() {
		document.title = 'Tutorial - Unlock490';
		$("#loader").hide();
	});
    return false;
});

var pickupconfirmed = false;
var rotated = false;
var loggedin = false;

function getContent(fragmentId, callback){

  var pages = {
  	home: "/login",
    login: "/login",
    tutorial: "/tutorial",
    signup: "/signup",
    emailphonesignup: "/emailphonesignup",
    verifyemail: "/verifyemail",
    verifyphone: "/verifyphone",
    success: "/success",
    newpassword: "/newpassword",
    verifyemailforrecovery: "/verifyemailforrecovery",
    verifyphoneforrecovery: "/verifyphoneforrecovery",
    choosenewpassword: "/choosenewpassword",
    recoverysuccess: "/recoverysuccess",
    pickup: "/pickup",
    pickuphour: "/pickuphour",
    confirmpickup: "/confirmpickup",
    readyforpickup: "/readyforpickup",
    hospitalinfo: "/hospitalinfo",
    profile: "/profile",
    guide: "/tutorial",
    settings: "/settings",
    calendar: "/calendar"
  };

  callback(pages[fragmentId]);
}

function loadContent(){
    $("#loader").show();
    var fragmentId = location.hash.substr(1);

    getContent(fragmentId, function (content) {
        $.ajax($('.container').load(content)).done(function() {
        	$("#loader").hide();
            window.scrollTo(0, 0);
            footer();
        	if (pickupconfirmed) {
        		$('#alert').html("<i class='fas fa-exclamation-circle'></i> Hai 1 terapia da ritirare a breve.");
        	}
            if (fragmentId === "home" || fragmentId === "login" || fragmentId === "tutorial") {
                $('.identity').css('visibility', 'hidden');
            } else {
                $('.identity').css('visibility', 'visible');
            }
            if (fragmentId === "menu" || fragmentId === "pickup" || fragmentId === "pickuphour" || fragmentId === "confirmpickup" || fragmentId === "readyforpickup" || fragmentId === "hospitalinfo" || fragmentId === "profile" || fragmentId === "therapy" || fragmentId === "notifications" || fragmentId === "guide" || fragmentId === "settings" || fragmentId === "calendar" || fragmentId === "examplenotifications" || fragmentId === "exampletherapies") {
                $('.nav').css('visibility', 'visible');
            } else {
                $('.nav').css('visibility', 'hidden');
            }
            $('.nav__link').css('font-weight', 'normal');
            $('.nav__link').css('font-size', '13px');
            if (fragmentId === "calendar") {
                $('.calendar').css('font-weight', '900');
                $('.calendar').css('font-size', '17px');
            }
            if (fragmentId === "pickup" || fragmentId === "pickuphour" || fragmentId === "confirmpickup" || fragmentId === "pickup" || fragmentId === "readyforpickup" || fragmentId === "hospitalinfo") {
                $('.pickup').css('font-weight', '900');
                $('.pickup').css('font-size', '17px');
            }
            if (fragmentId === "settings" || fragmentId === "guide" || fragmentId === "profile") {
                $('.settings').css('font-weight', '900');
                $('.settings').css('font-size', '17px');
            }

            if (fragmentId === "home" || fragmentId === "login") {
                document.title = 'Accesso - Unlock490';
            }
            if (fragmentId === "tutorial") {
                
            }
            if (fragmentId === "signup") {
                document.title = 'Iscrizione - Unlock490';
            }
            if (fragmentId === "emailphonesignup") {
                document.title = 'Dati aggiuntivi - Unlock490';
            }
            if (fragmentId === "verifyemail") {
                document.title = 'Verifica email - Unlock490';
            }
            if (fragmentId === "verifyphone") {
                document.title = 'Verifica cellulare - Unlock490';
            }
            if (fragmentId === "success") {
                document.title = 'Iscrizione terminata - Unlock490';
            }
            if (fragmentId === "newpassword") {
                document.title = 'Reimposta password - Unlock490';
            }
            if (fragmentId === "verifyemailforrecovery") {
                document.title = 'Reimposta password - Unlock490';
            }
            if (fragmentId === "verifyphoneforrecovery") {
                document.title = 'Reimposta password - Unlock490';
            }
            if (fragmentId === "choosenewpassword") {
                document.title = 'Reimposta password - Unlock490';
            }
            if (fragmentId === "recoverysuccess") {
                document.title = 'Reimposta password - Unlock490';
            }
            if (fragmentId === "pickup") {
                document.title = 'Ritiro - Unlock490';
            }
            if (fragmentId === "pickuphour") {
                document.title = 'Ritiro - Unlock490';
            }
            if (fragmentId === "confirmpickup") {
                document.title = 'Ritiro - Unlock490';
            }
            if (fragmentId === "readyforpickup") {
                document.title = 'Ritiro - Unlock490';
            }
            if (fragmentId === "hospitalinfo") {
                document.title = 'Informazioni sul centro ospedaliero - Unlock490';
            }
            if (fragmentId === "profile") {
                document.title = 'Profilo - Unlock490';
            }
            if (fragmentId === "guide") {
                document.title = 'Guida - Unlock490';
            }
            if (fragmentId === "settings") {
                document.title = 'Impostazioni - Unlock490';
            }
            if (fragmentId === "calendar") {
                document.title = 'Calendario - Unlock490';
            }
        });
    });
}

if(!location.hash) {
  location.hash = "#home";
}

loadContent();
window.addEventListener("hashchange", loadContent)

$(document).on("click touch", "#signup", function() {
    location.hash = "#signup";
    return false;
});

$(document).on("click touch", "#signupButton", function() {
	location.hash = "#emailphonesignup";
    return false;
});

$(document).on("click touch", "#emailphonesignupButton", function() {
	location.hash = "#verifyemail";
    return false;
});

$(document).on("click touch", "#verifyemailButton", function() {
	location.hash = "#verifyphone";
    return false;
});

$(document).on("click touch", "#verifyphoneButton", function() {
	location.hash = "#success";
    return false;
});

$(document).on("click touch", "#loginButton", function() {
	loggedin = true;
	if (pickupconfirmed) {
		$('#alert').html("<i class='fas fa-exclamation-circle'></i> Hai 1 terapia da ritirare a breve.");
	}
    if (pickupconfirmed) {
        location.hash = "#readyforpickup";
    } else {
        location.hash = "#pickup";
    }
    return false;
});

$(document).on("click touch", "#newpassword", function() {
	location.hash = "#newpassword";
    return false;
});

$(document).on("click touch", "#recoveryButton", function() {
	location.hash = "#verifyemailforrecovery";
    return false;
});

$(document).on("click touch", "#verifyemailforrecoveryButton", function() {
	location.hash = "#verifyphoneforrecovery";
    return false;
});

$(document).on("click touch", "#verifyphoneforrecoveryButton", function() {
	location.hash = "#choosenewpassword";
    return false;
});

$(document).on("click touch", "#choosepasswordButton", function() {
	location.hash = "#recoverysuccess";
    return false;
});

$(document).on("click touch", "#toLogin", function() {
	loggedin = false;
	location.hash = "#login";
    return false;
});

$(document).on("click touch", "#profile", function() {
	location.hash = "#profile";
    return false;
});

$(document).on("click touch", "#pickup", function() {
	if (pickupconfirmed) {
		location.hash = "#readyforpickup";
	} else {
		location.hash = "#pickup";
	}
	return false;
});

$(document).on("click touch", "#guide", function() {
	location.hash = "#guide";
    return false;
});

$(document).on("click touch", "#settings", function() {
	location.hash = "#settings";
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

$(document).on("click touch", "#filterAllDays", function() {
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

$(document).on("click touch", "#filterCurrentWeek", function() {
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

$(document).on("click touch", "#filterNextWeek", function() {
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

$(document).on("click touch", ".available-day", function() {
	location.hash = "#pickuphour";
    return false;
});

$(document).on("click touch", "#filterAllHours", function() {
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

$(document).on("click touch", "#filterAM", function() {
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

$(document).on("click touch", "#filterPM", function() {
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

$(document).on("click touch", ".available-hour", function() {
	location.hash = "#confirmpickup";
    return false;
});

$(document).on("click touch", "#confirmpickupButton", function() {
	pickupconfirmed = true;
	location.hash = "#readyforpickup";
    return false;
});

$(document).on("click touch", "#modifypickupButton", function() {
	location.hash = "#pickup";
    return false;
});

$(document).on("click touch", "#skipButton", function() {
	if (loggedin) {
		location.hash = "#settings";
	} else {
		location.hash = "#login";
	}
    return false;
});

$(document).on("click touch", "#closetutorial", function() {
	if (loggedin) {
		location.hash = "#settings";
	} else {
		location.hash = "#login";
	}
    return false;
});

$(document).on("click touch", "#infoButton", function() {
	location.hash = "#hospitalinfo";
    return false;
});

$(document).on("click touch", ".panel-title1", function() {
	if (rotated) {
		$(".panel-title1 a .fa-angle-down").css({"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)","-o-transform":"rotate(0deg)","transform":"rotate(0deg)"});
		rotated = false;
	} else {
		$(".panel-title1 a .fa-angle-down").css({"-webkit-transform":"rotate(180deg)","-moz-transform":"rotate(180deg)","-ms-transform":"rotate(180deg)","-o-transform":"rotate(180deg)","transform":"rotate(180deg)"});
		rotated = true;
	}
});

$(document).on("click touch", ".panel-title2", function() {
	if (rotated) {
		$(".panel-title2 a .fa-angle-down").css({"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)","-o-transform":"rotate(0deg)","transform":"rotate(0deg)"});
		rotated = false;
	} else {
		$(".panel-title2 a .fa-angle-down").css({"-webkit-transform":"rotate(180deg)","-moz-transform":"rotate(180deg)","-ms-transform":"rotate(180deg)","-o-transform":"rotate(180deg)","transform":"rotate(180deg)"});
		rotated = true;
	}
});

$(document).on("click touch", "#choosenewpassword", function() {
	location.hash = "#choosenewpassword";
    return false;
});

$(document).on("click touch", "#calendar", function() {
	location.hash = "#calendar";
    return false;
});