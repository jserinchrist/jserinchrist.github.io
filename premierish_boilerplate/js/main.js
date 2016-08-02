


// var southWest = L.latLng(50.16084, -7.60254),
//     northEast = L.latLng(55.41479, 3.5376),
//     bounds = L.latLngBounds(southWest, northEast);

// map.fitBounds([
//      [50.16084, -7.60254],
//     [55.41479, 3.5376]
    
// ]);

var mymap = L.map('mapid').setView([52.86913, -1.97754], 6);
L.tileLayer('https://api.mapbox.com/styles/v1/jserinchrist/ciqrajlqz0004bcnj7hpr1i11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianNlcmluY2hyaXN0IiwiYSI6ImNpcXI5cnBtaTAwZjZ0MG5oOTd1eHc2NGEifQ.rFquJoAlqVY41Ik4Mqfqmg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(mymap);



var markerTot = L.marker([51.6032, -0.0657]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Tottenham</b><br>White Heart Lane").openPopup()
});    
var markerLvp = L.marker([53.4308, -2.9608]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Liverpool</b><br>Anfield").openPopup();
    });
var markerSwn = L.marker([51.6427, -3.9346]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Swansea City</b><br>Liberty Stadium").openPopup();
    });
var markerManU = L.marker([53.4631, -2.2913],{className:"manU"}).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Manchester United</b><br>Old Trafford").openPopup();
});
var markerManC = L.marker([53.4831, -2.2004]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Manchester City</b><br>Etihad Stadium").openPopup();
});


markerTot.bindPopup("<b>Tottenham</b><br>White Heart Lane").openPopup();
markerManU.bindPopup("<b>Manchester United</b><br>Old Trafford").openPopup();
markerManC.bindPopup("<b>Manchester City</b><br>Etihad Stadium").openPopup();
markerManC._icon.id="manC";
markerLvp.bindPopup("<b>Liverpool</b><br>Anfield").openPopup();
markerSwn.bindPopup("<b>Swansea City</b><br>Liberty Stadium").openPopup();

// var markersManchester = new L.MarkerClusterGroup();
// markerManC.addLayer(L.marker([53.4808, -2.2426]));
// markerManU.addLayer(L.marker([53.4808, -2.2426]));
    
    

// // add more markers here...
// map.addLayer(markers);
//circle.bindPopup("I am a circle.");
//polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

function onMapClick(e) {
	alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

//when the user clicks the team's marker on the map
    //highlight the row of the team in the table

//$('leaflet-marker-icon').this.on('click' function(){
    
//function test(e){
    //console.log(this)
    //$('#manC').addClass('selected')
    //$('').addClass('highlight');
//}
$('.leaflet-marker-icon').on('click', function(e) {
   // Use the event to find the clicked element
   var el = $(e.srcElement || e.target),
       id = el.attr('id');
       console.log(e.target)
    alert('Here is the markers ID: ' + id + '. Use it as you wish.')
});

function sortTable(){
    var tbl = document.getElementById("leagueTable").tBodies[0];
    var store = [];
    for(var i=0, len=tbl.rows.length; i<len; i++){
        var row = tbl.rows[i];
        var sortnr = parseFloat(row.cells[0].textContent || row.cells[0].innerText);
        if(!isNaN(sortnr)) store.push([sortnr, row]);
    }
    store.sort(function(x,y){
        return x[0] - y[0];
    });
    for(var i=0, len=store.length; i<len; i++){
        tbl.appendChild(store[i][1]);
    }
    store = null;
}
sortTable()
// function sortTable(){
//     var rows = $('#leagueTable tbody tr').get();
//     rows.sort(function(a, b) {
//     var A = $(a).children('td').eq(0).number();
//     var B = $(b).children('td').eq(0).number();
//     if(A < B) {
//             return -1;
//             }
//     if(A > B) {
//         return 1;
//     }
//     return 0;
//     });

//     $.each(rows, function(index, row) {
//         $('#leagueTable').children('tbody').prepend(row);
//         });
//     }
