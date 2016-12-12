
  function post(from, to, departure, arrival, train, route) {

    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "/Map");

    var hiddenField1 = document.createElement("input");
    hiddenField1.setAttribute("type", "hidden");
    hiddenField1.setAttribute("name", "from");
    hiddenField1.setAttribute("value", from);
    form.appendChild(hiddenField1);

    var hiddenField2 = document.createElement("input");
    hiddenField2.setAttribute("type", "hidden");
    hiddenField2.setAttribute("name", "to");
    hiddenField2.setAttribute("value", to);
    form.appendChild(hiddenField2);

    var hiddenField3 = document.createElement("input");
    hiddenField3.setAttribute("type", "hidden");
    hiddenField3.setAttribute("name", "departure");
    hiddenField3.setAttribute("value", departure);
    form.appendChild(hiddenField3);

    var hiddenField4 = document.createElement("input");
    hiddenField4.setAttribute("type", "hidden");
    hiddenField4.setAttribute("name", "arrival");
    hiddenField4.setAttribute("value", arrival);
    form.appendChild(hiddenField4);

    var hiddenField5 = document.createElement("input");
    hiddenField5.setAttribute("type", "hidden");
    hiddenField5.setAttribute("name", "train");
    hiddenField5.setAttribute("value", train);
    form.appendChild(hiddenField5);

    var hiddenField6 = document.createElement("input");
    hiddenField6.setAttribute("type", "hidden");
    hiddenField6.setAttribute("name", "route");
    hiddenField6.setAttribute("value", route);
    form.appendChild(hiddenField6);

    document.body.appendChild(form);
    form.submit();
  }

  function logout() {
    deleteCookie("validLogin");
    deleteCookie("username");
    deleteCookie("firstname");
    deleteCookie("lastname");
  }

  function writeLoginInformation(username, fname, lname) {
      document.cookie = "validLogin=true";
      document.cookie = "username=" + username;
      document.cookie = "firstname=" + fname;
      document.cookie = "lastname=" + lname;
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
    } else if (url.indexOf("Search") != -1) {
      return 0;
    } else if (url.indexOf("Map") != -1) {
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
