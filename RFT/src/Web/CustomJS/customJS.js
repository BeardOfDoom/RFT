
  function logout() {
    deleteCookie("validLogin");
    deleteCookie("username");
  }

  function writeLoginInformation(username) {
      document.cookie = "validLogin=true";
      document.cookie = "username=" + username;
  }

  function deleteCookie(cookieName) {
    document.cookie = cookieName + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  function getCookie(cookieName) {
    var cookie = document.cookie.split(';');
    for (var i = 0; i < cookie.length; i++) {
        if (cookie[i].includes(cookieName)) return cookie[i].substring(cookie[i].indexOf("=") + 1);
    }
  }

  function setActiveLink() {
    var url = document.URL;
    if (url.indexOf("TrainsAndTickets") != -1) {
      $("#2").addClass('active');
    } else if (url.indexOf("Login") != -1) {
      $("#3").addClass('active');
    } else if (url.indexOf("Register") != -1) {
      $("#4").addClass('active');
    } else if (url.indexOf("Registration") != -1) {
      return 0;
    } else if (url.indexOf("Authentificate") != -1) {
      return 0;
    } else {
      $("#1").addClass('active');
    }
  }

  function Slider() {
    jQuery(document).ready(function ($) {

        var jssor_1_SlideoTransitions = [
          [{b:-1,d:1,o:-1},{b:0,d:1000,o:1}],
          [{b:1900,d:2000,x:-379,e:{x:7}}],
          [{b:1900,d:2000,x:-379,e:{x:7}}],
          [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:1000,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:1900,d:1600,x:-200,o:-1,e:{x:16}}]
        ];

        var jssor_1_options = {
          $AutoPlay: true,
          $SlideDuration: 3000,
          $Idle: 5000,
          $FillMode: 0,
          $PauseOnHover: 0,
          $SlideEasing: $Jease$.$OutQuint,
          $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: jssor_1_SlideoTransitions
          },
          $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
          },
          $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
          }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    });
  }
