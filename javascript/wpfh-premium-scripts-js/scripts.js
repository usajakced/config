

		function wpfh_set_city_from_state(element){
			
		
			var val = jQuery(element).val();
		
				if(val != ''){
				jQuery('.wpfh_city_selector').show();		
					jQuery('.wpfh_search_city option').each(function(index){
						
							if(jQuery(this).attr('data-state') == val || jQuery(this).attr('data-state')  == 'placeholder'){								
								jQuery(this).show();
							}else{
								jQuery(this).hide();									
							}
						
					});
					
					
				}else{
					
				jQuery('.wpfh_city_selector').hide();	
					jQuery('.wpfh_search_city option').show();	
				}
			
			
			
		}

jQuery(function ($) {
    
    

    
			 wpfh_set_city_from_state(jQuery(".wpfh_search_state"));
						
		jQuery(".wpfh_search_state").on('change',function(){
		jQuery('.wpfh_search_city option').show();	
			jQuery('.wpfh_search_city').prop('selectedIndex',0);
		
			 wpfh_set_city_from_state(jQuery(".wpfh_search_state"));
				
		
		
		
	});
		
    
    

    
    
			 wpfh_set_city_from_state(jQuery(".wpfh_search_state"));
						
		jQuery(".wpfh_search_state").on('change',function(){
		jQuery('.wpfh_search_city option').show();	
			jQuery('.wpfh_search_city').prop('selectedIndex',0);
		
			 wpfh_set_city_from_state(jQuery(".wpfh_search_state"));
				
		
		
		
	});
		




		jQuery('#wpfh_ajax_login_widget_form').on('submit',function(){
		
				
				var form_data = jQuery('#wpfh_ajax_login_widget_form').serialize();
				jQuery.ajax({
				   type: "POST",
				   url:  jQuery('#wpfh_ajax_login_widget_form').attr('action'),
				   data:  form_data,
					success: function(msg){
						 if(msg== 'valid'){
					
						window.location.href = jQuery('#wpfh_ajax_login_widget_form [name="url"]').val();	 
						 }else{
						 jQuery("#wpfh_ajax_login_widget_message").empty().hide().html(msg).slideDown('slow');
						 }
					}
			 
				 });
		
		
		
		return false;
		});


    jQuery('.wpfh-edit-subscribe').bind('click', function () {
			var id = jQuery(this).attr('href');
		  jQuery( "#wpfh_subscription_form_" + id  ).dialog({
			  height: 'auto',
			  width: '650',
			  modal: true,
			   buttons: {
        				"Save Subscription": function() {
						
						jQuery('#wpfh_subscription_form_form_' + id ).submit();
														},
						"Cancel Subscription": function() {
							jQuery("#wpfh_subscription_cancel_" + id).val('1');
						jQuery('#wpfh_subscription_form_form_' + id ).submit();
														}		
			         }
			});
					
			
        return false;
    });
  
  
  

 
 jQuery( document ).on( "submit", ".wpfh-subscribe-obit-form", function() {
   
		var data = $(this).serialize();
		
			
					$.ajax({					
				type: "POST",
				url: wpfh_object.ajax_url,
				data: data,		
				success: function (msg) { 
					var obj = $.parseJSON(msg);
					
					
					alert(obj.message);
					if(obj.error == ''){
					//wpfh_close_modal("subscription");
					}
				}
		
			});	
			
			
        return false;

 });
 
  });

function wpfh_delete_post(div,id){

	jQuery( div ).dialog({
      resizable: false,
	  width: "400",
      height:"auto",
      modal: true,
      buttons: {
        'Delete Post': function() {
			
		jQuery.ajax({
	   type: "GET",
	   url:  jQuery('#wpfh_premium_folder').val() + "/ajax.php?function=delete-post",
	   data: "id="  + id,

	     success: function(msg){


if(msg == 0){
	alert('Error deleting');
}else{
	alert('Deleted!');
	jQuery('.wpfh_post_' + id).slideUp();
}
  			 }

	 });
          jQuery( this ).dialog( "close" );
        },
        Cancel: function() {
          jQuery( this ).dialog( "close" );
        }
      }
    });
	
	return false;
	
}