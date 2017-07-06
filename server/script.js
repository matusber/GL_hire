

$(document).ready(function(){ 
$.ajax({
	url: "http://localhost:8081/api/auth/login",
        contentType: "application/json",
	method: "POST",
        data: '{"userName": "user1", "password": "secret"}'
})
.done(function(data) {
	console.log(data)
})


});

