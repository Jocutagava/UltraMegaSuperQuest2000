let answer = ["яблоко", "груша","город","школа","сайт","браузер","плагин","цвет","стиль","язык","узор","сорока",]

let was = [];
let progress = 0;
let num = Math.floor(1 + Math.random() * 12)
$(document).ready(function(){
    $(".nextTask").hide()
    $(".block2").hide()
    $(".block1").click(function(){
        $(".block2").slideToggle(400)
    })

    $(".progress").knob({
        'min' : 0,
        'max' : 5,
        'step' : 1,
        'angleOffset': 300,
        'angleArc':122,
        'readOnly':true,
        'rotation':'clockwise',
        'thickness':0.2,
        'lineCap' : 'round',
        'width':200,
        
        'displayInput' : true,
        'displayPrevious':false,
        'fgColor' : 'red',		
         'bgColor': 'grey',
        

    })

  


    startRebus(num)

    $("#button").click(function(){
       
    
        if($("#answer").val().toLowerCase() == `${answer[num - 1]}`){
            alertify.success("Right Answer!")
            $("#answer").val("");
            progress++;
            $(".progress").val(progress).trigger('change');
            was.push(num);

            if(progress < 5){
                do{
                    num = Math.floor(1 + Math.random() * 12)
                }while(was.includes(num))
                startRebus(num)

            }
            else{
            //    $("#reb").hide();
            //    $(".answerInput").hide()
            
               $(".nextTask").show()

            }

        }
        else{
            alertify.error("Wrong Answer! Try again")
        }

    })



})
function startRebus(arg){
$("#reb").attr("src",`/task1/rebuses/${arg}.jpg` )
}

