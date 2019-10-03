$(document).ready(function() {
  firebase.initializeApp({
    apiKey: "AIzaSyCj4mkklxC3e9Q_LVWporzs2R3auoyngOI",
    authDomain: "*",
    projectId: "intuition2019-303d1"
    // databaseURL: "https://x-shore-218708.firebaseio.com/"
  });
  $(() => {
    $(".form-group").each((i, e) => {
      $(".form-control-input", e)
        .focus(function() {
          e.classList.add("not-empty");
        })
        .blur(function() {
          this.value === "" ? e.classList.remove("not-empty") : null;
        });
    });
  });
  $("#dob").datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    widgetPositioning: {
      horizontal: "auto",
      vertical: "bottom"
    }
  });
  $("select").on("click", function() {
    $(this)
      .parent(".select-box")
      .toggleClass("open");
  });

  $(document).mouseup(function(e) {
    var container = $(".select-box");
    if (container.has(e.target).length === 0) {
      container.removeClass("open");
    }
  });
  $("select").on("change", function() {
    var selection = $(this)
        .find("option:selected")
        .text(),
      labelFor = $(this).attr("id"),
      label = $("[for='" + labelFor + "']");
    label.find(".label-desc").html(selection);
  });
  //   $('.select').val('');
});

function verifyAndRedirect() {
  var registerFormData = decodeURIComponent($("#registerForm").serialize());
  registerFormData = registerFormData.split("&");
  var registerFormJson = {};
  for (var i = 0; i < registerFormData.length; i++) {
    var currField = registerFormData[i].split("=");
    console.log(currField);
    if (
      i != registerFormData.length - 1 &&
      currField[0] != "If yes, what is your team name?"
    ) {
      if (currField[1] === "") {
        // toastr.error('Error','You haven\'t entered all details!')
        alert("You haven't entered all details!");
        return;
      }
    }
    registerFormJson[currField[0]] = currField[1];
  }
  var emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
  if (registerFormJson["E-mail"].search(emailRegex) == -1) {
    alert("enter a valid email");
    return;
  }
  var phoneRegex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/g;
  if (registerFormJson["Phone Number"].search(phoneRegex) == -1) {
    alert("enter a valid phone number");
    return;
  }
  if (registerFormJson["Are you taking part in a team?"] == "Yes") {
    if (registerFormJson["If yes, what is your team name?"] == "") {
      alert("please enter team name");
      return;
    }
  }
  console.log("data entered correctly");
  storeFirebase(registerFormJson);
  // $("#registerForm").val("");
}

async function storeFirebase(registerData) {
  await firebase
    .firestore()
    .collection("registrationData")
    .add(registerData);
  window.location.href = "./success.html";
}
