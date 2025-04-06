let count = 0;
let time ;


$("#start_btn").on("click" , function() {

    let input = prompt("Enter a number : ");
    count = parseInt(input);


    time = setInterval(function () {
        console.log("count");
    
        if (count >= 0) {
            $(".counter").text(count);
            count-- ;
        }   
        else
        {
            clearInterval(time);
        }
     
    }, 1000);
});