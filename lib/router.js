FlowRouter.route('/', {
    action: function() {         
       BlazeLayout.render('layout',{ 
       						menu:'menu',
       						main: 'main',
       						footer:'footer'
       					});
    },
    name: "home"
});
FlowRouter.route('/comprar', {
    action: function() {         
       BlazeLayout.render('layout',{ 
       						menu:'menu',
       						main: 'comprar',
       						footer:'footer'
       					});
    },
    name: "comprar"
});
FlowRouter.route('/vender', {
    action: function() {         
       BlazeLayout.render('layout',{ 
       						menu:'menu',
       						main: 'vender',
       						footer:'footer'
       					});
    },
    name: "comprar"
});