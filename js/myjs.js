
function displaycomment(){
	document.getElementById("comment").style.display='block';
	
	document.getElementById("question").style.display='none';
	
}
function displayquestion(){
	
	document.getElementById("comment").style.display='none';
	
	document.getElementById("question").style.display='block';
}

function showtime(){
			  	  var currentDate = new Date(),
				  month = currentDate.getMonth() + 1,
				  day = currentDate.getDate(),
				  year = currentDate.getFullYear(),
				  date = month + "/" + day + "/" + year;
				  
			  // Output the date to the above HTML element
			  document.getElementById("date").innerHTML = date;
	}
	
