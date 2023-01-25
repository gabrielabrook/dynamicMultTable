// ********************************************************
// External Java Script - A06 Dynamic Multiplication Table
// ********************************************************

// FUNCTION DEFINITION
function dynamicMultTable() {
	// LOCAL VARS
	var rows = document.getElementById("rows").value; // gets user row value
	var cols = document.getElementById("cols").value; // gets user column value
	var output = "";				  // used to append HTML data, cleaner for dynamic mult table purposes

	var i = 1;	// loop counter for nested for loop (outer)
	var j = 1;	// loop counter for nested for loop (inner)
	let tableColor; // for setting color of table

	output += "<table>";	
	
	for(i = 1; i <= rows; i++) {
		output += "<tr>";
		for(j = 1; j <= cols; j++) {
			if(i==1 || j==1) {
				tableColor = "lightpink";	// color included here because style sheet would just set entire table to one color based on my code for this
			} else {
				tableColor = "white";
			}
			
			if(i==j) {				// for perfect squares
				if(i==1 && j==1) {
					tableColor = "white";
				} else {
					tableColor = "lightgrey";
				}
			} 
			output += "<td style='background-color:" + tableColor + "'>" + i*j + "</td>";
		}
		output += "</tr>";
	}
	output += "</table>";					// close out table
	document.getElementById("table").innerHTML = output;	// print when div class (.table) is called
	return false;						// avoiding new page being loaded...
}
				