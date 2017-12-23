//--------------------------------------------------------------------------------------------------------------------------------------------------
var server = 'http://localhost/tanahguo/_server/mysql/';
var map; 
var maptypeid=google.maps.MapTypeId.SATELLITE;
var array=[];
var arraycircle=[];
var geoarray=[];
var directionsDisplay=0;
var halaktif;
var tmode="DRIVING";
var tujuan=new google.maps.LatLng(-0.874777, 100.430314);
var yourpositionkoor;
var yourposition=false;
var navigation=false;
//--------------------------------------------------------------------------------------------------------------------------------------------------
function init(){
   tipe();
   basemap("tanah");
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
$(document).on('change','#pilihbasemap',function(){ 
   var tipe=document.getElementById("pilihbasemap").value;
   if(tipe=="1"){map.setMapTypeId(google.maps.MapTypeId.ROADMAP);}
   else if(tipe=="2"){map.setMapTypeId(google.maps.MapTypeId.SATELLITE);}
   else if(tipe=="3"){map.setMapTypeId(google.maps.MapTypeId.HYBRID);}
   else if(tipe=="4"){map.setMapTypeId(google.maps.MapTypeId.TERRAIN);}
   topscreen();
}); 
//--------------------------------------------------------------------------------------------------------------------------------------------------
function basemap(mylocation){ 
   var pusat;
   topscreen();       
   if (mylocation==null){
      var pusat = new google.maps.LatLng(-0.912777, 100.395314);
      var mapoptions = {center: pusat, zoom:11, mapTypeId: maptypeid};
	  map = new google.maps.Map(document.getElementById("map-canvas"),mapoptions);
   }
   else if(mylocation=="tanah"){
	  var mapoptions = {center: pusat, zoom:11, mapTypeId: maptypeid}; 
	  map = new google.maps.Map(document.getElementById("map-canvas"),mapoptions); 
      map.setZoom(15);
	  pusat = new google.maps.LatLng(-0.874777, 100.430314);
      map.panTo(pusat);
   }
   else if(mylocation=="indonesia"){
      map.setZoom(3);
	  pusat = new google.maps.LatLng(-0.874777, 120.430314);
	  map.panTo(pusat);
   }
   else if(mylocation=="sumbar"){
      map.setZoom(7);
	  pusat = new google.maps.LatLng(-0.874777, 100.430314);
      map.panTo(pusat); 
   }
   else if(mylocation=="padang"){
      map.setZoom(11);
	  var pusat = new google.maps.LatLng(-0.912777, 100.395314);
      map.panTo(pusat);
   }
   else{
	  map.setZoom(11);
      pusat = mylocation;
	  map.panTo(pusat);
   }
   markertanah = new google.maps.Marker({
      position: new google.maps.LatLng(-0.874777, 100.430314), icon: 'layer/marker/6.png', zoom: 11,
      map: map, title:'lokasi tanah'
   });
   var infowindowtanah = new google.maps.InfoWindow();
   google.maps.event.addListener(markertanah, 'click', function() {
      infowindowtanah.setContent('<div class="info_marker" style="min-height:60px;min-width:115px;">Lokasi Tanah<br /><img src="picture/53.jpg" /><br /><a href="#page2" data-transition="flow" onclick=pilihinfo()>More Info</a></div>');
      infowindowtanah.open(map, markertanah);  	   
   });
   
   if (mylocation=="tanah"){
      var parser = new geoXML3.parser({map: map, processStyles: true});
      parser.parse("layer/Tempatku.kml");  
	  //markertanah.setMap(null);
   }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
function tipe(){
	
   $('#pilihantipe').empty();
   $('.loading2').show(10);
   $.ajax({
      type : 'GET', url : server+'tipe.php', dataType : 'json',
	  success : function(data){
		  if (data != null){
		    for(var i in data){
		       var table = data[i];var id = table.id;var nama = table.nama;
			   $('#pilihantipe').append('<li><a href="#" onclick=jenis(\''+id+'\')>'+nama+'</a></li>');
			   $('#selecttipe').append('<option value="'+id+'">'+nama+'</option>');
		    }
		    $('#pilihantipe').listview('refresh');
		    $('#showalltipe').append('<button class="button" data-icon="check" data-theme="b" onclick="tampilmarker2()">Show All</button>'); 
	     }else{
	        $('#showalltipe').append('<button class="button" data-icon="delete" data-theme="b" disabled="">Empty</button>');  
	     }
	     $('.button').button();
	     $('.loading2').hide();
	  },
	  error: function(jqXHR, exception) {
		  alert(exception);
	     
		 $('#showalltipe').append('Result : Not Found');
		 $('.button').button();
         $('.loading2').hide();  
	  }
   });   
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
function jenis(tipe){
   $('#pilihanjenis').empty();
   $('#showalljenis').empty();
   $('#selectjenis').html("<option></option>");
   if(tipe=="untukradius"){tipe=document.getElementById("selecttipe").value;}else{pilihanjenis();}
   $('.loading2').show(10);
   $.ajax({
      type : 'GET', url : server+'jenis.php?id_tipe='+tipe, dataType : 'json',
	  success : function(data){
	     if (data != null){
	        for(var i in data){
		       var table = data[i];var id = table.id;var nama = table.nama;
			   $('#pilihanjenis').append('<li><a href="#" onclick=data(\''+id+'\')>'+nama+'</a></li>');
			   $('#selectjenis').append('<option value="'+id+'">'+nama+'</option>');
		    }
		    $('#showalljenis').append('<button class="button" data-icon="check" data-theme="b" onclick=tampilmarker2(\''+tipe+'\')>Show All</button>');
            $('#pilihanjenis').listview('refresh');
	     }else{
	        $('#showalljenis').append('<button class="button" data-icon="delete" data-theme="b" disabled="">Empty</button>');  
	     }
	     $('.button').button();
	     $('.loading2').hide();
	  },
	  error: function(jqXHR, exception) {
		 $('#showalljenis').append('Result : Not Found');
		 $('.button').button();
         $('.loading2').hide();  
	  }
   });
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
function data(jenis){
   $('#pilihandata').empty();
   $('#showalldata').empty();
   pilihandata();
   $('.loading2').show(10);
   $.ajax({
      type : 'GET', url : server+'data.php?id_jenis='+jenis, dataType : 'json',
	  success : function(data){
	     if (data != null){
	        for(var i in data){
		       var table = data[i];
			   var id = table[0]; var nama=table[1]; 
			   //alert(table[1]);
			   $('#pilihandata').append('<li><a href="#" data-rel="dialog" data-transition="pop" onclick=tampilmarker(\''+id+'\')>'+nama+'</a></li>');
		    }
		    $('#pilihandata').listview('refresh');
		    $('#showalldata').append('<button class="button" data-icon="check" data-theme="b" onclick=tampilmarker2(\''+jenis+'\')>Show All</button>');  
	     }else{
	        $('#showalldata').append('<button class="button" data-icon="delete" data-theme="b" disabled="">Empty</button>');  
	     }
	     $('.button').button();
         $('.loading2').hide();
	  },
	  error: function(jqXHR, exception) {
		 $('#showalldata').append('Result : Not Found');
		 $('.button').button();
         $('.loading2').hide();  
	  }
   });
   $("#flip-7").val('on').slider('refresh');
   halaktif=1;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function dataatribut(atr){
   $('#dataatribut').empty();
   pilihandataatribut();
   $('.loading2').show(10);
   $.ajax({
      type : 'GET', url : server+'pilihmarker3.php', dataType : 'json',
	  success : function(data){
         if (data != null){
		    for(var i in data){
		       var table = data[i];
			   var id = table.id; var nama=table.nama; var alamat=table.alamat;
			   var deskripsi = table.deskripsi; var st_x=table.st_X; var st_y=table.st_Y;
			   if(atr=="1"){
			     $('#dataatribut').append('<li><a href="#" data-filter-reveal="true" onclick=tampilmarker(\''+id+'\')>'+id+'</a></li>');
			   }else if(atr=="2"){
			      $('#dataatribut').append('<li><a href="#" data-rel="dialog" data-transition="pop" onclick=tampilmarker(\''+id+'\')>'+nama+'</a></li>');
			   }else if(atr=="3"){
			      $('#dataatribut').append('<li><a href="#" data-rel="dialog" data-transition="pop" onclick=tampilmarker(\''+id+'\')>'+alamat+'</a></li>');
			   }else if(atr=="4"){
			      $('#dataatribut').append('<li><a href="#" data-rel="dialog" data-transition="pop" onclick=tampilmarker(\''+id+'\')>'+deskripsi+'</a></li>');
			   }else if(atr=="5"){
			      $('#dataatribut').append('<li><a href="#" data-rel="dialog" data-transition="pop" onclick=tampilmarker(\''+id+'\')>'+st_y+','+st_x+'</a></li>');
			   }else{
			      $('#dataatribut').append('<li><a href="#" data-rel="dialog" data-transition="pop" onclick=tampilmarker(\''+id+'\')>'+id+'</a></li>');
			      $('#dataatribut').append('<li><a href="#" data-rel="dialog" data-transition="pop" onclick=tampilmarker(\''+id+'\')>'+nama+'</a></li>');
			      $('#dataatribut').append('<li><a href="#" data-rel="dialog" data-transition="pop" onclick=tampilmarker(\''+id+'\')>'+alamat+'</a></li>');
			      $('#dataatribut').append('<li><a href="#" data-rel="dialog" data-transition="pop" onclick=tampilmarker(\''+id+'\')>'+deskripsi+'</a></li>');
			      $('#dataatribut').append('<li><a href="#" data-rel="dialog" data-transition="pop" onclick=tampilmarker(\''+id+'\')>'+st_y+','+st_x+'</a></li>');
			   } 
		    }
		    $('#dataatribut').listview('refresh');
		    $('input[data-type="search"]').val('');
            $('input[data-type="search"]').trigger("keyup");
		    $("#divdataatribut input").focus();
	     }else{
	        $('#dataatribut').append('<button class="button" data-icon="delete" data-theme="b" disabled="">Empty</button>');  
	     }
	     $('.button').button();
	     $('.loading2').hide();
	  },
	  error: function(jqXHR, exception) {
		 $('#dataatribut').append('Result : Not Found');
		 $('.button').button();
         $('.loading2').hide();  
	  }
   });
   $("#flip-8").val('on').slider('refresh');
   halaktif=2;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function pilihinfo(id){
   clearpopup();
   $.ajax({
      type : 'GET', url : server+'pilihmarker.php?id='+id, dataType : 'json',
      success : function(data){   
         for(var i in data){
		    var table = data[i];
			var id=table.id; var nama=table.nama;
			var alamat=table.alamat; var deskripsi=table.deskripsi;
			alert('- '+nama+' -'+'\n\nALAMAT : '+alamat+'\nDESKRIPSI : '+deskripsi);
		 } 
	  }
   });  
   //$("#hidenlink").click();              
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function tampilmarker(id){
   var mToggle;if(halaktif==1){mToggle = $("#flip-7").val();}
   else if(halaktif==2){mToggle = $("#flip-8").val();}else if(halaktif==3){mToggle = $("#flip-9").val();}
   if(mToggle=="on"){clearoverlays();}
   $.ajax({
      type : 'GET', url : server+'pilihmarker.php?id='+id, dataType : 'json',
      success : function(data){   
         for(var i in data){
		    var table = data[i];
			var id=table.id; var nama=table.nama;
			var alamat=table.alamat; var deskripsi=table.deskripsi;
			var st_x=table.st_X; var st_y=table.st_Y;
            var posisi = new google.maps.LatLng(st_y, st_x);
			infowindow = new google.maps.InfoWindow();
            marker = new google.maps.Marker({
               position: new google.maps.LatLng(st_y, st_x), icon: 'layer/marker/2.png', zoom: 11,
               map: map, animation: google.maps.Animation.DROP
            });
			array.push(marker);
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
               return function() {
       	   	      pilihinfo(id);
			   }
            })
		    (marker, i));
			$('#selectdari').append('<option value="'+st_x+','+st_y+'">'+nama+'</option>').selectmenu();
			$('.selectpoint').append('<option value="'+posisi+'">'+nama+'</option>');
         } 
	  }
   }); 
   $('#getroute').fadeIn('fast');
   $('.buttonget').button('enable');
   topscreen();  
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function tampilmarker2(id){
   clearoverlays();
   var AmbilData;
   $.ajax({
      type : 'GET', url : server+'pilihmarker2.php?id='+id, dataType : 'json',
	  success : function(data){ 
	     var id=[]; var nama=[]; var alamat=[];  var deskripsi=[]; 
		 var st_x=[]; var st_y=[]; var i=0; 
		 AmbilData = data.items;
		 $.each(AmbilData, function(index, loaddata) {  
		    id[i]=loaddata.id; nama[i]=loaddata.nama;
			alamat[i]=loaddata.alamat; deskripsi[i]=loaddata.deskripsi;
			st_x[i]=loaddata.st_X; st_y[i]=loaddata.st_Y;
		    i++;
		 });
         infowindow = new google.maps.InfoWindow();
     	 var n;
		 for(n=0; n<i; n++){  
            marker = new google.maps.Marker({
               position: new google.maps.LatLng(st_y[n], st_x[n]), icon: 'layer/marker/2.png',
               map: map, animation: google.maps.Animation.DROP
            });
			var posisi = new google.maps.LatLng(st_y[n], st_x[n]);
			array.push(marker);
	        google.maps.event.addListener(marker, 'click', (function(marker, n) {
               return function() {
                  infowindow.setContent('<div style="min-height:50px; min-width:100px;">'+nama[n]+'<br /><a href="#" onclick=pilihinfo(\''+id[n]+'\')>More Info</a></div>');
                  infowindow.open(map, marker);
  		       }  
            })
		    (marker, n));         
			$('#selectdari').append('<option value="'+st_x[n]+','+st_y[n]+'">'+nama[n]+'</option>').selectmenu();
			$('.selectpoint').append('<option value="'+posisi+'">'+nama[n]+'</option>');
  		 }
	  }
   });   
   $('#getroute').fadeIn('fast');
   $('.buttonget').button('enable');
   topscreen();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function tampilmarker3(id,lat,lng,rad){
   clearoverlays();
   $('#resultcircle').empty();
   $('#countcircle').html(0);
   var AmbilData;
   $.ajax({
      type : 'GET', url : server+'radius.php?id='+id+'&lat='+lat+'&lng='+lng+'&rad='+rad, dataType : 'json',
	  success : function(data){ 
	     var id=[]; var nama=[]; var alamat=[];  var deskripsi=[]; 
		 var st_x=[]; var st_y=[]; var i=0; 
		 AmbilData = data.items;
		 $.each(AmbilData, function(index, loaddata) {  
		    id[i]=loaddata.id; nama[i]=loaddata.nama;
			alamat[i]=loaddata.alamat; deskripsi[i]=loaddata.deskripsi;
			st_x[i]=loaddata.st_X; st_y[i]=loaddata.st_Y;
		    i++;
		 });
		 var n;
         infowindow = new google.maps.InfoWindow();
		 for(n=0; n<i; n++){  
            marker = new google.maps.Marker({
               position: new google.maps.LatLng(st_y[n], st_x[n]), icon: 'layer/marker/2.png',
               map: map, animation: google.maps.Animation.DROP
            });
			var posisi = new google.maps.LatLng(st_y[n], st_x[n]);
			array.push(marker);
	        google.maps.event.addListener(marker, 'click', (function(marker, n) {
               return function() {
                  infowindow.setContent('<div style="min-height:50px; min-width:100px;">'+nama[n]+'<br /><a href="#" onclick=pilihinfo(\''+id[n]+'\')>More Info</a></div>');
                  infowindow.open(map, marker);
                  //pilihinfo(id); $("#hidenlink").click();
			   }
            })
		    (marker, n));         
			$('#resultcircle').append('<li><a href="#" onclick=tampilmarker(\''+id[n]+'\')>'+nama[n]+'</a></li>');
			$('#selectdari').append('<option value="'+st_x[n]+','+st_y[n]+'">'+nama[n]+'</option>').selectmenu();
			$('.selectpoint').append('<option value="'+posisi+'">'+nama[n]+'</option>');
		 }
		 $('#resultcircle').listview('refresh');
		 $('#countcircle').html(array.length);
	  }
   }); 
   
   $('#getroute').fadeIn('fast');
   $('.buttonget').button('enable');
   topscreen();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function tampilradius(){
   var tipe=document.getElementById("selecttipe").value;
   var jenis=document.getElementById("selectjenis").value;
   var rad=document.getElementById("inputradius").value;
   var dari=document.getElementById("selectdari").value;
   var str = dari.split(",");
   var lat; var lng; 
   if(dari=="tanah"){lat=-0.874777; lng=100.430314;}else{lat=str[1]; lng=str[0];}	  
   if(jenis!=""){
      tampilmarker3(jenis,lat,lng,rad);
   }else if(tipe!=""){
      tampilmarker3(tipe,lat,lng,rad);
   }else{
      jenis="";
      tampilmarker3(jenis,lat,lng,rad);
   }
   createCircle(lat,lng,rad);
   $("#flip-9").val('on').slider('refresh');
   halaktif=3;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function pilihtravel(){
   if (directionsDisplay!=0){
      clearoverlays('3');
   }
   var start =document.getElementById("dari").value;
   var finish = document.getElementById("tujuan").value;
   if (start =="tanah"){start=new google.maps.LatLng(-0.874777, 100.430314);}
   else if(start =="your"){navigation=true; tujuan=finish;}
   
   if (finish =="tanah"){finish=new google.maps.LatLng(-0.874777, 100.430314);}
   else if(finish=="your"){navigation=true; tujuan=start;}
   
   var cbox = $('.cbox');
   var cboxlength = cbox.length;
   for(var i=0;i<cboxlength;i++){
       if(cbox[i].checked==true){
	     tmode = cbox[i].value;
      }
   }
   if(navigation==false){
      createRoute(tmode,start,finish);
   }else{
      if(start=="your"){
	     createRoute(tmode,yourpositionkoor,tujuan);
	  }else{
	     createRoute(tmode,tujuan,yourpositionkoor);
	  }
   }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function createRoute(travelm,start,finish){
   var direct = new google.maps.DirectionsService();
   var option = {origin:start, destination:finish,
      travelMode: google.maps.TravelMode[travelm],
      unitSystem: google.maps.UnitSystem.METRIC,provideRouteAlternatives: true
   };
   direct.route(option, function(response, fix) {
      if (fix == google.maps.DirectionsStatus.OK) {
         directionsDisplay.setOptions({ preserveViewport: true });
         directionsDisplay.setDirections(response); 
	  }else{
	     alert("Travel Mode "+travelm+" Tidak Tersedia")
	  }
   });
   directionsDisplay = new google.maps.DirectionsRenderer();
   directionsDisplay.setMap(map);
   directionsDisplay.setPanel(document.getElementById('divroute'));
   divroute();topscreen();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function calculateDistances() {
   origin = document.getElementById("origin").value;
   if (origin =="tanah"){origin=new google.maps.LatLng(-0.874777, 100.430314);}
   else if(origin =="your"){origin=yourpositionkoor;}
   destination = document.getElementById("destination").value;
   if (destination =="tanah"){destination=new google.maps.LatLng(-0.874777, 100.430314);} 
   else if(destination =="your"){destination=yourpositionkoor;}
   var service = new google.maps.DistanceMatrixService();
   service.getDistanceMatrix({
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
   }, callback);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function callback(response, status) {
  if (status != google.maps.DistanceMatrixStatus.OK) {
     alert('Error was: ' + status);
  }else {
     var origins = response.originAddresses;
     var destinations = response.destinationAddresses;
     $('#luoutputdiv').empty();
 	 //deleteOverlays();

     for (var i = 0; i < origins.length; i++) {
        var results = response.rows[i].elements;
        //addMarker(origins[i], false);
        for (var j = 0; j < results.length; j++) {
           //addMarker(destinations[j], true);
		   //console.log(results[j]);
           $('#luoutputdiv').prepend('<li data-role="list-divider">'+results[j].distance.text+'<span class="ui-li-count">'+results[j].duration.text+'</span></li><li style="font-size:12px">'+origins[i] + '<br>to :<br>' + destinations[j]+'</li>');
        }
     }
	 $('#luoutputdiv').listview('refresh');
  }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function khusustanah(hal){
    if(hal=="tsunami"){
        createCircle(-0.920752,100.305465,11)
    }
    else if(hal=="lokasi"){
        $('#searchpanel').panel('open');
    }    
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function createCircle(lat,lng,rad){
   clearoverlays('2');
   var circle = new google.maps.Circle({
      center: new google.maps.LatLng(lat, lng),
      //center: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
      radius: parseFloat(rad*1000),
	  map: map,
	  strokeColor: "#FC0808",
	  strokeOpacity: 0.4,
	  strokeWeight: 2,
	  fillColor: "#FC0808",
	  fillOpacity: 0.1
   });
   arraycircle.push(circle);     
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function loaddaritujuan(){
   if(yourposition==true){
      $('#selectdari').html('<option value="your" style="background:#f35004; color:#fff;">Your Position</option><option value="tanah" style="background:#73ddf5; color:#fff;">Lokasi Tanah</option>').selectmenu();
      $('.selectpoint').html('<option></option><option value="tanah" style="background:#73ddf5; color:#fff;">Lokasi Tanah</option><option value="your" style="background:#f35004; color:#fff;">Your Position</option>');
      $('#getroute').fadeIn('fast');
      $('.buttonget').button('enable');
   }
   else{
      $('#selectdari').html('<option value="tanah" style="background:#73ddf5; color:#fff;">Lokasi Tanah</option>').selectmenu();
      $('.selectpoint').html('<option></option><option value="tanah" style="background:#73ddf5; color:#fff;">Lokasi Tanah</option>');
      $('#getroute').fadeOut('fast');
      $('.buttonget').button('disable');
   }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function clearoverlays(obj){
   if(obj=="2"){
      for (var i = 0; i < arraycircle.length; i++ ) {
         arraycircle[i].setMap(null);
      }
      arraycircle.length = 0;
   }else if(obj=="3"){
      directionsDisplay.setMap(null);
	  $('#divroute').empty();
	  $('#divdirection').slideUp(300);
	  navigation=false;
   }else if(obj=="4"){
      for (var i = 0; i < arraycircle.length; i++ ) {
         arraycircle[i].setMap(null);
      }
      arraycircle.length = 0;
      for (var i = 0; i < array.length; i++ ) {
         array[i].setMap(null);
      }
      array.length = 0;loaddaritujuan();
	  directionsDisplay.setMap(null);
	  $('#divroute').empty();
	  $('#divdirection').slideUp(300);
   }else if(obj=="5"){
      yourposition=false;
	  loaddaritujuan();
	  for (var i = 0; i < geoarray.length; i++ ) {
         geoarray[i].setMap(null);
      }
   }
   else{
      for (var i = 0; i < array.length; i++ ) {
         array[i].setMap(null);
      }
      array.length = 0;
	  loaddaritujuan();
   }
   topscreen();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function clearpopup(){ 
	$('#infonama').empty();
	$('#infoalamat').empty();
	$('#infodeskripsi').empty(); 
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function geolocation(){
   topscreen(); yourposition=true;
   basemap('sumbar');loaddaritujuan(); 
   var options = {enableHighAccuracy: true};
   var baru = navigator.geolocation.watchPosition(geolocationSuccess, geolocationError, options);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function geolocationSuccess(posisi){
   var posisi =new google.maps.LatLng(posisi.coords.latitude,posisi.coords.longitude);    
   yourpositionkoor=posisi;   
   geomarker = new google.maps.Marker({map: map, position: posisi});
   geoarray.push(geomarker);
   var infowindowgeo = new google.maps.InfoWindow();
   google.maps.event.addListener(geomarker, 'click', function() {
      infowindowgeo.setContent('Your Position');infowindowgeo.open(map, geomarker);
   });  
   if(navigation==true){
      createRoute(tmode,posisi,tujuan);
   }
   map.panTo(posisi);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function geolocationError(err){
   alert("please enable your gps");
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function kembali(){
   $("#divobjek").slideUp();
   $("#divpilihan").slideDown();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function topscreen(){
   $('#searchpanel').panel('close');
   $('#setting').panel('close');
   $('#zoomto').slideUp('400');
   $('#clearall').slideUp('400');
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function topmenu(){
   $('#topmenu').slideDown(300);
   $('#zoomto').slideUp(300);
   $('#menuobjek').slideUp(300);
   $('#divpilihantipe').slideUp(300);
   $('#divpilihanjenis').slideUp(300);
   $('#divatribut').slideUp(300);
   $('#divdataatribut').slideUp(300);
   $('#divpilihandata').slideUp(300);
   $('#divresultcircle').slideUp(300);
   $('#divcircle').slideUp(300);
   $('#divdistance').slideUp(300); 
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function clearall(){
   $('#clearall').slideToggle(300);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function zoomto(){
   $('#zoomto').slideToggle(300);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function menuobjek(){
   pilihantipe();
   $('#divpilihandata').slideUp(300);
   $('#divpilihanjenis').slideUp(300);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function atribut(){
   $('#topmenu').slideUp(300);
   $('#divdataatribut').slideUp(300);
   $('#menuobjek').slideDown(300);
   $('#divatribut').slideDown(300);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function pilihantipe(){
   $('#topmenu').slideUp(300);
   $('#divpilihanjenis').slideUp(300);
   $('#menuobjek').slideDown(300);
   $('#divpilihantipe').slideDown(300);
   $('.loading2').hide();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function pilihanjenis(){
   $('#topmenu').slideUp(300);
   $('#divpilihantipe').slideUp(300);
   $('#divpilihandata').slideUp(300);
   $('#menuobjek').slideDown(300);
   $('#divpilihanjenis').slideDown(300);
   $('.loading2').hide();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function pilihandata(){
   $('#topmenu').slideUp(300);
   $('#divpilihantipe').slideUp(300);
   $('#divpilihanjenis').slideUp(300);
   $('#menuobjek').slideDown(300);
   $('#divpilihandata').slideDown(300);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function divcircle(){
   $('#topmenu').slideUp(300);
   $('#divresultcircle').slideUp(300);
   $('#menuobjek').slideDown(300);
   $('#divcircle').slideDown(300);  
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function divresultcircle(){
   $('#divcircle').slideUp(300);
   $('#menuobjek').slideDown(300);
   $('#divresultcircle').slideDown(300);  
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function divdistance(){
   $('#topmenu').slideUp(300);
   $('#menuobjek').slideDown(300);
   $('#divdistance').slideDown(300);  
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function pilihandataatribut(){
   $('#divatribut').slideUp(300);
   $('#divdataatribut').slideDown(300);
   $('.loading2').hide();
}
function divroute(){
   $('#divdirection').slideDown(300);
}
function divrouteback(){
   $('#divroute').slideToggle(300);
   $('#controldivroute1').slideToggle(100);
   $('#controldivroute2').slideToggle(100);   
}
$(".back").click(function(){
   $('.loading2').hide();
});
function buttongetroute(){$("#getroute").click();}
//---------------------------------------------------------------------------------------------------------------------------------------------------
