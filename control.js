// JavaScript Document
function inti(){
	$("#input").keypress( 
		function(e){
			var code = (e.keyCode ? e.keyCode : e.which);
			if(code == 13 || code == 108 ){
				window.location.href = "http://web.poe.garena.tw/forum/view-thread/"+$("input").val();
			}
		}
	
	);
	$("#input").focus(
		function(){
			$("#input").val("");
		}
	);
	$("#i_button").click(
		function(){
			window.location.href = "http://web.poe.garena.tw/forum/view-thread/"+$("input").val();
		}
	);
}
