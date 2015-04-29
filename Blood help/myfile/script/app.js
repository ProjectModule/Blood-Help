var app = (function(win){
    'use strict';
    
    var mobileApp;
    
    var ondeviceready = function()
    {        
        window.googleplus = new googleplus();
    };
    
    function googleplus(){}
    googleplus.prototype = {
        run:function()
        {
            alert("plus");
        }
    }
    
    document.addEventListener("deviceready",ondeviceready,false);
    
    mobileApp = new kendo.mobile.Application(document.body,{skin:'flat',initial:'myfile/views/home.html'});
    
    return{
      apps:mobileApp
    };
}(window));