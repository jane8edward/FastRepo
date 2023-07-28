window.onload=function(){
	var indexy=true;
	$(".header-top-three-ul").click(function(){
		if(indexy==true){
			indexy=false;
			$(".header-top-three-ul>li").css("border","1px solid #008cff");
			$(".header-top-four").stop(true,true).slideDown(100);//jq下拉导航
		}else{
			indexy=true;
			$(".header-top-three-ul>li").css("border","1px solid #8A8A8A");
			$(".header-top-four").stop(true,true).slideUp(100);//jq上拉导航
		}
	});
	
} 