$(document).ready(function(){
	//console.log("연결됨");
	//상단 텍스트 내려옴
	$("header h1").delay(500).slideDown();
	
	/*향수의 어원 h2
	$("#f1").click(function(){
		$(this).animate({marginLeft:"100vw"},"slow");
	});*/
	
	//상단 오른쪽 햄버거 아이콘 클릭 (이벤트형 메소드는 함수와 함께 사용!)
	$("header button").click(function() {
		$("nav").slideDown(); //display:block; 된다 . 
		$("body").css("overflow" , "hidden"); //스크롤바 안생김 
	});
	
	//메뉴 항목 또는 top 아이콘 클릭
	$("a").click(function() {
		$("nav").slideUp(); //display:none; 됨 
		$("body").css("overflow" ,"auto"); //스크롤이 된다 
	});
	//figure요소 넓이 
	console.log( $("figure").width() ); //output_ 420
	
	//figure 이미지 자동 슬라이드
	//셋인터벌을 일정한 시간간격으로 지속적으로 함수호출하는 메소드 
	const  x = setInterval( y, 1500);
	function y() {
		$("figure div").stop().animate({left : "-430px"},1000, function(){
			$(this).append( $(this).children().first() );
			$(this).css("left", 0);
		} );
		
	} 
	//eq(index)알아내기
	$("section").children().click(function() {
		const z = $(this).index();
		console.log( z );
		$("section").children().eq(z).css("background", "tomato").siblings().css("background"
		,"none");
	})
	
	
	
});//////////////////전체 마지막 부분