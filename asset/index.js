define([],function(){
  return {
    init:function($mod){
      var $nav=$mod.children('.J_nav');
      var items=$nav.children('em');


      var scrolled=false;
      $nav.on('scroll',function(){
        //console.log('12')
        scrolled=true
      });
      $('body').on('mouseup touchend',function(e){
        if(scrolled){
          scrolled=false;

          var width=$nav.width();
          var mostNearRect=null;
          var lastMin=width;

          items.each(function(i,el){
            //console.log(el)
            var rect=el.getBoundingClientRect();
            //中线最近
            var mid=Math.abs( (rect.right-rect.left)/2+rect.left - width );
            if(lastMin > mid ){
              mostNearRect=rect;
              lastMin=mid;
              //console.log(i)
            }


          });
          //console.log(mostNearRect)
          if(mostNearRect){//以左为准或以右?
              $nav[0].scrollLeft+=mostNearRect.right-width


          }


        }
      })


    }
  }
})
