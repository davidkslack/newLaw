New Law
========

Plugin to add a small bar at the bottom of the site with a link to the Cookie policy.
The bar is only visible if the cookie is not set.
The bar will retract after 8 seconds
Once the bar has retracted an agreement cookie is set to true and the bar will not show again.

This plugin reqires jQuery 1.4 or higher

By David Slack for Smiling Wolf 29 May 2012

To use simply add to the body like $('body').newLaw();
Options:
	location 			: 'bottom', // Where the bar is located 'top' or 'bottom'
	policyLink			: '/content/privacy#cookie', // Link to the cookie law policy eg '/content/privacy#cookie'
	timer				: true, // Should we have a timer on the bar
	timerMiliseconds	: 8000, // How long should the timer last
	cookieLasts			: 396, // How long should the timer last
	barText				: 'By using this website you agree to our ', // NB there is a space at the end
	policyLinkTitle		: 'See more information on our cookie policy', // Title used on the policy link
	barCloseText		: 'Close' // Button to get rid of the bar
	
So add this to your head and add the js and css files to your root directory

<link rel="stylesheet" type="text/css" href="/jquery.new-law.css"/>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/jquery.new-law.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$('body').newLaw({
				location 			: 'bottom', // Where the bar is located 'top' or 'bottom'
				policyLink			: '/content/privacy#cookie', // Link to the cookie law policy eg '/content/privacy#cookie'
				timer				: true, // Should we have a timer on the bar
				timerMiliseconds	: 8000, // How long should the timer last
				cookieLasts			: 396, // How long should the timer last
				barText				: 'By using this website you agree to our ', // NB there is a space at the end
				policyLinkTitle		: 'See more information on our cookie policy', // Title used on the policy link
				barCloseText		: 'Close' // Button to get rid of the bar
		});
	});
</script>

Any problems or just want to say thanks comment me on http://www.davidslack.co.uk or https://github.com/davidkslack/newLaw