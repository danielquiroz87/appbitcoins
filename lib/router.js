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
    name: "vender"
});
FlowRouter.route('/anuncios', {
    action: function() {         
       BlazeLayout.render('layout',{ 
                  menu:'menu',
                  main: 'anuncios',
                  footer:'footer'
                });
    },
    name: "anuncios"
});
FlowRouter.route('/foros', {
    action: function() {         
       BlazeLayout.render('layout',{ 
                  menu:'menu',
                  main: 'foros',
                  footer:'footer'
                });
    },
    name: "foros"
});
FlowRouter.route('/ayuda', {
    action: function() {         
       BlazeLayout.render('layout',{ 
                  menu:'menu',
                  main: 'ayuda',
                  footer:'footer'
                });
    },
    name: "ayuda"
});