

/*function makeShaps(top,left){
    return{
    position: absolute;
    height: 10px;
    width: 10px;
    top:top, 
    left: left;
    background-color: rgb(255, 1, 1);
    border-radius: 50%;
    }
}

var shape1Cord=[{top:102px,left:736px},
                {top:434px,left:725px},
                {top:262px,left:1016px},
                {top:497px,left:253px},
                {top:334px,left:139px},
                {top:328px,left:342px},
];

$(document).ready(function(){
    $(".bottom-left").click(function(){
        $(".container").function drawShape(shape1Cord){
            for(var i=0; i>shape1Cord.length; i++){
                var shape[i]=document.createElement("div"+i);
                $(".container").appendChild(shape[i]);
                shape[i].css({"position": "absolute",
                            "height": "10px",
                            "width: 10px",
                            "top":shape1Cord[i].top,
                            "left":shape1Cord[i].left,
                            "background-color": "rgb(255, 1, 1)",
                            "border-radius": "50%"});
        
        
            }
        }
    });
  });
*/

$(document).ready(function(){
    $(".bottom-left").click(function(){

        $(".circle").show();
        $(".circle2").show();
        $(".circle3").show();
        $(".circle4").show();
        $(".circle5").show();
        $(".circle6").show();

        $(".option1").show();
        $(".option2").show();
        $(".option3").show();
        

        
     });
     $(".option3").click(function(){
        $("#nemo").show();
        $("#stars").hide();
        $(".top-left").hide();
        $(".circle").hide();
        $(".circle2").hide();
        $(".circle3").hide();
        $(".circle4").hide();
        $(".circle5").hide();
        $(".circle6").hide();
    });
    $(".option1").click(function(){
        alert("Rong");
    });

    $(".option2").click(function(){
        alert("Rong");
    });
});
