
// ********************************************************************************************************
// ****************************************** Variables ***************************************************
// ********************************************************************************************************

var whichSong = 1;

var songOne = document.getElementById("mysong1");
var songTwo = document.getElementById("mysong2");
var songThree = document.getElementById("mysong3");

var songPlay = document.getElementById("mysongPlay");
var songPause = document.getElementById("mysongPause");
var songStop = document.getElementById("mysongStop");

songOne.setAttribute("class", "selected");

// ********************************************************************************************************
// ****************************************** Functions ***************************************************
// ********************************************************************************************************

// ************************************ Play Song that is displayed ***************************************
	function playAudio(){
		document.getElementsByTagName("audio")[0].play();
	}
// ************************************ Pause Song that is displayed **************************************
	function pauseAudio(){
		document.getElementsByTagName("audio")[0].pause();
	}
// ************************************ Stop Song that is displayed ***************************************
	function stopAudio(){
		switch (whichSong) {
			case 1:
				document.getElementsByTagName("audio")[0].setAttribute("src", "Music_Files/Priceless - for King & Country.mp3");
				break;
			case 2:
				document.getElementsByTagName("audio")[0].setAttribute("src", "Music_Files/I Just Want to Praise You (Shackles) - Mary Mary.mp3");
				break;
			case 3:
				document.getElementsByTagName("audio")[0].setAttribute("src", "Music_Files/Gods Not Dead - Newsboys.mp3");
				break;
		}
	}
// ********************************************************************************************************
// ********************************************************************************************************

songOne.addEventListener('click',function(){
// *************************************************
	//*** Change Song 411 that is displayed ***
	document.getElementById("SongPlaying").innerHTML = "Priceless";
	document.getElementById("ArtistPlaying").innerHTML = "for King & Country";
// *************************************************
	//*** Change Song that is played ***
	document.getElementsByTagName("audio")[0].setAttribute("src", "Music_Files/Priceless - for King & Country.mp3");
	whichSong = 1;
// *************************************************
	//*** Change the button's background color ***
	songOne.setAttribute("class", "selected");
	songTwo.setAttribute("class", "notSelected");
	songThree.setAttribute("class", "notSelected");
// *************************************************
	songPlay.setAttribute("class", "notSelected");
	songPause.setAttribute("class", "notSelected");
	songStop.setAttribute("class", "notSelected");
// *************************************************
});
// ********************************************************************************************************
songTwo.addEventListener('click',function(){
// *************************************************
	//*** Change Song 411 that is displayed ***
	document.getElementById("SongPlaying").innerHTML = "I Just Want to Praise You (Shackles)";
	document.getElementById("ArtistPlaying").innerHTML = "Mary Mary";
// *************************************************
	//*** Change Song that is played ***
	document.getElementsByTagName("audio")[0].setAttribute("src", "Music_Files/I Just Want to Praise You (Shackles) - Mary Mary.mp3");
	whichSong = 2;
// *************************************************
	//*** Change the button's background color ***
	songOne.setAttribute("class", "notSelected");
	songTwo.setAttribute("class", "selected");
	songThree.setAttribute("class", "notSelected");
// *************************************************
	songPlay.setAttribute("class", "notSelected");
	songPause.setAttribute("class", "notSelected");
	songStop.setAttribute("class", "notSelected");
// *************************************************
});
// ********************************************************************************************************
songThree.addEventListener('click',function(){
// *************************************************
	//*** Change Song 411 that is displayed ***
	document.getElementById("SongPlaying").innerHTML = "Gods Not Dead";
	document.getElementById("ArtistPlaying").innerHTML = "Newsboys";
// *************************************************
	//*** Change Song that is played ***
	document.getElementsByTagName("audio")[0].setAttribute("src", "Music_Files/Gods Not Dead - Newsboys.mp3");
	whichSong = 3;
// *************************************************
	//*** Change the button's background color ***
	songOne.setAttribute("class", "notSelected");
	songTwo.setAttribute("class", "notSelected");
	songThree.setAttribute("class", "selected");
// *************************************************
	songPlay.setAttribute("class", "notSelected");
	songPause.setAttribute("class", "notSelected");
	songStop.setAttribute("class", "notSelected");
// *************************************************
});
// ********************************************************************************************************
// ********************************************************************************************************
songPlay.addEventListener('click',function(){
// *************************************************
	//*** Change the button's background color ***
	songPlay.setAttribute("class", "selected");
	songPause.setAttribute("class", "notSelected");
	songStop.setAttribute("class", "notSelected");
// *************************************************
	playAudio();
// *************************************************
});
// ********************************************************************************************************
songPause.addEventListener('click',function(){
// *************************************************
	//*** Change the button's background color ***
	songPlay.setAttribute("class", "notSelected");
	songPause.setAttribute("class", "selected");
	songStop.setAttribute("class", "notSelected");
// *************************************************
	pauseAudio();
// *************************************************
});
// ********************************************************************************************************
songStop.addEventListener('click',function(){
// *************************************************
	//*** Change the button's background color ***
	songPlay.setAttribute("class", "notSelected");
	songPause.setAttribute("class", "notSelected");
	songStop.setAttribute("class", "selected");
// *************************************************
	stopAudio();
// *************************************************
});
