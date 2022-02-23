
        var slideImg = document.getElementById("slideImg");
        var images = new Array(
            "images/slider-1.jpg",
            "images/slider-2.jpg",
            "images/slider-3.jpg",
            "images/slider-4.jpg"
        );
        var len = images.length;
        var i = 0;

        var current = 0; 

        function slider(){
            
            if(current > len - 1){
                current = 0;
            }
            current = images.indexOf(images[current]);
            slideImg.src = images[current];
            current++;
            setTimeout('slider()', 2000);
        };
    
        var leftBtn = document.getElementById('left-btn');
        var rightBtn = document.getElementById('right-btn');

        leftBtn.onclick = function(){
            if(current == 0){
                current = len - 1;
                slideImg.src = images[current];
            }else{
                current--;
                if(current < 0 ){
                    current = len - 1;
                }
                slideImg.src = images[current];
            }
        }

        rightBtn.onclick = function(){
            if(current == len){
                slideImg.src = images[0];
                current = 0;
            }
            current++;
            if(current > len - 1){
                current = 0;
            }   
            slideImg.src = images[current];
        }
        