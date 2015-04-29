(function(global){
    var homeViewModel,
        app = global.app = global.app || {};
    
    homeViewModel = kendo.data.ObservableObject.extend({
        
        show:function()
        {
            $('#facbookSign').click(function(){
                alert("facebook Login");
            });
            
            $('#googleSign').click(function(){
                alert("google Login");
            });
            
        },
        availabel:function()
        {
            window.googleplus.run();
        }
    });
    
    app.homeService = {
        viewModel : new homeViewModel()
    };
}(window));