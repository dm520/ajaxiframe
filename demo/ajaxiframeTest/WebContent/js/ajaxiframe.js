(function(){
	 $('.page-sidebar').on('click', ' li > a.ajaxiframe', function (e) {
         e.preventDefault();
         //Metronic.scrollTop();
         //console.log("----");

         var url = $(this).attr("href");
         var menuContainer = $('.page-sidebar ul');
         var pageContent = $('.page-content');
        
         var pageContentBody = $('.page-content .page-content-body');
        // pageContentBody.scrollTop();
         

         menuContainer.children('li.active').removeClass('active');
         menuContainer.children('arrow.open').removeClass('open');

         $(this).parents('li').each(function () {
             $(this).addClass('active');
             $(this).children('a > span.arrow').addClass('open');
         });
         $(this).parents('li').addClass('active');

         var the = $(this);
         
         $.ajax({
             type: "GET",
             cache: false,
             url: url,
             dataType: "html",
             success: function (res) {
                 if (the.parents('li.open').size() === 0) {
                     $('.page-sidebar-menu > li.open > a').click();
                 }

                // Metronic.stopPageLoading();
                 pageContentBody.html(res);
                 //Layout.fixContentHeight(); // fix content height
                // Metronic.initAjax(); // initialize core stuff
                 console.log( pageContentBody.scrollTop());
                 console.log( pageContentBody.children('div').scrollTop());
                 pageContentBody.children('div').scrollTop();
             },
             error: function (xhr, ajaxOptions, thrownError) {
                 //Metronic.stopPageLoading();
                 pageContentBody.html('<h4>Could not load the requested content.</h4>');
             }
         });
     });
	
})();