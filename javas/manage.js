$(document).ready(function() {

var alamat="kategori";

$('#loading').show();
   var AmbilData;
   $.ajax({
      type : 'GET',
	  url : 'http://localhost/unik/GIS/hosting/kategori.php',
	  async: true,
  	  beforeSend: function(x) {
	     if(x && x.overrideMimeType) {
   		    x.overrideMimeType("application/j-son;charset=UTF-8");
   		 }
	  },
 	  dataType : 'json',
	  success : function(data){
	     AmbilData = data.items;
	     $('#loading').hide();
		 $('#tampilData').show();			
         var kode = [];
		 var nama = [];
		 var fungsi = [];
		 var alamat = [];
		 var image = [];
		 var sumbux = [];
		 var sumbuy = [];		 
		 var n=0;

		 $.each(AmbilData, function(index, loaddata) {
		    kode[n]=loaddata.id;
			nama[n]=loaddata.kategori;
			fungsi[n]=loaddata.fungsi;
			alamat[n]=loaddata.alamat;
			image[n]=loaddata.image;
			sumbux[n]=loaddata.x;
			sumbuy[n]=loaddata.y;
			 
			$('#nav').append(
			   '<li style="list-style-type:none;" ><ul><a href="#" onClick="test(\''+fungsi[n]+'\')">'+nama[n]+'</a></ul></li>'
			);
			$('#isiinfo').append(
			   '<div id="'+kode[n]+'" class="isiinfo" style="display:none;">'+nama[n]+
			   '<br /><div style="text-align:left;">'+fungsi[n]+'<br />'+alamat[n]+'</div><br /><img style="width:100%;" src="gonjong/'+image[n]+'" /></div>'
			);
			n++;
		 });	
		 
//============================================================================================
		 var myCenter=new google.maps.LatLng(-0.94299, 100.370622);

	     var mapProp = {center:myCenter, zoom:13, mapTypeId:google.maps.MapTypeId.ROADMAP};
         var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
   
         var infowindow = new google.maps.InfoWindow();
 
         var marker, i;
 
         for (i = 0; i < n ; i++) { 
            marker = new google.maps.Marker({
               position: new google.maps.LatLng(sumbuy[i], sumbux[i]),
               map: map,
               icon: '2.png'
            });
    
	        google.maps.event.addListener(marker, 'click', (function(marker, i) {
               return function() {
                  infowindow.setContent('<div class="info_marker">'+nama[i]+'<br /><img src="gonjong/'+image[i]+'" /><br />alamat : '+alamat[i]+'<br /><a href="#" onClick="tampilkan('+kode[i]+')">More...</a></div>');
                  infowindow.open(map, marker);
               }
            })
		    (marker, i));
         }
	
         var marker=new google.maps.Marker({position:myCenter,animation:google.maps.Animation.BOUNCE});marker.setMap(map);

		 
//==========================================================================================		 
		 
	  },
	     error: function(jqXHR, exception) {
		 $('#loading').hide();
		 $('#gagal').show();
	  }
   });	
});


//#################################################################################################################################################

//$(document).ready(function() {

function test(id){

var alamat=id;

$('#loading').show();
   var AmbilData;
   $.ajax({
      type : 'GET',
	  url : 'http://localhost/unik/GIS/hosting/'+alamat+'.php',
	  async: true,
  	  beforeSend: function(x) {
	     if(x && x.overrideMimeType) {
   		    x.overrideMimeType("application/j-son;charset=UTF-8");
   		 }
	  },
 	  dataType : 'json',
	  success : function(data){
	     AmbilData = data.items;
	     $('#loading').hide();
		 $('#tampilData').show();			
         var kode = [];
		 var nama = [];
		 var fungsi = [];
		 var alamat = [];
		 var image = [];
		 var sumbux = [];
		 var sumbuy = [];		 
		 var n=0;

		 $.each(AmbilData, function(index, loaddata) {
		    kode[n]=loaddata.id;
			nama[n]=loaddata.nama;
			fungsi[n]=loaddata.fungsi;
			alamat[n]=loaddata.alamat;
			image[n]=loaddata.image;
			sumbux[n]=loaddata.x;
			sumbuy[n]=loaddata.y;
			 
			$('#isiinfo').append(
			   '<div id="'+kode[n]+'" class="isiinfo" style="display:none;">'+nama[n]+
			   '<br /><div style="text-align:left;">'+fungsi[n]+'<br />'+alamat[n]+'</div><br /><img style="width:100%;" src="gonjong/'+image[n]+'" /></div>'
			);
            $('#googleMap').append(
			   '<br /><a href="#" onClick="tampilkan('+kode[n]+')">'+nama[n]+'</a>'
			);
			n++;
		 });	
		 
//================================================================================================

		 var myCenter=new google.maps.LatLng(-0.94299, 100.370622);

	     var mapProp = {center:myCenter, zoom:13, mapTypeId:google.maps.MapTypeId.ROADMAP};
         var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
   
         var infowindow = new google.maps.InfoWindow();
 
         var marker, i;
 
         for (i = 0; i < n ; i++) { 
            marker = new google.maps.Marker({
               position: new google.maps.LatLng(sumbuy[i], sumbux[i]),
               map: map,
               icon: '2.png'
            });
    
	        google.maps.event.addListener(marker, 'click', (function(marker, i) {
               return function() {
                  infowindow.setContent('<div class="info_marker">'+nama[i]+'<br /><img src="gonjong/'+image[i]+'" /><br />alamat : '+alamat[i]+'<br /><a href="#" onClick="tampilkan('+kode[i]+')">More...</a></div>');
                  infowindow.open(map, marker);
               }
            })
		    (marker, i));
         }
	
         var marker=new google.maps.Marker({position:myCenter,animation:google.maps.Animation.BOUNCE});marker.setMap(map);

		 
//===============================================================================================		 
		 
	  },
	     error: function(jqXHR, exception) {
		 $('#loading').hide();
		 $('#gagal').show();
	  }
   });	
   }

//});




//###################################################################################################################################


function cari(id){

var pencarian=id;

$('#loading').show();
   var AmbilData;
   $.ajax({
      type : 'GET',
	  url : 'http://localhost/unik/GIS/hosting/search.php?cari='+pencarian+'',
	  async: true,
  	  beforeSend: function(x) {
	     if(x && x.overrideMimeType) {
   		    x.overrideMimeType("application/j-son;charset=UTF-8");
   		 }
	  },
 	  dataType : 'json',
	  success : function(data){
	     AmbilData = data.items;
	     $('#loading').hide();
		 $('#tampilData').show();			
         var kode = [];
		 var nama = [];
		 var fungsi = [];
		 var alamat = [];
		 var image = [];
		 var sumbux = [];
		 var sumbuy = [];		 
		 var n=0;

		 $.each(AmbilData, function(index, loaddata) {
		    kode[n]=loaddata.id;
			nama[n]=loaddata.nama;
			fungsi[n]=loaddata.fungsi;
			alamat[n]=loaddata.alamat;
			image[n]=loaddata.image;
			sumbux[n]=loaddata.x;
			sumbuy[n]=loaddata.y;
			 
			$('#isiinfo').append(
			   '<div id="'+kode[n]+'" class="isiinfo" style="display:none;">'+nama[n]+
			   '<br /><div style="text-align:left;">'+fungsi[n]+'<br />'+alamat[n]+'</div><br /><img style="width:100%;" src="gonjong/'+image[n]+'" /></div>'
			);
            $('#googleMap').append(
			   '<br /><a href="#" onClick="tampilkan('+kode[n]+')">'+nama[n]+'</a>'
			);
			n++;
		 });	
		 
//==============================================================================================
		 var myCenter=new google.maps.LatLng(-0.94299, 100.370622);

	     var mapProp = {center:myCenter, zoom:13, mapTypeId:google.maps.MapTypeId.ROADMAP};
         var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
   
         var infowindow = new google.maps.InfoWindow();
 
         var marker, i;
 
         for (i = 0; i < n ; i++) { 
            marker = new google.maps.Marker({
               position: new google.maps.LatLng(sumbuy[i], sumbux[i]),
               map: map,
               icon: '2.png',animation:google.maps.Animation.BOUNCE
            });
    
	        google.maps.event.addListener(marker, 'click', (function(marker, i) {
               return function() {
                  infowindow.setContent('<div class="info_marker">'+nama[i]+'<br /><img src="gonjong/'+image[i]+'" /><br />alamat : '+alamat[i]+'<br /><a href="#" onClick="tampilkan('+kode[i]+')">More...</a></div>');
                  infowindow.open(map, marker);
               }
            })
		    (marker, i));
         }
	
         var marker=new google.maps.Marker({position:myCenter});marker.setMap(map);

		 
//============================================================================================		 
		 
	  },
	     error: function(jqXHR, exception) {
		 $('#loading').hide();
		 $('#gagal').show();
	  }
   });	
   }

