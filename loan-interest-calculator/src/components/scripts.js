(function($) {
$.fn.donetyping = function(callback){
    var _this = $(this);
    var x_timer;    
    _this.keyup(function (){
        clearTimeout(x_timer);
        x_timer = setTimeout(clear_timer, 1000);
    }); 

    function clear_timer(){
        clearTimeout(x_timer);
        callback.call(_this);
    }
}
})(jQuery);





function _support_html5_storage() {
      try {
        return 'localStorage' in window && window['localStorage'] !== null;
      } catch (e) {
        return false;
      }
}

/* set item in local storage */
$("#item").donetyping(function (e){
    if(_support_html5_storage()){
        localStorage.setItem($(this).attr("id"), $(this).val());
    }
});




/*retrive item from local storage*/
if(_support_html5_storage()){
    var _InputRange = $("#item");
    if($.trim( _textarea.val()) == ''){
        var stored_item = localStorage.getItem( _InputRange.attr("id"));
        _InputRange.val(stored_item);
    }
}





