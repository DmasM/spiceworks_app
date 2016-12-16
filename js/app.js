$(document).ready(function(){
    console.log("IN");
    var login = new SW.Login({appUid: "794c39f957150fded7e5e3d9b28ae657cbed44406c3a23aaf9f5815c32497532"});
    
    login.request('login').then(function(access_token){
        console.log(access_token);
    }, function(errors){
        console.log(errors);
    })

    var card = new SW.Card();
    var inventory = card.services('inventory');
    var environment = card.services('environment');

    environment.request('environment').then(function(data){
        console.log(data);
    });

    // inventory.request('devices').then(function(data){
    //     $.each(data.devices, function(index, device){
    //         $('#devicesLists').append('<p>' + device.name + '</p>');
    //     });
    // });
});