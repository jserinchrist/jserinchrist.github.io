

var mymap = L.map('mapid').setView([50.9090, -2.1639], 6);
L.tileLayer('https://api.mapbox.com/styles/v1/jserinchrist/ciqrajlqz0004bcnj7hpr1i11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianNlcmluY2hyaXN0IiwiYSI6ImNpcXI5cnBtaTAwZjZ0MG5oOTd1eHc2NGEifQ.rFquJoAlqVY41Ik4Mqfqmg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 14,
    minZoom:5,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(mymap);

// mymap.once('focus', function(){
//     map.scrollWheelZoom.enable()
// });




var markerTOT = L.marker([51.6032, -0.0657]).addTo(mymap).on('mouseover', function(evt){
    evt.target.bindPopup("<b>Tottenham</b><br>White Heart Lane").openPopup()
});    
var markerLVP = L.marker([53.4308, -2.9608]).addTo(mymap).on('mouseover', function (evt){
    markerLVP.bindPopup("<b>Liverpool</b><br>Anfield").openPopup();
   });
var markerSWC = L.marker([51.6427, -3.9346]).addTo(mymap).on('mouseover', function(evt){
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

markerTOT.bindPopup("<b>Tottenham</b><br>White Heart Lane").openPopup();
markerManU.bindPopup("<b>Manchester United</b><br>Old Trafford").openPopup();
markerManC.bindPopup("<b>Manchester City</b><br>Etihad Stadium").openPopup();
markerManC._icon.id="manC";
markerLVP.bindPopup("<b>Liverpool</b><br>Anfield").openPopup();
markerSWC.bindPopup("<b>Swansea City</b><br>Liberty Stadium").openPopup();
markerArs.bindPopup("<b>Arsenal</b><br>Emerites Stadium").openPopup();
markerBRN.bindPopup("<b>Burnley</b><br>Turf Moor").openPopup();
markerWHU.bindPopup("<b>West Ham United</b><br>Olympic Stadium").openPopup();
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


//When a user hovers over a point on the map: 
    //the popup will show
    //the corresponding row in the table will get the "highlighted" class added to it
//When the user clicks on a point on the map:
    //the map will zoom to level 10
    //the map will center on the point on the map
//(?!)When the user clicks again on the point (after it is already zoomed and centered) the map will reset

//When the user hovers over a row on the table
    //the row on the table will get the "highlighted" class added to it
    //the popup for the corresponding point on the map will appear
//When the user clicks on a row on the map
    //the map will zoom to level 10
    //the map will center over the corresponding point

//ARSENAL INTERACTIONS
$(markerArs).click(function(){
    mymap.setView([51.5549, -0.1084], 10);
});

$(markerArs).hover(function(){
    $("#arsrow").addClass("highlight");
    }, function(){
    $("#arsrow").removeClass("highlight");
});

$("#arsrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerArs.bindPopup("<b>Arsenal</b><br>Emerites Stadium").openPopup();
    }
});

$("#arsrow").click(function(){
       $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
    mymap.setView([51.5549, -0.1084], 10);
    markerArs.bindPopup("<b>Arsenal</b><br><em>Victoria Concordia Crescit, Victory Through Harmony</em><br><b>Founded:</b> 1886<br><b>Stadium:</b> Emirates Stadium<br><b>Manager:</b> Arsene Wenger<br><b>Nicknames:</b> The Gunners"
).openPopup();
});

//BOURNEMOUTH INTERACTIONS
$(markerBorne).click(function(){
    mymap.setView([50.7352, -1.8383], 10);
});

$(markerBorne).hover(function(){
    $("#bournerow").addClass("highlight");
    }, function(){
    $("#bournerow").removeClass("highlight");
});

$("#bournerow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerBorne.bindPopup("<b>AFC Bournemouth</b><br>Dean Court").openPopup();
    }
});
$("#bournerow").click(function(){
       $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
mymap.setView([50.7352, -1.8383], 10);
    markerBorne.bindPopup("<b>AFC Bournemouth</b><br><em>Together, Anything Is Possible</em><br><b>Founded:</b> 1899<br><b>Stadium:</b> Dean Court<br><b>Manager:</b> Eddie Howe<br><b>Nicknames:</b> The Cherries"
).openPopup();
});

//BURNLEY INTERACTIONS
$(markerBRN).click(function(){
    mymap.setView([53.7890, -2.2302], 10);
});

$(markerBRN).hover(function(){
    $("#brnrow").addClass("highlight");
    }, function(){
    $("#brnrow").removeClass("highlight");
});

$("#brnrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerBRN.bindPopup("<b>Burnley</b><br>Turf Moor").openPopup();
    }
});
$("#brnrow").click(function(){
       $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
mymap.setView([53.7890, -2.2302], 10);
markerBRN.bindPopup("<b>Burnley</b><br><b>Founded:</b> 1882<br><b>Stadium:</b> Turf Moor<br><b>Manager:</b> Sean Dyche<br><b>Nicknames:</b> The Clarets").openPopup();
});

//CHELSEA INTERACTIONS

$(markerCHL).click(function(){
    mymap.setView([51.4817, -0.1910], 10)
});

$(markerCHL).hover(function(){
    $("#chlrow").addClass("highlight");
    }, function(){
    $("#chlrow").removeClass("highlight");
});

$("#chlrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerCHL.bindPopup("<b>Chelsea</b><br>Stamford Bridge").openPopup();
    }
});
$("#chlrow").click(function(){
       $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
mymap.setView([51.4817, -0.1910], 10);
markerCHL.bindPopup("<b>Chelsea</b><br><b>Founded:</b> 1905<br><b>Stadium:</b> Stamford Bridge<br><b>Manager:</b> Antonio Conte<br><b>Nicknames:</b> The Blues, The Pensioners"
).openPopup();
});

//CRYSTAL PALACE INTERACTIONS
$(markerCRP).click(function(){
    mymap.setView([51.3983, -0.0866], 10)
});
$(markerCRP).hover(function(){
    $("#crprow").addClass("highlight");
    }, function(){
    $("#crprow").removeClass("highlight");
});
$("#crprow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerCRP.bindPopup("<b>Crystal Palace</b><br>Selhurst Park").openPopup();
    }
});
    $("#crprow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([51.3983, -0.0866], 10);
        markerCRP.bindPopup("<b>Crystal Palace</b><br><b>Founded:</b> 1905<br><b>Stadium:</b> Selhurst Park<br><b>Manager:</b> Alan Pardew<br><b>Nicknames:</b> The Eagles, The Glaziers"
).openPopup();
});

//EVERTON INTERACTIONS

$(markerEVR).click(function(){
    mymap.setView([53.4388, -2.9663], 10)
});
$(markerEVR).hover(function(){
    $("#evrrow").addClass("highlight");
    }, function(){
    $("#evrrow").removeClass("highlight");
});
$("#evrrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerEVR.bindPopup("<b>Everton</b><br>Goodison Park").openPopup();
    }
});
    $("#evrrow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([53.4388, -2.9663], 10);
        markerEVR.bindPopup("<b>Everton</b><br><em>Nils Satis Nisi Optimum - Nothing but the best is good enough</em><br><b>Founded:</b> 1878<br><b>Stadium:</b> Goodison Park<br><b>Manager:</b> The Toffees, The Blues<br><b>Nicknames:</b> Ronald Koeman"
).openPopup();
});


//HULL INTERACTIONS
$(markerHUL).click(function(){
    mymap.setView([53.7462, -0.3675], 10)
});
$(markerHUL).hover(function(){
    $("#hulrow").addClass("highlight");
    }, function(){
    $("#hulrow").removeClass("highlight");
});
$("#hulrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerHUL.bindPopup("<b>Hull City</b><br>KCOM Stadium").openPopup();
    }
});
    $("#hulrow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([53.7462, -0.3675], 10);
        markerHUL.bindPopup("<b>Hull City</b><br><b>Founded:</b> 1904<br><b>Stadium:</b> KCOM Stadium<br><b>Manager:</b> Vacant<br><b>Nicknames:</b> The Tigers"
).openPopup();
});

//LEICESTER INTERACTIONS
$(markerLCS).click(function(){
    mymap.setView([52.6204, -1.1422], 10)
});
$(markerLCS).hover(function(){
    $("#lcsrow").addClass("highlight");
    }, function(){
    $("#lcsrow").removeClass("highlight");
});
$("#lcsrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerLCS.bindPopup("<b>Leicester City</b><br>King Power Stadium").openPopup();
    }
});
    $("#lcsrow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([52.6204, -1.1422], 10);
        markerLCS.bindPopup("<b>Leicester City</b><br><b>Founded:</b> 1884<br><b>Stadium:</b> King Power Stadium<br><b>Manager:</b> Claudio Ranieri<br><b>Nicknames:</b> The Foxes"
).openPopup();
});

//LIVERPOOL INTERACTIONS

$(markerLVP).click(function(){
    mymap.setView([53.4308, -2.9608], 10)
});
$(markerLVP).hover(function(){
    $("#lvprow").addClass("highlight");
    }, function(){
    $("#lvprow").removeClass("highlight");
});
$("#lvprow").hover(function(){
    if (mymap.getZoom() <= 7) {
    markerLVP.bindPopup("<b>Liverpool</b><br>Anfield").openPopup();
    }
});
    $("#lvprow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([53.4308, -2.9608], 10);
        markerLVP.bindPopup("<b>Liverpool</b><br><em>You'll Never Walk Alone</em><br><b>Founded:</b> 1892<br><b>Stadium:</b> Anfield<br><b>Manager:</b> Jurgen Klopp<br><b>Nicknames:</b> The Reds"
).openPopup();
});

//MAN CITY INTERACTIONS
$(markerManC).click(function(){
    mymap.setView([53.4831, -2.2004], 10)
});
$(markerManC).hover(function(){
    $("#manCrow").addClass("highlight");
    }, function(){
    $("#manCrow").removeClass("highlight");
});
$("#manCrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerManC.bindPopup("<b>Manchester City</b><br>Etihad Stadium").openPopup();
    }
});
    $("#manCrow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([53.4831, -2.2004], 10);
        markerManC.bindPopup("<b>Manchester City</b><br><em>Superbia in Proelia - Pride in Battle</em><br><b>Founded:</b> 1894<br><b>Stadium:</b> Etihad Stadium<br><b>Manager:</b> Pep Guardiola<br><b>Nicknames:</b> City, The Citizens, The Sky Blues"
).openPopup();
});

//MAN U INTERACTIONS

$(markerManU).click(function(){
    mymap.setView([53.4631, -2.2913], 10)
});
$(markerManU).hover(function(){
    $("#manUrow").addClass("highlight");
    }, function(){
    $("#manUrow").removeClass("highlight");
});
$("#manUrow").hover(function(){
    if (mymap.getZoom() <= 7) {
    markerManU.bindPopup("<b>Manchester United</b><br>Old Trafford").openPopup();
}
});
    $("#manUrow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([53.4631, -2.2913], 10);
        markerManU.bindPopup("<b>Manchester United</b><br><em>Youth, Courage, Greatness</em><br><b>Founded:</b> 1878<br><b>Stadium:</b> Old Trafford<br><b>Manager:</b> Jose Mourinho<br><b>Nicknames:</b> The Red Devils"
).openPopup();
});

//MIDDLESBROUGH INTERACTIONS

$(markerMDB).click(function(){
    mymap.setView([54.5780, -1.2182], 10)
});
$(markerMDB).hover(function(){
    $("#mdbrow").addClass("highlight");
    }, function(){
    $("#mdbrow").removeClass("highlight");
});
$("#mdbrow").hover(function(){
if (mymap.getZoom() <= 7) {
    markerMDB.bindPopup("<b>Middlesbrough</b><br>Riverside Stadium").openPopup();
}
});
    $("#mdbrow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([54.5780, -1.2182], 10);
        markerMDB.bindPopup("<b>Middlesbrough</b><br><b>Founded:</b> 1876<br><b>Stadium:</b> Riverside Stadium<br><b>Manager:</b> Aitor Karanka<br><b>Nicknames:</b> The Boro, Smoggies"
).openPopup();
});

//SOUTHHAMPTON INTERACTIONS
$(markerSHM).click(function(){
    mymap.setView([50.9055, -1.3912], 10)
});
$(markerSHM).hover(function(){
    $("#shmrow").addClass("highlight");
    }, function(){
    $("#shmrow").removeClass("highlight");
});
$("#shmrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerSHM.bindPopup("<b>Southampton</b><br>St Mary's Stadium").openPopup();
    }
});
    $("#shmrow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([50.9055, -1.3912], 10);
        markerSHM.bindPopup("<b>Southampton</b><br><b>Founded:</b> 1885<br><b>Stadium:</b> St Mary's Stadium<br><b>Manager:</b> Claude Puel<br><b>Nicknames:</b> The Saints").openPopup();
});

//STOKE INTERACTIONS

$(markerSTK).click(function(){
    mymap.setView([52.9881, -2.1766], 10)
});
$(markerSTK).hover(function(){
    $("#stkrow").addClass("highlight");
    }, function(){
    $("#stkrow").removeClass("highlight");
});
$("#stkrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerSTK.bindPopup("<b>Stoke City</b><br>Bet365 Stadium").openPopup();
    }
});
    $("#stkrow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([52.9881, -2.1766], 10);
        markerSTK.bindPopup("<b>Stoke City</b><br><em>We March On</em><br><b>Founded:</b> 1863<br><b>Stadium:</b> Bet365 Stadium<br><b>Manager:</b> Mark Hughes<br><b>Nicknames:</b> The Potters"
).openPopup();
});

//SUNDERLAND ROW

$(markerSUN).click(function(){
    mymap.setView([54.9146, -1.3884], 10)
});
$(markerSUN).hover(function(){
    $("#sunrow").addClass("highlight");
    }, function(){
    $("#sunrow").removeClass("highlight");
});
$("#sunrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerSUN.bindPopup("<b>Sunderland</b><br>Stadium of Light").openPopup();
    }
});
    $("#sunrow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([54.9146, -1.3884], 10);
        markerSUN.bindPopup("<b>Sunderland</b><br><em>Consectatio Excellentiae - In Pursuit of Excellence</em><br><b>Founded:</b> 1879<br><b>Stadium:</b> Stadium of Light<br><b>Manager:</b> David Moyes<br><b>Nicknames:</b> The Black Cats"
).openPopup();
});

//SWANSEA INTERACTIONS

$(markerSWC).click(function(){
    mymap.setView([51.6427, -3.9346], 10)
});
$(markerSWC).hover(function(){

    $("#swcrow").addClass("highlight");
}, function(){
    $("#swcrow").removeClass("highlight");
});

$("#swcrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerSWC.bindPopup("<b>Swansea City</b><br>Liberty Stadium").openPopup();
    }
});
    $("#swcrow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([51.6427, -3.9346], 10);
        markerSWC.bindPopup("<b>Swansea City</b><br><b>Founded:</b> 1912<br><b>Stadium:</b> Liberty Stadium<br><b>Manager:</b> Francesco Guidolin<br><b>Nicknames:</b> The Swans"
).openPopup();
});

//TOTTENHAM INTERACTIONS

$(markerTOT).click(function(){
    mymap.setView([51.6032, -0.0657], 10)
});
$(markerTOT).hover(function(){
    $("#totrow").addClass("highlight");
    }, function(){
    $("#totrow").removeClass("highlight");
});
$("#totrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerTOT.bindPopup("<b>Tottenham</b><br>White Heart Lane").openPopup();
    }
});
    $("#totrow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([51.6032, -0.0657], 10);
        markerTOT.bindPopup("<b>Tottenham</b><br><em>Audere est Facere - To Dare Is to DO</em><b>Founded:</b> 1882<br><b>Stadium:</b> White Hart Lane<br><b>Manager:</b> Mauricio Pochettino<br><b>Nicknames:</b> Hotspurs, Spurs, The Lilywhites"
).openPopup();
});

//WATFORD INTERACTIONS

$(markerWAT).click(function(){
    mymap.setView([51.6499, -0.4013], 10)
});
$(markerWAT).hover(function(){
    $("#watrow").addClass("highlight");
    }, function(){
    $("#watrow").removeClass("highlight");
});
$("#watrow").hover(function(){
    if (mymap.getZoom() <= 7) {
        markerWAT.bindPopup("<b>Watford</b><br>Vicarage Road").openPopup();
    }
});
    $("#watrow").click(function(){
           $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([51.6499, -0.4013], 10);
        markerWAT.bindPopup("<b>Watford</b><b>Founded:</b> 1881<br><b>Stadium:</b> Vicarage Road<br><b>Manager:</b> Walter Mazzarri<br><b>Nicknames:</b> The Hornets, The Golden Boys, Yellow Army, The 'Orns").openPopup();
});

//WESTBROM INTERACTIONS

$(markerWBA).click(function(){
    mymap.setView([52.5090, -1.9639], 10)
});
$(markerWBA).hover(function(){
    $("#wbarow").addClass("highlight");
    }, function(){
    $("#wbarow").removeClass("highlight");
});
    $("#wbarow").hover(function(){
if (mymap.getZoom() <= 7) {
    markerWBA.bindPopup("<b>West Bromwich Albion</b><br>The Hawthorns").openPopup();
}
});
    $("#wbarow").click(function(){

        $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }
        mymap.setView([52.5090, -1.9639], 10);
        markerWBA.bindPopup("<b>West Bromwich Albion</b><br><em>Labor Omnia Vincit - Labour Conquers All Things</em><br><b>Founded:</b> 1878<br><b>Stadium:</b> The Hawthorns<br><b>Manager:</b> Tony Pulis<br><b>Nicknames:</b> The Baggies, The Throstles, Albion"
).openPopup();
});

//WESTHAM INTERACTIONS

$(markerWHU).click(function(){
    mymap.setView([51.3219, -0.0059], 10);
});
$(markerWHU).hover(function(){
    $("#whurow").addClass("highlight");
    }, function(){
    $("#whurow").removeClass("highlight");
});
    $("#whurow").hover(function(){
if (mymap.getZoom() <= 7) {
    markerWHU.bindPopup("<b>West Ham United</b><br>Olympic Stadium").openPopup();
}
});
    $("#whurow").click(function(){
        $(this).siblings().removeClass('activeRow');
        if ($(this).hasClass('activeRow')){
            $(this).removeClass('activeRow');
            mymap.setZoom(6);
            }
        else{
            $(this).addClass('activeRow');
        }

        mymap.setView([51.3219, -0.0059], 10);
        markerWHU.bindPopup("<b>West Ham United</b><br><b>Founded:</b> 1895<br><b>Stadium:</b> Olympic Stadium<br><b>Manager:</b> Slaven Bilic<br><b>Nicknames:</b> The Irons, The Hammers, The Academy of Football").openPopup();
});
    //<b>West Ham United</b><br><b>Founded:</b> XX<br><b>Stadium:</b> XX<br><b>Manager:</b> XX<br><b>Nicknames:</b> XX"





// $(markerArs).click(function(){
//     mymap.setView([51.5549, -0.1084], 10)
// });

// $(markerArs).hover(function(){
//     $("#arsrow").addClass("highlight");
//     }, function(){
//     $("#arsrow").removeClass("highlight");
// });

// $("#arsrow").hover(function(){
//     markerArs.bindPopup("<b>Arsenal</b><br>Emerites Stadium").openPopup();
// });
// $("#arsrow").click(function(){
// mymap.setView([51.5549, -0.1084], 10);
// });

$("tr").hover(function(){
    $(this).addClass('highlight');},
    function(){
        $(this).removeClass('highlight');
});

// $('#ars').on('click', funtion(){
//     mymap.setView([51.5549, -0.1084]), 14));
//              layer.openPopup();
// }



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

// function onMapClick(e) {
// 	alert("You clicked the map at " + e.latlng);
// }




// mymap.on('click', onMapClick);
// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

// mymap.on('click', onMapClick);

//when the user clicks the team's marker on the map
    //highlight the row of the team in the table

//$('leaflet-marker-icon').this.on('click' function(){
    
//function test(e){
    //console.log(this)
    //$('#manC').addClass('selected')
    //$('').addClass('highlight');
//}
// $('.leaflet-marker-icon').on('click', function(e) {
//    // Use the event to find the clicked element
//    var el = $(e.srcElement || e.target),
//        id = el.attr('id');
//        console.log(e.target)
//     alert('Here is the markers ID: ' + id + '. Use it as you wish.')
// });

function sortTable(){
    var tbl = document.getElementById("leagueTable").tBodies[0];
    var store = [];
    for(var i=0, len=tbl.rows.length; i<len; i++){
        var row = tbl.rows[i];
        var sortnr = parseFloat(row.cells[1].textContent || row.cells[1].innerText);
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

// $("#arsenalFacts").hide()
// $("#ars").on("click", function(){
//     $("#arsenalFacts").slideToggle(300)
//     });


//NAV INTERACTIONS
 // if ($(window).width() <= 700) {
 //        $('#navContent h1').css('visibility', 'visible');
 //   else{
 //    $('#navContent h1').css('visibility', 'hidden');
 //   }     
 //    });

var stickyNavOffset = $('.main-nav').offset().top
$(window).on('scroll', function(){
    var scrolled = $(window).scrollTop()
    

    if(scrolled > stickyNavOffset){
        $('.main-nav').addClass('scrolled'); 
    }
    else{
        $('.main-nav').removeClass('scrolled');
    }
    if(scrolled > stickyNavOffset -50){
        $('#navContent h1').css('visibility', 'visible'); 
    }
    else{
     $('#navContent h1').css('visibility', 'hidden');
    }
    });

$('.main-nav a').on('click', function(e) {
  e.preventDefault();
  var thisTarget = $(this).attr('href');
  var targetOffset = $(thisTarget).offset().top;
  $('body').animate({
    scrollTop: targetOffset -140
  }, 600);
  // if($(this).addClass('navclick'));
  // else($(this).removeClass('navclick'));
});

  $('nav a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('navclick');
        $(this).addClass('navclick');
    });

//NAV HOVER 
$('nav a').on('mouseover', function (){
    $(this).toggleClass('navhover');
});
$('nav a').on('mouseout', function (){
    $(this).toggleClass('navhover');
});

$('.main-nav > h1').hide();

//MOBILE NAV INTERACTIONS


var mblstickyNavOffset = $('#mobilnav').offset().top
$(window).on('scroll', function(){
    var scrolled = $(window).scrollTop()
    

    if(scrolled > mblstickyNavOffset){
        $('#mobilnav').addClass('scrolled'); 
    }
    else{
        $('#mobilnav').removeClass('scrolled');
    }
    });

$('#mobilnav a').on('click', function(e) {
  e.preventDefault();
  var thisTarget = $(this).attr('href');
  var targetOffset = $(thisTarget).offset().top;
  $('body').animate({
    scrollTop: targetOffset -75
  }, 600);
  $('#mobilnav').css('transform', 'translateY(-100%)');
  $('nav button').removeClass('btnclick');
  // $('#mobilenav').css('transform','translateY(-100%)')
  // if($(this).addClass('navclick'));
  // else($(this).removeClass('navclick'));
});

//BUTTON TRANSACTIONS:


$('nav button').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('btnclick');
        $('#mobilnav').css('transform', 'translateY(2%)');
    });

$('footer a').on('mouseover', function(){
    $(this).toggleClass('footerHover')
});
$('footer a').on('mouseout', function(){
    $(this).toggleClass('footerHover')
});


// $('nav button').click(function(e){
//     e.preventDefault();
//   $('#mobilnav').addClass('mobilnavActive');
// });

