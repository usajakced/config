		
		
		
	function wpfh_agency_subscription_popup(id){
		
    jQuery( "#wpfh_subscribe_" + id ).dialog({
      resizable: false,
	  width:600,
      height:'auto',
      modal: true,
      buttons: {
        "Save Subscription": function() {
			
					
					jQuery.ajax({
				url: jQuery('#wpfh_agency_ajax_url').val() + '?function=save-subscription' ,
				type: "post",
				data : jQuery( "#wpfh_subscribe_submit_" + id ).serialize(),			
				success: function(msg){
				   jQuery("#wpfh_subscribe_" + id ).dialog( "close" );
						
							 jQuery("<div class='wpfh_confirmation'>Subscription settings saved!</div>").dialog({
							  resizable: false,
							  width:600,
							  height:'auto',
							  modal: true,
							   buttons: {
								 Ok: function() {
								 jQuery( '.wpfh_confirmation').dialog( "close" );
								}   
							   }
							 });
				  
				
				},
				error:function(){
					alert("failure");
				   
				}
			});
					
			
			
			
          
        },
        Cancel: function() {
          jQuery( this ).dialog( "close" );
        }
      }
    });
	}
			
			
			function wpfh_agency_ajax(url,update_div){
				
					jQuery.ajax({
				url: url,
				type: "post",				
				success: function(msg){
				   jQuery(update_div).html(msg);
				},
				error:function(){
					alert("failure");
				   
				}
			});
			
				
				
			}