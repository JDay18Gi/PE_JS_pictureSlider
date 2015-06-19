// JS that adds a div to HTML

// add "<div></div>" to the page

// 1. enter/access the html doc
// 2. find the position to paste the div
// 3. place the div

/*
var div = document.createElement("div");
document.body.appendChild(div);
*/




/*

---------------    CREATE   SLIDER    ------------------------

*/

// 1. Create the Div
var div = document.createElement("div");
document.body.appendChild(div);
div.setAttribute("id", "pic-slider");
div = document.getElementById("pic-slider");


// 2. Style the Div
div.style.background = "black no-repeat center center fixed";
div.style.width = "900px";
div.style.height = "500px";
div.style.backgroundSize = "cover";

//div.style.backgroundImage = "url('images/House_1.JPG')";

// 3. Creat a list of images
imagesArray = ["images/House_1.JPG", "images/House_2.JPG", "images/House_3.JPG", "images/IMG_1.jpg"];


// 4. Loop through the list
var currentImage;




/*
var loopChange = function(i) {
	if(i === imagesArray.length - 1) {
		i = 0;
	} else {
		i++;
		currentImage = imagesArray[i];
		div.style.backgroundImage = "url('"+currentImage+"')";
	}
};

var i = 0
var timer = 3000;
var loopI = loopChange(i);

setInterval(loopI, timer);
loopChange(i);

*/

//var i = 3

//currentImage = imagesArray[i];
//div.style.backgroundImage = "url('"+currentImage+"')";

imagesArray = ["images/House_1.JPG", "images/House_2.JPG", "images/House_3.JPG", "images/IMG_1.jpg"];

var currentImage;

var i = 0;

var timeout = 1000;
var loopChange = function() {
	if(i === imagesArray.length - 1) {
		i = 0;
	} else {
		i++;
	}
	console.log(i);
	currentImage = imagesArray[i];
	console.log(currentImage);
	div.style.backgroundImage = "url('"+currentImage+"')";
};

setInterval(loopChange, timeout);
loopChange();


/////////////////////////////
/*
for (var i = 0; i < imagesArray.length; i++) {
	currentImage = imagesArray[i];
	div.style.backgroundImage = "url("+currentImage+"')";
}
*/

/*
	var maxLoops = 50;
	var counter = 0;

	(function next() {
		if (counter++ >= maxLoops) return;

		setTimeout(function() {
			console.log(counter);
			next();
		}, 100);
	})();
}
*/

//div.style.backgroundImage = "url("+currentImage+"')";


// 5. make it a function with inputs