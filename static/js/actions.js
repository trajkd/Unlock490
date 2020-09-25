$(document).on("click touch", "#sidebarCollapse", function() {
    $('#sidebar').toggleClass('active');
});

$(window).on('load', function() {

    $("#loader").show();
    cookie_value = getCookie("userid")
    if (cookie_value !== "") {
        $.ajax({
            url: '/checklogin',
            dataType: 'json',
            method: 'POST',
            data: {username: cookie_value.split("|")[0], password: cookie_value.split("|")[1]},
            success: function(res) {
                $("#loader").hide();
                if (!res.redirectToLogin) {
                    if (pickupconfirmed) {
                        location.hash = "#readyforpickup";
                    } else {
                        location.hash = "#pickup";
                    }
                } else {
                    location.hash = "#tutorial";
                    $.ajax($('.container').load("/tutorial")).done(function() {
                        $("#loader").hide();
                    });
                }
                return false;
            }
        });
    } else {
        location.hash = "#tutorial";
        $.ajax($('.container').load("/tutorial")).done(function() {
            $("#loader").hide();
        });
    }
});

var pickupconfirmed = false;
var rotated1 = false;
var rotated2 = false;
var rotated3 = false;
var username, email, phone;

function getCookie(cookiename) 
  {
  // Get name followed by anything except a semicolon
  var cookiestring=RegExp(cookiename+"=[^;]+").exec(document.cookie);
  // Return everything after the equal sign, or an empty string if the cookie name not found
  return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
  }

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
                document.title = 'Tutorial - Unlock490';
            }
            if (fragmentId === "signup") {
                document.title = 'Iscrizione - Unlock490';

                $("#signupForm").validate({
                    rules: {
                        username: {
                            required: true
                        },
                        password: {
                            required: true,
                            minlength: 8
                        },
                        verify: {
                            required: true,
                            equalTo: "#password"
                        }
                    },
                    messages: {
                        username: {
                            required: "Inserisci il tuo username"
                        },
                        password: {
                            required: "Inserisci una password",
                            minlength: "Inserisci una password di almeno 8 caratteri"
                        },
                        verify: {
                            required: "Ripeti la password",
                            equalTo: "Le password non coincidono"
                        }
                    }
                });
            }
            if (fragmentId === "emailphonesignup") {
                document.title = 'Dati aggiuntivi - Unlock490';

                $("#emailphonesignupForm").validate({
                    rules: {
                        email: {
                            required: true,
                            email: true
                        },
                        phone: {
                            required: true,
                            phone: true
                        }
                    },
                    messages: {
                        email: {
                            required: "Inserisci il tuo indirizzo email",
                            email: "Inserisci l'indirizzo email nel formato corretto"
                        },
                        phone: {
                            required: "Inserisci il tuo numero di cellulare",
                            phone: "Inserisci un numero di cellulare valido"
                        }
                    }
                });

                window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("emailphonesignupButton", {
                    'size': 'invisible',
                    'callback': function (recaptchaToken) {
                    email = document.getElementById('email').value;
                    $.ajax({
                        url: '/emailphonesignup',
                        dataType: 'json',
                        method: 'POST',
                        data: {username: username, phoneNumber: document.getElementById('phone').value, email: email, recaptchaToken: recaptchaToken},
                        beforeSend: function() {
                            if(!$("#emailphonesignupForm").valid()) {
                                return false;
                            }
                            $("#loader").show();
                        },
                        success: function(res) {
                            email = res.email;
                            phone = res.phone;
                            $("#loader").hide();
                            location.hash = "#verifyemail";
                            return false;
                        },
                        error: function(error) {
                            $("#loader").hide();
                            $("#messageModalContent").removeClass("alert-success").addClass("alert-danger");
                            $("#messageModalContent").html(error.responseText)
                            $("#messageModal").modal("show");
                        }
                    });
                  }
                });

                // render the rapchaVerifier. 
                window.recaptchaVerifier.render().then(function (widgetId) {
                  window.recaptchaWidgetId = widgetId;
                });
            }
            if (fragmentId === "verifyemail") {
                document.title = 'Verifica email - Unlock490';

                $("#email-awaiting-activation").html(email);
            }
            if (fragmentId === "verifyphone") {
                document.title = 'Verifica cellulare - Unlock490';

                $("#phone-awaiting-activation").html(phone);
            }
            if (fragmentId === "success") {
                document.title = 'Iscrizione terminata - Unlock490';
            }
            if (fragmentId === "newpassword") {
                document.title = 'Reimposta password - Unlock490';

                $("#recoveryForm").validate({
                    rules: {
                        username: {
                            required: true
                        },
                        cf: {
                            required: true
                        },
                        phone: {
                            required: true,
                            phone: true
                        }
                    },
                    messages: {
                        username: {
                            required: "Inserisci il tuo username"
                        },
                        cf: {
                            required: "Inserisci il tuo codice fiscale"
                        },
                        phone: {
                            required: "Inserisci il tuo numero di cellulare",
                            phone: "Inserisci un numero di cellulare valido"
                        }
                    }
                });
            }
            if (fragmentId === "verifyemailforrecovery") {
                document.title = 'Reimposta password - Unlock490';

                $("#email-awaiting-verification").html(email);
            }
            if (fragmentId === "verifyphoneforrecovery") {
                document.title = 'Reimposta password - Unlock490';

                $("#phone-awaiting-verification").html(phone);
            }
            if (fragmentId === "choosenewpassword") {
                document.title = 'Reimposta password - Unlock490';

                $("#choosepasswordForm").validate({
                    rules: {
                        password: {
                            required: true,
                            minlength: 8
                        },
                        password2: {
                            required: true,
                            equalTo: "#password"
                        }
                    },
                    messages: {
                        password: {
                            required: "Inserisci una password",
                            minlength: "Inserisci una password di almeno 8 caratteri"
                        },
                        password2: {
                            required: "Ripeti la password",
                            equalTo: "Le password non coincidono"
                        }
                    }
                });
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
                if (pickupconfirmed) {
                    $('#alert').html("<i class='fas fa-exclamation-circle'></i> Hai 1 terapia da ritirare a breve.");
                }
            }
            if (fragmentId === "hospitalinfo") {
                document.title = 'Informazioni sul centro ospedaliero - Unlock490';
            }
            if (fragmentId === "profile") {
                document.title = 'Profilo - Unlock490';

                cookie_value = getCookie("userid");
                $('#display-username').html(cookie_value.split("|")[0]);
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
    username = $("#username").val();
    $.ajax({
        url: '/signup',
        dataType: 'json',
        method: 'POST',
        data: {username: username, password: $("#password").val(), verify: $("#verify").val()},
        beforeSend: function() {
            if(!$("#signupForm").valid()) {
                return false;
            }
            $("#loader").show();
        },
        success: function(res) {
            $("#loader").hide();
            location.hash = "#emailphonesignup";
            return false;
        },
        error: function(error) {
            $("#loader").hide();
            $("#messageModalContent").removeClass("alert-success").addClass("alert-danger");
            $("#messageModalContent").html(error.responseText)
            $("#messageModal").modal("show");
        }
    });
});

$(document).on("click touch", "#emailphonesignupButton", function() {
	location.hash = "#verifyemail";
    return false;
});

$(document).on("click touch", "#verifyemailButton", function() {
    $("#loader").show();
    $.ajax({
        url: '/verifyemail',
        dataType: 'json',
        method: 'POST',
        data: {username: username, email: email, email_code_input: document.getElementById('emailcode').value},
        success: function(res) {
            $("#loader").hide();
            location.hash = "#verifyphone";
        },
        error: function(error) {
            $("#loader").hide();
            $("#messageModalContent").removeClass("alert-success").addClass("alert-danger");
            $("#messageModalContent").html(error.responseText)
            $("#messageModal").modal("show");
        }
    });
    return false;
});

$(document).on("click touch", "#verifyphoneButton", function() {
    $("#loader").show();
    $.ajax({
        url: '/verifyphone',
        dataType: 'json',
        method: 'POST',
        data: {username: username, phone: phone, sms_code_input: document.getElementById('smscode').value},
        success: function(res) {
            $("#loader").hide();
            location.hash = "#success";
        },
        error: function(error) {
            $("#loader").hide();
            $("#messageModalContent").removeClass("alert-success").addClass("alert-danger");
            $("#messageModalContent").html(error.responseText)
            $("#messageModal").modal("show");
        }
    });
    return false;
});

$(document).on("click touch", "#loginButton", function() {

    $.ajax({
        url: '/login',
        dataType: 'json',
        method: 'POST',
        data: {username: document.getElementById('username').value, password: document.getElementById('password').value},
        success: function(res) {
            $("#loader").hide();
            if (pickupconfirmed) {
                location.hash = "#readyforpickup";
            } else {
                location.hash = "#pickup";
            }
        },
        error: function(error) {
            $("#loader").hide();
            $("#messageModalContent").removeClass("alert-success").addClass("alert-danger");
            $("#messageModalContent").html(error.responseText)
            $("#messageModal").modal("show");
        }
    });

    return false;
});

$(document).on("click touch", "#newpassword", function() {
    location.hash = "#newpassword";
    return false;
});

$(document).on("click touch", "#recoveryButton", function() {
    $.ajax({
        url: '/newpassword',
        dataType: 'json',
        method: 'POST',
        data: {username: document.getElementById('username').value, cf: document.getElementById('cf').value, phone: document.getElementById('phone').value},
        beforeSend: function() {
            if(!$("#recoveryForm").valid()) {
                return false;
            }
            $("#loader").show();
        },
        success: function(res) {
            username = document.getElementById('username').value;
            phone = document.getElementById('phone').value;
            email = res.email;
            $("#loader").hide();
            location.hash = "#verifyemailforrecovery";
        },
        error: function(error) {
            $("#loader").hide();
            $("#messageModalContent").removeClass("alert-success").addClass("alert-danger");
            $("#messageModalContent").html(error.responseText)
            $("#messageModal").modal("show");
        }
    });
    return false;
});

$(document).on("click touch", "#verifyemailforrecoveryButton", function() {
    $("#loader").show();
    $.ajax({
        url: '/verifyemailforrecovery',
        dataType: 'json',
        method: 'POST',
        data: {username: username, email_code_input: document.getElementById('emailcode').value},
        success: function(res) {
            $("#loader").hide();
            location.hash = "#verifyphoneforrecovery";
        },
        error: function(error) {
            $("#loader").hide();
            $("#messageModalContent").removeClass("alert-success").addClass("alert-danger");
            $("#messageModalContent").html(error.responseText)
            $("#messageModal").modal("show");
        }
    });
    return false;
});

$(document).on("click touch", "#verifyphoneforrecoveryButton", function() {
    $("#loader").show();
    $.ajax({
        url: '/verifyphoneforrecovery',
        dataType: 'json',
        method: 'POST',
        data: {username: username, sms_code_input: document.getElementById('smscode').value},
        success: function(res) {
            $("#loader").hide();
            location.hash = "#choosenewpassword";
        },
        error: function(error) {
            $("#loader").hide();
            $("#messageModalContent").removeClass("alert-success").addClass("alert-danger");
            $("#messageModalContent").html(error.responseText)
            $("#messageModal").modal("show");
        }
    });
    return false;
});

$(document).on("click touch", "#choosepasswordButton", function() {
    $("#loader").show();
    cookie_value = getCookie("userid")
    if (cookie_value !== "") {
        $.ajax({
            url: '/choosenewpassword',
            dataType: 'json',
            method: 'POST',
            data: {username: getCookie("userid").split("|")[0], oldpassword: getCookie("userid").split("|")[1], password: document.getElementById('password').value, verify: document.getElementById('password2').value},
            beforeSend: function() {
                if(!$("#choosepasswordForm").valid()) {
                    return false;
                }
                $("#loader").show();
            },
            success: function(res) {
                $("#loader").hide();
                location.hash = "#recoverysuccess";
            },
            error: function(error) {
                $("#loader").hide();
                $("#messageModalContent").removeClass("alert-success").addClass("alert-danger");
                $("#messageModalContent").html(error.responseText)
                $("#messageModal").modal("show");
            }
        });
    } else {
        $.ajax({
            url: '/choosenewpassword',
            dataType: 'json',
            method: 'POST',
            data: {username: username, password: document.getElementById('password').value, verify: document.getElementById('password2').value},
            beforeSend: function() {
                if(!$("#choosepasswordForm").valid()) {
                    return false;
                }
                $("#loader").show();
            },
            success: function(res) {
                $("#loader").hide();
                location.hash = "#recoverysuccess";
            },
            error: function(error) {
                $("#loader").hide();
                $("#messageModalContent").removeClass("alert-success").addClass("alert-danger");
                $("#messageModalContent").html(error.responseText)
                $("#messageModal").modal("show");
            }
        });
    }
    return false;
});

$(document).on("click touch", "#toLogin", function() {
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
    $("#loader").show();
    cookie_value = getCookie("userid")
    if (cookie_value !== "") {
        $.ajax({
            url: '/checklogin',
            dataType: 'json',
            method: 'POST',
            data: {username: cookie_value.split("|")[0], password: cookie_value.split("|")[1]},
            success: function(res) {
                $("#loader").hide();
                if (!res.redirectToLogin) {
                    location.hash = "#settings";
                } else {
                    location.hash = "#login";
                }
                return false;
            }
        });
    } else {
        location.hash = "#login";
    }
    return false;
});

$(document).on("click touch", "#closetutorial", function() {
	$("#loader").show();
    cookie_value = getCookie("userid")
    if (cookie_value !== "") {
        $.ajax({
            url: '/checklogin',
            dataType: 'json',
            method: 'POST',
            data: {username: cookie_value.split("|")[0], password: cookie_value.split("|")[1]},
            success: function(res) {
                $("#loader").hide();
                if (!res.redirectToLogin) {
                    location.hash = "#settings";
                } else {
                    location.hash = "#login";
                }
                return false;
            }
        });
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
	if (rotated1) {
		$(".panel-title1 a .fa-angle-down").css({"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)","-o-transform":"rotate(0deg)","transform":"rotate(0deg)"});
		rotated1 = false;
	} else {
		$(".panel-title1 a .fa-angle-down").css({"-webkit-transform":"rotate(180deg)","-moz-transform":"rotate(180deg)","-ms-transform":"rotate(180deg)","-o-transform":"rotate(180deg)","transform":"rotate(180deg)"});
		rotated1 = true;
	}
});

$(document).on("click touch", ".panel-title2", function() {
	if (rotated2) {
		$(".panel-title2 a .fa-angle-down").css({"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)","-o-transform":"rotate(0deg)","transform":"rotate(0deg)"});
		rotated2 = false;
	} else {
		$(".panel-title2 a .fa-angle-down").css({"-webkit-transform":"rotate(180deg)","-moz-transform":"rotate(180deg)","-ms-transform":"rotate(180deg)","-o-transform":"rotate(180deg)","transform":"rotate(180deg)"});
		rotated2 = true;
	}
});

$(document).on("click touch", ".panel-title3", function() {
    if (rotated3) {
        $(".panel-title3 a .fa-angle-down").css({"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)","-o-transform":"rotate(0deg)","transform":"rotate(0deg)"});
        rotated3 = false;
    } else {
        $(".panel-title3 a .fa-angle-down").css({"-webkit-transform":"rotate(180deg)","-moz-transform":"rotate(180deg)","-ms-transform":"rotate(180deg)","-o-transform":"rotate(180deg)","transform":"rotate(180deg)"});
        rotated3 = true;
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

$(document).on("click touch", "#logout", function() {
    document.cookie = "userid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.hash = "#login";
    return false;
});


$(document).on("click touch", ".list-group-item", function() {
    $(this).parent().children().removeClass("active-item");
    $(this).addClass("active-item");
});