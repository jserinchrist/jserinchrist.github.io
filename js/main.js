




// map.fitBounds([
//      [50.16084, -7.60254],
//     [55.41479, 3.5376]
//     ]);



var mymap = L.map('mapid').setView([60.08583, -5.09092], 6);
L.tileLayer('https://api.mapbox.com/styles/v1/jserinchrist/ciqrajlqz0004bcnj7hpr1i11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianNlcmluY2hyaXN0IiwiYSI6ImNpcXI5cnBtaTAwZjZ0MG5oOTd1eHc2NGEifQ.rFquJoAlqVY41Ik4Mqfqmg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 14,
    minZoom:5,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(mymap);

          // var team = tableTeam
          // team.onclick = function() {
          //    map.setView(layer.getLatLng(), 14);
          //    layer.openPopup();
          // };

// mymap.once('focus', function(){
//     map.scrollWheelZoom.enable()
// });

//bounds not working - come back later to this
// var southWest = L.latLng(50.16084, -7.60254),
//     northEast = L.latLng(55.41479, 3.5376),
//     myBounds = L.latLngBounds(southWest, northEast);


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
var markerArs = L.marker([51.5549, -0.1084]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Arsenal</b><br>Emerites Stadium").openPopup();
});
var markerBorne = L.marker([50.7352, -1.8383]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>A.F.C. Bournemouth</b><br>Dean Court").openPopup();
});
var markerCRP = L.marker([51.3983, -0.0866]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Crystal Palace</b><br>Selhurst Park").openPopup();
});
var markerCHL = L.marker([51.4817, -0.1910]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Chelsea</b><br>Stamford Bridge").openPopup();
});
var markerEVR = L.marker([53.4388, -2.9663]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Everton</b><br>Goodison Park").openPopup();
});
var markerHUL = L.marker([53.7462, -0.3675]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Hull City</b><br>KCOM Stadium").openPopup();
});
var markerLCS = L.marker([52.6204, -1.1422]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Leicester City</b><br>King Power Stadium").openPopup();
});
var markerMDB = L.marker([54.5780, -1.2182]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Middlesbrough</b><br>Riverside Stadium").openPopup();
});
var markerSHM = L.marker([50.9055, -1.3912]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Southampton</b><br>St Mary's Stadium").openPopup();
});
var markerSTK = L.marker([52.9881, -2.1766]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Stoke City</b><br>Bet365 Stadium").openPopup();
});
var markerSUN = L.marker([54.9146, -1.3884]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Sunderland</b><br>Stadium of Light").openPopup();
});
var markerWAT = L.marker([51.6499, -0.4013]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Watford</b><br>Vicarage Road").openPopup();
});
var markerWBA = L.marker([52.5090, -1.9639]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>West Bromwich Albion</b><br>The Hawthorns").openPopup();
});
var markerWHU = L.marker([51.3219, -0.0059]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>West Ham United</b><br>Olympic Stadium").openPopup();
});
var markerBRN = L.marker([53.7890, -2.2302]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Burnley</b><br>Turf Moor").openPopup();
});

markerTot.bindPopup("<b>Tottenham</b><br>White Heart Lane").openPopup();
markerManU.bindPopup("<b>Manchester United</b><br>Old Trafford").openPopup();
markerManC.bindPopup("<b>Manchester City</b><br>Etihad Stadium").openPopup();
markerManC._icon.id="manC";
markerLvp.bindPopup("<b>Liverpool</b><br>Anfield").openPopup();
markerSwn.bindPopup("<b>Swansea City</b><br>Liberty Stadium").openPopup();
markerArs.bindPopup("<b>Arsenal</b><br>Emerites Stadium").openPopup();
markerBorne.bindPopup("<b>AFC Bournemouth</b><br>Dean Court").openPopup();
markerCRP.bindPopup("<b>Crystal Palace</b><br>Selhurst Park").openPopup();
markerCHL.bindPopup("<b>Chelsea</b><br>Stamford Bridge").openPopup();
markerEVR.bindPopup("<b>Everton</b><br>Goodison Park").openPopup();
markerHUL.bindPopup("<b>Hull City</b><br>KCOM Stadium").openPopup();
markerLCS.bindPopup("<b>Leicester City</b><br>King Power Stadium").openPopup();
markerMDB.bindPopup("<b>Middlesbrough</b><br>Riverside Stadium").openPopup();
markerSHM.bindPopup("<b>Southampton</b><br>St Mary's Stadium").openPopup();
markerSTK.bindPopup("<b>Stoke City</b><br>Bet365 Stadium").openPopup();
markerSUN.bindPopup("<b>Sunderland</b><br>Stadium of Light").openPopup();
markerWAT.bindPopup("<b>Watford</b><br>Vicarage Road").openPopup();
markerWBA.bindPopup("<b>West Bromwich Albion</b><br>The Hawthorns").openPopup();
markerWHU.bindPopup("<b>West Ham United</b><br>Olympic Stadium").openPopup();


// var markersManchester = new L.MarkerClusterGroup();
// markerManC.addLayer(L.marker([53.4808, -2.2426]));
// markerManU.addLayer(L.marker([53.4808, -2.2426]));
    
    

// // add more markers here...
// map.addLayer(markers);
//circle.bindPopup("I am a circle.");
//polygon.bindPopup("I am a polygon.");

// var popup = L.popup()
//     .setLatLng([51.5, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);

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

$("#arsenalFacts").hide()
$("#ars").on("click", function(){
    $("#arsenalFacts").slideToggle(300)

});

var stickyNavOffset = $('.main-nav').offset().top
$(window).on('scroll', function(){
    var scrolled = $(window).scrollTop()
    if(scrolled > stickyNavOffset){
        $('.main-nav').addClass('scrolled');
    }
    else{
        $('.main-nav').removeClass('scrolled');
    }
});
$('nav a').on('click', function(e) {
  e.preventDefault();
  var thisTarget = $(this).attr('href');
  var targetOffset = $(thisTarget).offset().top;
  $('body').animate({
    scrollTop: targetOffset -100
  }, 600);
});

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
