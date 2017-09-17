/**
 * Global configuration
 */
Router.configure({
    layoutTemplate: 'ApplicationLayout'
})

/**
 * Home page
 */
Router.route('/', function() {
    this.render('home', {to : 'maincontent'});
})

/**
 * Page des professionnels
 */
Router.route('/pros', function() {
    this.render('profesionnels', {to : 'maincontent'})
}, {
    name : 'pros'
})