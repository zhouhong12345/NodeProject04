var $divPicture = (function () {
    var html = '' 
        + '<div class="slider" id="slider">'
          + '<div class="slide"><img src="img/b5.png" alt=""></div>'
          + '<div class="slide"><img src="img/b1.png" alt=""></div>'
          + '<div class="slide"><img src="img/b2.png" alt=""></div>'
          + '<div class="slide"><img src="img/b3.png" alt=""></div>'
          + '<div class="slide"><img src="img/b4.png" alt=""></div>'
          + '<div class="slide"><img src="img/b5.png" alt=""></div>'
          + '<div class="slide"><img src="img/b1.png" alt=""></div>'
        + '</div>'
        +'<span id="left"><</span>'
        +'<span id="right">></span>'
        +'<ul class="nav" id="navs">'
          +'<li>1</li>'
          +'<li>2</li>'
          +'<li>3</li>'
          +'<li>4</li>'
          +'<li>5</li>'
        +'</ul>',
        $big=$('#box'),
        $h=$(html),
        $inner=$('#slider'),
        index=1;

    $big.append($h);

    function next(){
        index++;
        $('#slider').animate({left:-1200*index},function(){
            if(index==6){
                // slider.style.left='-1200px';
                $('#slider').attr('style','left:-1200px');
                index=1;
            }
        })
        navchange();
    }
    var timer=setInterval(next, 3000);
    function prev(){
        index--;
        $('#slider').animate({left:-1200*index},function(){
            if(index==0){
                //slider.style.left='-6000px';
                $('#slider').attr('style','left:-6000px');
                index=5;
            }
        })
        navchange();
    }
    
    for(var k=0;k<$('#navs').children().length;k++){
        $('#navs').children()[k].idx=k;
        $('#navs').children()[k].onclick=function(){
            index=this.idx+1;
            $('#slider').animate({left:-1200*index});
            navchange();
        }
    }

    $('#navs').children()[0].className='active'
    function navchange(){
        for(var i=0;i<$('#navs').children().length;i++){
            $('#navs').children()[i].className='';
        }
        if(index==6){
            $('#navs').children()[0].className='active'
            
        }else if(index==0){
            $('#navs').children()[4].className='active'
        }else{
            $('#navs').children()[index-1].className='active'
        }
    }
    
    $('#box').mouseover(function(){
        clearInterval(timer);
        $('#left').stop(true,false).animate({opacity:'0.5'});
        $('#right').stop(true,false).animate({opacity:'0.5'});
    })
    $big.mouseout(function(){
        $('#left').stop(true,false).animate({opacity:'0'});
        $('#right').stop(true,false).animate({opacity:'0'});
        timer=setInterval(next,3000)
    })
   
    $('#left').click(function(){
        prev()
    })
    $('#right').click(function(){
        next();
    })

    // return{
    //   next,prev
    // };
    
}());

