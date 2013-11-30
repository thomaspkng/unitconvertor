function quitapp() {
	navigator.app.exitApp();
	}
function init() {
	$(document).ready(function(){
		$(".tempc").hide();
		$(".wtgc").hide();
		$("input[name=lenfrunit]").change(lenchkunit);
		$("input[name=lentounit]").change(lenchkunit);
		$("#lenfrvalue").change(lenchkunit);
		$("#lentovalue").change(lenchkunit);
		$("#lenchkbtn").click(lenchkunit);
		$("#tempchkbtn").click(tempchkunit);
		$("input[name=tempfrunit]").change(tempchkunit);
		$("input[name=wtgfrunit]").change(wtgchkunit);
		$("input[name=wtgtounit]").change(wtgchkunit);
		$("#wtgchkbtn").click(wtgchkunit);
	});
	}
function lenchkunit() {
	frunit=$("input[name=lenfrunit]:checked").val();
	tounit=$("input[name=lentounit]:checked").val();
	frvalue=$("#lenfrvalue").val();
	tovalue = frvalue/tounit*frunit;
	//alert(frvalue+"\n"+tounit+"\n"+frunit+"\n"+tovalue);
	$("#lentovalue").val(tovalue);
	}
function tempchkunit() {
	frvalue = $("#tempfrvalue").val();
	frunit = $("input[name=tempfrunit]:checked").val();
	if (frunit == 1) {
		tovalue = frvalue*1.8+32;	
		}
	else {
		tovalue = (frvalue-32)/1.8;
		}
	$("#temptovalue").val(tovalue);
	}
function wtgchkunit() {
	frunit=$("input[name=wtgfrunit]:checked").val();
	tounit=$("input[name=wtgtounit]:checked").val();
	frvalue=$("#wtgfrvalue").val();
	tovalue = frvalue/tounit*frunit;
	//alert(frvalue+"\n"+tounit+"\n"+frunit+"\n"+tovalue);
	$("#wtgtovalue").val(tovalue);
	}
function golen() {
	$(".tempc").hide();
	$(".wtgc").hide();
	$(".lenc").show();
	}
function gotemp() {
	$(".lenc").hide();
	$(".wtgc").hide();
	$(".tempc").show();
	}
function gowtg() {
	$(".tempc").hide();
	$(".lenc").hide();
	$(".wtgc").show();
	}