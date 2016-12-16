$(document).ready(function(){
    console.log("IN");
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