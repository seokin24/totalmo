$(function(){

    var speed=5000;

    /*************** �섏씠�� ��/�꾩썐 ******************/

    $('#slideWrap1 .slideList').find('.slideA:gt(0)').fadeOut();

    var end1=setInterval(function(){
        $('#slideWrap1 .slideList').find('.slideA:first').stop().fadeOut(speed)
                                   .next()
                                   .fadeIn(speed)
                                   .end()
                                   .appendTo('#slideWrap1 .slideList')
    }, speed)

    /************** �щ씪�대뱶 醫�/or �� *****************/

    var moveX=0;
    var slideW=$('#slideWrap2').width();

    $('#slideWrap2 .slideList').children('.slideA:last').insertBefore($('#slideWrap2 .slideList').children('.slideA:first'));
    $('#slideWrap2 .slideList').css('left',-slideW);
    $('#slideWrap2 .slideList').css('transition','transform 2s');

    function slideLeft() {

        $('#slideWrap2 .slideList').css('transform','translateX('+moveX+'px)');
        $('#slideWrap2 .slideList').children('.slideA:first').insertAfter($('#slideWrap2 .slideList').children('.slideA:last'));
        $('#slideWrap2 .slideList').css('left',-moveX-slideW);

    }

    var end2=setInterval(function(){

        moveX+=-slideW;
        slideLeft();

    }, speed);

    /************** �щ씪�대뱶 醫�/or �� *****************/

    var moveX2=0;
    var slideW2=$('#slideWrap2').width();

    $('#slideWrap5 .slideList').children('.slideA:last').insertBefore($('#slideWrap5 .slideList').children('.slideA:first'));
    $('#slideWrap5 .slideList').css('left',-slideW2);
    $('#slideWrap5 .slideList').css('transition','transform 2s');

    function slideLeft2() {

        $('#slideWrap5 .slideList').css('transform','translateX('+moveX2+'px)');
        $('#slideWrap5 .slideList').children('.slideA:first').insertAfter($('#slideWrap5 .slideList').children('.slideA:last'));
        $('#slideWrap5 .slideList').css('left',-moveX2-slideW2);

    }

    var end2=setInterval(function(){

        moveX2+=-slideW2;
        slideLeft2();

    }, speed);

    var mobilemoveX=0;
    var mobileslideW=$('#mobileslideWrap').width();

    $('#mobileslideWrap .slideList').children('.slideA:last').insertBefore($('#mobileslideWrap .slideList').children('.slideA:first'));
    $('#mobileslideWrap .slideList').css('left',-mobileslideW);
    $('#mobileslideWrap .slideList').css('transition','transform 2s');

    function slideLeft3() {

        $('#mobileslideWrap .slideList').css('transform','translateX('+mobilemoveX+'px)');
        $('#mobileslideWrap .slideList').children('.slideA:first').insertAfter($('#mobileslideWrap .slideList').children('.slideA:last'));
        $('#mobileslideWrap .slideList').css('left',-mobilemoveX-mobileslideW);

    }

    var mobileend2=setInterval(function(){

        mobileslideW+=-mobileslideW;
        slideLeft3();

    }, speed);

    /************** �щ씪�대뱶 ��/or �� *****************/

    var moveY=0;
    var slideH=$('#slideWrap3').height();

    $('#slideWrap3 .slideList').children('.slideA:last').insertBefore($('#slideWrap3 .slideList').children('.slideA:first'));
    $('#slideWrap3 .slideList').css('top',-slideH);
    $('#slideWrap3 .slideList').css('transition','transform 2s');

    function slideTop() {

        $('#slideWrap3 .slideList').css('transform','translateY('+moveY+'px)');
        $('#slideWrap3 .slideList').children('.slideA:first').insertAfter($('#slideWrap3 .slideList').children('.slideA:last'));
        $('#slideWrap3 .slideList').css('top',-moveY-slideH);

    }

    var end3=setInterval(function(){

        moveY+=-slideH;
        slideTop();

    }, speed);

    /************** �щ씪�대뱶 ��/or �� *****************/

    var moveY2=0;
    var slideH2=$('#slideWrap4').height();

    $('#slideWrap4 .slideList').children('.slideA:last').insertBefore($('#slideWrap4 .slideList').children('.slideA:first'));
    $('#slideWrap4 .slideList').css('top',-slideH2);
    $('#slideWrap4 .slideList').css('transition','transform 2s');

    function slideTop2() {

        $('#slideWrap4 .slideList').css('transform','translateY('+moveY2+'px)');
        $('#slideWrap4 .slideList').children('.slideA:first').insertAfter($('#slideWrap4 .slideList').children('.slideA:last'));
        $('#slideWrap4 .slideList').css('top',-moveY2-slideH2);

    }

    var end3=setInterval(function(){

        moveY2+=-slideH2;
        slideTop2();

    }, speed);

});
