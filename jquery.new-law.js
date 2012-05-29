/**
 * Plugin to add a small bar at the bottom of the site with a link to the Cookie policy
 * The bar is only visible if the cookie is not set or set to false
 * The bar will retract after 30 seconds
 * Once the bar has retracted an agreement cookie is set to true and the bar will not show again
 *
 * This plugin reqires jQuery 1.4 or higher
 * 
 * By David Slack for Smiling Wolf 29 May 2012
 *
 * To use simply add to the body like $('body').newLaw();
 * Options include
 * 'location' which is where the bar is located 'top' or 'bottom'
 * 'policyLink' which is the link to the cookie law policy eg '/content/privacy#cookie'
 */
 
(function($)
{
	$.fn.newLaw = function(options)
	{
		// Set the cookie
			function newLaw_setCookie()
			{
				var c_name = 'newLaw_cookie'
				var value = 'true';
				var exdays = 396;
				
				var exdate=new Date();
				exdate.setDate(exdate.getDate() + exdays);
				var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
				document.cookie=c_name + "=" + c_value;
			}
		
		// Get the cookie
			function newLaw_getCookie(c_name)
			{
				var i,x,y,ARRcookies=document.cookie.split(";");
				for (i=0;i<ARRcookies.length;i++)
				{
					x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
					y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
					x=x.replace(/^\s+|\s+$/g,"");
					
					if (x==c_name)
					{
						return unescape(y);
					}
				}
			}
			
		// Fade the bar in
			function newLaw_fadeIn()
			{
				$('.newLaw_bar').fadeIn('slow');
			}
		
		// Fade the bar out
			function newLaw_fadeOut()
			{
				//setTimeout("$('.newLaw_bar').fadeOut('slow');",5000);
				$('.newLaw_bar').fadeOut('slow');
			}
		
		// Create the options to use
			var defaults =
			{
				'location' 			: 'bottom',
				'policyLink' 		: '/content/privacy#cookie'
			};			
			var options = $.extend(defaults, options);
			
		// Create teh bar to add
			var newLaw_bar = $('<div class="newLaw_bar">')
				.html('By using this website you agree to our <a href="' + options.policyLink + '" title="See more information on our cookie policy">cookie policy</a>')
				.append('<a class="accept" href="#">accept</a>');
		
		// Make sure we put a bar on each element only if the cookie isn't set
			newLaw_getCookieValue = newLaw_getCookie('newLaw_cookie');
			if(newLaw_getCookieValue != 'true')
			{
				
				return this.each(function()
				{
					// Add the bar to the end of this element
						$(this).append(newLaw_bar);
						
					// Put it to the top or bottom
						if(options.location == 'bottom')
						{
							$('.newLaw_bar').css('bottom',0);
						}
						else
						{
							$('.newLaw_bar').css('top',0);						
						}
						
					// Fade in the bar
						newLaw_fadeIn();
			
					// On click of accept
						$('.newLaw_bar a.accept').click(function()
						{
							newLaw_fadeOut();
							newLaw_setCookie();
							return false;
						});
						
					// Click accept after 5 seconds
						setTimeout("$('.newLaw_bar a.accept').click();",8000);
				});
			}		
	};
})(jQuery);