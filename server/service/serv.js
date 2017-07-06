// JavaScript Document

$(document).ready(function() {
    $.ajax({
            url: "http://localhost:8081/api/auth/login",
            contentType: "application/json",
            method: "POST",
            data: '{"userName": "user1", "password": "secret"}'
        })
        .done(function(data) {
			console.log("Login request is succesfull...");
            console.log(data)

            $.ajax({
                    url: "http://localhost:8081/api/locations",
                    contentType: "application/json",
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + data.token
                    }
                })
                .done(function(data) {
					console.log("Get all locations is succesfull...");
                    console.log(data)
                })
        });
});
