function submitDetails(e) {
	$.post("http://localhost:8090/logon/staff", { "username": $('#username_in').val(), "password": $('#password_in').val() }, function (data, status) {
		if(status == 'success') window.location.replace("http://localhost:8090/views/usermanagement.html")
	});
}

$('#login').submit(function (e) {
	e.preventDefault();
	submitDetails(e);
})