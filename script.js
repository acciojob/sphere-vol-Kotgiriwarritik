function volume_sphere() {
    //Write your code here
 // //  let r = document.getElementById("radius").value;
 // //  let v = document.getElementById("volume");

	// // let num1 = (4/3) +Math.PI * Math.pow(r, 3);
	// // let num2+num1.toFixed(4);

	// // V.value = num2;

	// // return false;
	//   let r=document.getElementById('MyForm').radius.value;
	
	// document.getElementById('MyForm').volume.value=((4/3)*Math.PI*r*r*r).toFixed(4);
	//  event.preventDefault();

	  let r=document.getElementById('MyForm').radius.value;
	
	document.getElementById('MyForm').volume.value=((4/3)*Math.PI*r*r*r).toFixed(4);
	 event.preventDefault();
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
