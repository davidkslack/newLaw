New Law
========

Plugin to add a small bar at the bottom of the site with a link to the Cookie policy
The bar is only visible if the cookie is not set or set to false
The bar will retract after 30 seconds
Once the bar has retracted an agreement cookie is set to true and the bar will not show again

This plugin reqires jQuery 1.4 or higher

By David Slack for Smiling Wolf 29 May 2012

To use simply add to the body like $('body').newLaw();
Options include
'location' which is where the bar is located 'top' or 'bottom'
'policyLink' which is the link to the cookie law policy eg '/content/privacy#cookie'