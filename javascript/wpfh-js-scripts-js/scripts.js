function wpfh_form_to_json(form){
    var array = form.serializeArray();
    var json = {};
    
    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });
    
    return json;
}



function wpfh_close_modal(modal){

jQuery(".wpfhmodal-close").trigger('click');
	
	
}
function wpfh_open_modal(modal){
	


var inst = jQuery('[data-wpfhmodal-id='+ modal +']').wpfhmodal();


inst.open();	
	
}

function wpfh_dialog(title,div,w,h){
	
	 jQuery(div).dialog({
		 	title: title,
		 	width: w,
            height: h
        });
}


function wpfh_message_button_type(type) {


    jQuery('.wpfh_message_button').removeClass('selected');
    jQuery('.wpfh_photo_button').removeClass('selected');
    jQuery('.wpfh_youtube_button').removeClass('selected');
    jQuery('.' + type).addClass('selected');
    jQuery('.wpfh_message_form_fields').hide();
    jQuery('.' + type + '_form').show();


    if (type == 'wpfh_message_button') {
        jQuery('#wpfh_mode').val('guestbook');
    }
    if (type == 'wpfh_photo_button') {
        jQuery('#wpfh_mode').val('photo');
    }
    if (type == 'wpfh_youtube_button') {
        jQuery('#wpfh_mode').val('youtube');
    }
}

function wpfh_message_button(type) {


    jQuery('#wpfh_message_icons a').removeClass('selected');
  
  
  
    jQuery('.' + type).addClass('selected');
    jQuery('.wpfh_message_form_fields').hide();
    jQuery('.' + type + '_form').show();


    if (type == 'wpfh_message_button') {
        jQuery('#wpfh_mode').val('guestbook');
    }
    if (type == 'wpfh_photo_button') {
        jQuery('#wpfh_mode').val('photo');
    }
    if (type == 'wpfh_youtube_button') {
        jQuery('#wpfh_mode').val('youtube');
    }
	 if (type == 'wpfh_link_button') {
        jQuery('#wpfh_mode').val('link');
    }
}
jQuery(document).ready(function($){
	

     $('.wpfh-color-picker').wpColorPicker();
    
    $( document ).on( "click", ".wpfh_open_modal", function() {
		
		var modal_name = $(this).attr('data-modal');
	
		var inst = $('[data-wpfhmodal-id='+modal_name+']').wpfhmodal();
		inst.open();
					
		
		return false;
	});
    
	
	var options = {}
	$('.wpfh_obit .wpfh_obit_inner').matchHeight(options);
	$('.wpfh_obit_thumbnail .wpfh_obit_inner').matchHeight(options);
	$('.wpfh_obit_list .wpfh_obit_inner').matchHeight(options);
	
	
	$(".wpfh-mobile-menu").on("click",function(){
		
		 $("#wpfh-alternate-header").slideToggle();
		return false;
	});
	
	jQuery("#subscribe-widget-button").on("click", function(){
			var data = {
				"action": "wpfh_save_subscriber",
				"email": jQuery("#wpfh_subscribe_email").val(),
				"name": jQuery("#wpfh_subscribe_name").val()
				
			};
			// We can also pass the url value separately from ajaxurl for front end AJAX implementations
			jQuery.post(ajax_object.ajax_url, data, function(response) {
				if(response != ""){
				jQuery(".wpfh_subscribe_message").html('<div class="wpfh_error">' + response  + '</div>');	
				}else{
				jQuery(".wpfh_subscribe_message").html('<div class="wpfh_success">Thank you for subscribing!</div>');		
				}
			});

		return false;
	});
	
	
	
	jQuery('a.wpfh_colorbox').colorbox();	
jQuery('a.wpfh_gallery').colorbox({rel:'gallery', transition:"fade", maxWidth:"700px", maxHeight:"700px"});	
	
jQuery("#wpfh_tabs").tabs();
});
jQuery(function () {

   jQuery('.wpfh-printer').bind('click', function () {
       jQuery('#wpfh_main_obit').printThis();
    
        return false;
    });



    
    jQuery('.wpfh_upload_form').bind('submit', function () {

        var mode = jQuery('#wpfh_mode').val();


	if(jQuery('#guest_name').val() == ''){
		alert("Please enter your name");
                return false;
	}
	if(jQuery('#guest_email').val() == ''){
		alert("Please enter your email");
                return false;
	}

        if (mode == 'guestbook') {
            if (jQuery('#wpfh_message_textarea').val() == '') {
                alert("Please enter your message");
                return false;
            } else {
                return true;
            }

        }
        if (mode == 'photo') {
            if (jQuery('#wpfh_message_file').val() == '') {
                alert("Please upload a photo");
                return false;
            } else {
                return true;
            }

        }
        if (mode == 'youtube') {


            var matches = jQuery('#wpfh_message_youtube').val().match(/^(https?:\/\/)?([^\/]*\.)?youtube\.com\/watch\?([^]*&)?v=\w+(&[^]*)?/i);

            if (jQuery('#wpfh_message_youtube').val() == '' || matches == null) {
                alert("Please paste a valid youtube link");
                return false;
            } else {
                return true;
            }

        }
		 if (mode == 'link') {


           

            if (jQuery('#wpfh_message_link').val() == '' ) {
                alert("Please paste a valid  link");
                return false;
            } else {
                return true;
            }

        }
        return false;
    });

    jQuery('.wpfh_popup').bind('click', function () {

        window.open(jQuery(this).attr('href'), '1350057650603', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=0,left=0,top=0');
        return false;
    });


    jQuery(".datepicker").datepicker({


        dateFormat: "yy-mm-dd",
        changeMonth: true,
        yearRange: '1850:2050',
        changeYear: true

    });

   jQuery(".datepicker_new").datepicker({


        dateFormat: "mm-dd-yy",
        changeMonth: true,
        yearRange: '1850:2050',
        changeYear: true

    });

});





jQuery(function($) {
    //  jQueryUI 1.10 and HTML5 ready
    //      http://jqueryui.com/upgrade-guide/1.10/#removed-cookie-option 
    //  Documentation
    //      http://api.jqueryui.com/tabs/#option-active
    //      http://api.jqueryui.com/tabs/#event-activate
    //      http://balaarjunan.wordpress.com/2010/11/10/html5-session-storage-key-things-to-consider/
    //
    //  Define friendly index name
    var index = 'key';
    //  Define friendly data store name
    var dataStore = window.sessionStorage;
    //  Start magic!
    try {
        // getter: Fetch previous value
        var oldIndex = dataStore.getItem(index);
    } catch(e) {
        // getter: Always default to first tab in error state
        var oldIndex = 0;
    }
    $('#settings-tabs').tabs({
        // The zero-based index of the panel that is active (open)
        active : oldIndex,
        // Triggered after a tab has been activated
        activate : function( event, ui ){
            //  Get future value
            var newIndex = ui.newTab.parent().children().index(ui.newTab);
            //  Set future value
            dataStore.setItem( index, newIndex ) 
        }
    }); 
    }); 
	
	
	
	
jQuery(function($) {
    //  jQueryUI 1.10 and HTML5 ready
    //      http://jqueryui.com/upgrade-guide/1.10/#removed-cookie-option 
    //  Documentation
    //      http://api.jqueryui.com/tabs/#option-active
    //      http://api.jqueryui.com/tabs/#event-activate
    //      http://balaarjunan.wordpress.com/2010/11/10/html5-session-storage-key-things-to-consider/
    //
    //  Define friendly index name
    var index = 'key';
    //  Define friendly data store name
    var dataStore = window.sessionStorage;
    //  Start magic!
    try {
        // getter: Fetch previous value
        var oldIndex = dataStore.getItem(index);
    } catch(e) {
        // getter: Always default to first tab in error state
        var oldIndex = 0;
    }
    $('#obit-tabs').tabs({
        // The zero-based index of the panel that is active (open)
        active : oldIndex,
        // Triggered after a tab has been activated
        activate : function( event, ui ){
            //  Get future value
            var newIndex = ui.newTab.parent().children().index(ui.newTab);
            //  Set future value
            dataStore.setItem( index, newIndex ) 
        }
    }); 
    }); 
	
	
	
	
	
