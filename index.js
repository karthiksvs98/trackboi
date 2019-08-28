
// Initialize Firebase 
var firebaseConfig = {
    apiKey: "AIzaSyCjOjxEWAgHGoJM2lM4KENvk4mqCU_B4xk",
    authDomain: "scms-svsk.firebaseapp.com",
    databaseURL: "https://scms-svsk.firebaseio.com",
    projectId: "scms-svsk",
    storageBucket: "scms-svsk",
    messagingSenderId: "807007302712",
    appId: "1:807007302712:web:2a7e394ef39bcfa0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   Create a variable to reference the database
var database = firebase.database();

/*function updateProductStatus(pid, chosenStatus) {
  firebase.database().ref('products/').update({
    [pid] : chosenStatus
  });
}*/

/*function move(retStatuss,pcnt) {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  switch(pcnt) {
  case 1:
    pcnt = 2;
    break;
  case 7:
	pcnt = 10;
    break;
  default:
	pcnt = pcnt*(1.4);
    
}
  function frame() {
    if (width >=(pcnt*10)) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = retStatuss ;
    }
  }
}*/

/*function Redirect() {
               window.location = "home.html";
            }*/

$("#loginbtn").on("click", function() {
	var uId = $("#uid").val();
	var pWd = $("#pwd").val();
    
	firebase.database().ref('credentials/username/').once('value', function(snapshot) {
        var clName = snapshot.val();
		if(clName!=uId){alert("Invalid Username!")}
		else{
			firebase.database().ref('credentials/password/').once('value', function(snapshot) {
				var clPwd = snapshot.val();
				if(clPwd!=pWd){
					alert("Invalid Password!");
				}
				else{
					let params = `scrollbars=no,fullscreen=yes,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;
					window.open("home.html", "test", params);
				}
			});
		}
    });
	
	
	
	
	
	/*if($("#uid").val()==""||$("#pwd").val()=="")
	{
		alert("Invalid Credentials!");
	}
	else if($('input[name=optradio]:checked').val()=="update"){
		var e = document.getElementById("sel1");
		if(e.options[e.selectedIndex].value=="notchosen"){
			alert("Choose Status!");
		}
		else{ 
		var chosenStatus = e.options[e.selectedIndex].text;
		updateProductStatus($("#pid").val(),chosenStatus);
		alert("Product '"+$("#pid").val()+"' status has been updated to '"+chosenStatus+"'");
		var pcnt = parseInt(String(chosenStatus).charAt(0));
		move(chosenStatus,pcnt);
		}
	}
	else if($('input[name=optradio]:checked').val()=="retrieve"){
		var pidd = $("#pid").val();
		firebase.database().ref('products/'+pidd).once('value', function(snapshot) {
        var retStatuss = snapshot.val();
		if(retStatuss!=null){
			var pcnt = parseInt(String(retStatuss).charAt(0));
			move(retStatuss,pcnt);
		//alert("Product  '"+pidd+"'  Status:  "+retStatuss+"'");
		
		}
		else{alert("Product Not Found!");}
    });
		
		
	}*/
    
    return false;
})