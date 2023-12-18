function login_enabled(id) {
    obj = document.getElementById(id);
    obj.disabled = false;
};

function login_disabled(id, time) {
    if (isNaN(time) || time <= 0) {
        return;
    }
    obj = document.getElementById(id);
    obj.disabled = true;
    setTimeout("login_enabled('" + id + "');", time);
};