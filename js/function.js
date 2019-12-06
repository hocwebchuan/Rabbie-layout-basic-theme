// Click open next element
var clickFnc = function(selector){
    selector.click(function() {
        var $this = $(this);
        if (!$this.hasClass("active"))
        {
            $this.addClass("active");
            $this.next().addClass("active");
        } else {
            $this.removeClass("active");
            $this.next().removeClass("active");
        }
    });
};