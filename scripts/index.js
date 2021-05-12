var path = new Array();		// LIST OF IMAGES 
path[0] = "img/sexy1.JPG"; 
path[1] = "img/sexy2.JPG"; 
path[2] = "img/sexy3.JPG";
path[3] = "img/sexy4.JPG";
path[4] = "img/sexy5.JPG";


var imageNumber = 0;
function swapImage() 
	{
	document.slides.src = path[imageNumber]; 
	if(imageNumber < path.length - 1) imageNumber++; 
	else imageNumber = 0; 
	setTimeout("swapImage()",3000);
	} 
	
window.onload=swapImage; 