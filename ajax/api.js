$(document).ready(function() {
        $("#send").click(function() {
            var p = document.getElementsByName('phone');
            var tel = p[0].value;
            var re = /-/gi;
            var a = tel.replace(' ', '').replace(re, '').replace('(', '').replace(')', '');
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://cors-anywhere.herokuapp.com/http://myapi-project-api.7e14.starter-us-west-2.openshiftapps.com/auth",
                "type": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                },
                "processData": false,
                "data": "{\"username\":\"brian\",\"password\":\"Sbs10593sbs=\"}"
            }

            $.ajax(settings).done(function(response) {
                var data = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://cors-anywhere.herokuapp.com/http://myapi-project-api.7e14.starter-us-west-2.openshiftapps.com/api/send",
                    "type": "POST",
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": "JWT " + response['access_token'],
                        "Cache-Control": "no-cache"
                    },
                    "processData": false,
                    "data": "{\"phone\":\"" + a + "\",\"token\":\"527489385:AAHGBLrB9VQvTgvx3uflJSXGnZlGsrkfT9M\"}"
                }

                $.ajax(data).done(function(res) {
                    jQuery.noConflict();
                    $('#modal').modal('hide');
                });
            });
            return false;
        });

    });