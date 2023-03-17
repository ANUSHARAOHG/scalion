$(function () {
    $("#ptype").change(function () {
        if ($(this).val() == "br") {
            $("#dvptype").show();
        } else {
            $("#dvptype").hide();
        }
    });
});