$(function(){
    $('.threetemp-body').slick({
        slidesToShow: 3,
        slideToScroll:1,
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });

      $('#searchbtn').click(function(){
        if($('.searchinput').hasClass('act')){
            $('.searchinput').removeClass('act');
        }else{
            $('.searchinput').addClass('act');
            $('.searchinput input').focus();
        }
      });

      $('#search-city').on('keypress', function(e){
        if(e.which==13 && !e.shiftKey){
            const key = $(this).val();
            console.log(key);
            $(this).val('');
            $('.searchinput').removeClass('act');

        }
      });

    });

      function getWeatherLocation(){
        navigator.geolocation.getCurrentPosition(
            onWeatherSuccess, onWeatherError, {enableHighAccuracy : true}
        );
      }
      const onWeatherSuccess = function(position) {
        Lat = position.coords.latitude;
        Lon = position.coords.longitude;
        console.log(lat, lon);
      }
