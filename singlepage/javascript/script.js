$(document).ready(function(){
	loaddta();
});
function loaddta()
{
	$("nav a").click(function(e){
		e.preventDefault();
		var sid=e.currentTarget.id+"sec";
		
		
		$("html body").animate({
		scrollTop:$("#"+sid).offset().top-50
	},1000);
	});
	
	}
	