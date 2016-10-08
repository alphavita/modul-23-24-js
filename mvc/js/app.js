requirejs.config({
    paths:{
        'jquery'			: 'vendor/jquery-1.12.3',
        'lodash'			: 'vendor/lodash',
        'Model' 			: 'modules/model',
        'View'  			: 'modules/view',
        'Controller'  : 'modules/controller'
    }
});


require(
	['jquery', 'lodash', 'Model', 'View', 'Controller'],

	function($, _, Model, View, Controller){
		$(function(){
			var startData = ['test'];
		    var model = new Model(startData);
		    var view = new View(model);
		    var controller = new Controller(model, view);
		});

	}
);