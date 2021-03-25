var btnOpenMap = document.getElementsByClassName('open-map')[0];
var loginLink = document.getElementsByClassName('login-link')[0];
var loginForm = document.getElementsByClassName('fixed-overlay-login')[0];
var mapContainer = document.getElementsByClassName('fixed-overlay-map')[0];
var loginClose = document.getElementsByClassName('login-form-close-btn')[0];
var mapClose = document.getElementsByClassName('map-close-btn')[0];
var loginField = document.querySelector('.login-form-item.login');
try{
	btnOpenMap.onclick = function(event){
		event.preventDefault();
		if(mapContainer.classList.contains('open')) {
			mapContainer.classList.remove('open');
		}else{
			mapContainer.classList.add('open');
		}
	}
}catch(ex){

}
try{
	mapClose.onclick = function(){
		mapContainer.classList.remove('open');
	}
}catch(ex){

}
loginLink.onclick = function(evt){
	evt.preventDefault();
	loginForm.classList.add('open');
	loginField.focus();
}
try{
	loginClose.onclick = function(){
		loginForm.classList.remove('open');
	}
}catch(ex){}


function initMap() {
	var uluru = {lat:59.938939, lng: 30.323105};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}
