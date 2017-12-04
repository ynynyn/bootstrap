$(function(){
  $('.news2 div').each(function(i){
		$(this).hover(function(){
			 $(".news2 div span").eq(i).slideDown("slow");
	     $(".news2 div h3").eq(i).animate({'margin-left':'60px'},1000);
       $(".news2 div h6").eq(i).css("border-bottom-color","pink");
		},function(){			
      $(".news2 div span").eq(i).slideUp("slow");
      $(".news2 div h3").eq(i).animate({'margin-left':'0px'},1000);
      $(".news2 div h6").eq(i).css("border-bottom-color","#ffffff");
		});
	});
  // $(".a-left img").hover(function(){
  //   $(this).animate({'width':'0px','height':'0px'},1000);
  // },function(){
  //   $(this).animate({'width':'100%','height':'100%'},1000);
  // })
});