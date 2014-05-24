head.js(
    // Plugins
    { modernizr: "/javascripts/lib/modernizr.custom.78122.js"},
    { jQuery: "/javascripts/lib/jquery-1.9.1.js" },
    { CanJS: "/javascripts/lib/can.min.js" },
    { Moment: "/javascripts/lib/moment.min.js" },
    { MomentTwitter: "/javascripts/lib/moment.twitter.js" },
    { OwlCarousel: "/javascripts/bower_components/owlcarousel/owl-carousel/owl.carousel.min.js" },

    // Core
    { app: "/javascripts/index.js" },
    { router: "/javascripts/router.js" },
    { models: "/javascripts/models.js" },

    // Controllers
    { IndexController: "/javascripts/controllers/IndexController.js" },

    function() {
        new Stout();
        new Routing();
        new IndexController('#main');

        // Load FB
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=284631455003985";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Load Twitter
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

        // Load UserVoice widget
        // Include the UserVoice JavaScript SDK (only needed once on a page)
        UserVoice=window.UserVoice||[];(function(){var uv=document.createElement('script');uv.type='text/javascript';uv.async=true;uv.src='//widget.uservoice.com/chz2Ukwux8rMkYL2lB1FEg.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();

        //
        // UserVoice Javascript SDK developer documentation:
        // https://www.uservoice.com/o/javascript-sdk
        //

        // Set colors
        UserVoice.push(['set', {
          accent_color: '#5bb8ff',
          trigger_color: 'white',
          trigger_background_color: 'rgba(46, 49, 51, 0.6)'
        }]);

        // Identify the user and pass traits
        // To enable, replace sample data with actual user traits and uncomment the line
        UserVoice.push(['identify', {
          //email:      'john.doe@example.com', // User’s email address
          //name:       'John Doe', // User’s real name
          //created_at: 1364406966, // Unix timestamp for the date the user signed up
          //id:         123, // Optional: Unique id of the user (if set, this should not change)
          //type:       'Owner', // Optional: segment your users by type
          //account: {
          //  id:           123, // Optional: associate multiple users with a single account
          //  name:         'Acme, Co.', // Account name
          //  created_at:   1364406966, // Unix timestamp for the date the account was created
          //  monthly_rate: 9.99, // Decimal; monthly rate of the account
          //  ltv:          1495.00, // Decimal; lifetime value of the account
          //  plan:         'Enhanced' // Plan name for the account
          //}
        }]);

        // Add default trigger to the bottom-right corner of the window:
        UserVoice.push(['addTrigger', { mode: 'contact', trigger_position: 'bottom-right' }]);

        // Or, use your own custom trigger:
        //UserVoice.push(['addTrigger', '#id', { mode: 'contact' }]);

        // Autoprompt for Satisfaction and SmartVote (only displayed under certain conditions)
        UserVoice.push(['autoprompt', {}]);
    }
);