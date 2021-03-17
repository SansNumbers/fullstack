let imag = 0

!function(window){
    var $q = function(q, res){
          if (document.querySelectorAll) {
            res = document.querySelectorAll(q);
          } else {
            var d=document
              , a=d.styleSheets[0] || d.createStyleSheet();
            a.addRule(q,'f:b');
            for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
              l[b].currentStyle.f && c.push(l[b]);

            a.removeRule(0);
            res = c;
          }
          return res;
        }
      , addEventListener = function(evt, fn){
          window.addEventListener
            ? this.addEventListener(evt, fn, false)
            : (window.attachEvent)
              ? this.attachEvent('on' + evt, fn)
              : this['on' + evt] = fn;
        }
      , _has = function(obj, key) {
          return Object.prototype.hasOwnProperty.call(obj, key);
        }
      ;

    function loadImage (el, fn) {
      var img = new Image()
        , src = el.getAttribute('data-src');
      img.onload = function() {

        if (!! el.parent) {

            el.parent.replaceChild(img, el)
        } else {
            if (el.classList.contains('lazy') && el.src != src) {
                imag++
                document.getElementById('stat').innerHTML = imag + ' images loaded from 20'
                if (imag == 20) {
                    document.getElementById('stat').style.backgroundColor = 'green'
                    setTimeout(function(){
                        document.getElementById('stat').remove()

                    }, 3000)
                }
            }

            el.src = src;
            el.classList.remove('lazy')
        }

        fn? fn() : null;
      }



        img.src = src;
    }

    function elementInViewport(el) {
      var rect = el.getBoundingClientRect()

      return (
         rect.top    >= 0
      && rect.left   >= 0
      && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      )
    }

      var images = new Array()
        , query = $q('img.lazy')
        , processScroll = function(){
            for (var i = 0; i < images.length; i++) {
              if (elementInViewport(images[i])) {
                loadImage(images[i], function () {

                  images.splice(i, i);
                });
              }
            };
          }
        ;

      for (var i = 0; i < query.length; i++) {
        images.push(query[i]);

      };

      processScroll();
      addEventListener('scroll',processScroll);
  }(this);
