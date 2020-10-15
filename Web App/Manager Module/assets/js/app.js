$(document).ready(function () {
  $("[id='vehicle-info-card']").click(function (e) {
    $(".vehicle-info-card").removeClass("vehicle-info-card-active");

    $(e.currentTarget).addClass("vehicle-info-card-active");
  });

  // //this code hides and shows the horizontal progress bar of parcel when user click view details button on vehicle info Card\
  $("[id='view-details']").click(function (e) {
    let el = $(e.currentTarget).parent().next();
    if (el.hasClass("hidden")) {
      el.removeClass("hidden");
    } else {
      el.addClass("hidden");
    }
  });

  // this code hides and show the status table when load status btn is clicked
  let f = -1;
  $("#load-status-btn").click(function () {
    if (f == -1) $("#load-status-btn").text("HIDE STATUS");
    else $("#load-status-btn").text("LOAD STATUS");

    f *= -1;
    $("#status-table").toggle(1000);
  });

  // this code hides the confirmation-box and shows the confirmed box when the user click yes button
  $("#yes").click(function () {
    $("#confirmation-box").hide();
    $("#confirmed-box").show();
  });

  // this code hides the confirmation-box and shows the rejected-message-box when the user click no button

  $("#no").click(function () {
    $("#confirmation-box").hide();
    $("#rejected-message-box").show();
  });

  // this code hides  the rejected-message-box and show rejection box when the user click submit button

  $("#submit-message").click(function () {
    $("#rejected-message-box").hide();
    $("#rejection-box").show();
  });
});

var u = document.getElementById("nme");
u.innerHTML = "Mahesh";

var z = document.getElementById("clock");
z.innerHTML = "3:50pm";
var q = document.getElementById("date");
q.innerHTML = "6th Aug 2020";
var p = document.getElementById("add");
p.innerHTML = "Warehouse,Gurgaon";
