function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(28.47, 77.48),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
<div id="map" style="width:400px;height:400px;background:blue">
 <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDj8oS9v6hOcfCNc3egz-p-uemDqsubjiw&callback=initMap"
  type="text/javascript"></script>
<script src="map.js"></script></div>