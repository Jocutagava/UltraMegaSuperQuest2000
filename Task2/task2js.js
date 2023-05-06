let answer = 







[
    ["гарри поттер", "harry potter", "гаррі поттер"],
    ["губка боб квадратные штаны", "sponge bob square pants", "губка боб квадратні штани"],
    ["пираты карибского моря","pirates of the caribbean", "пірати карибського моря"],
    ["симпсоны","simpsons", "сімпсони"],
   [ "имперский марш","імперський марш", "imperial march"],
    ["король лев","lion king", "король лев"],
   ["холодное сердце","frozen", "холодне серце"],
    ["шрек самбади", "shrek somebody", "шрек самбаді"],
    ["шрек","shrek", "шрек"],
    ["рокки","rocky", "роккі"],
    ["индиана джонс", "indiana jones", "індіана джонс"],
    ["один дома", "home alone", "один вдома"],
    ["терминатор","terminator", "термінатор"],
    ["назад в будущее", "back to future", "назад в майбутнє"],
    ["охотники за приведениями","ghost busters", "мисливці за привидами"]
]








let time = 0;
let was = [];
let progress = 0;
let num = Math.floor(1 + Math.random() * 15)
$(document).ready(function(){
    $(".nextTask").hide()
    $(".block2").hide()
    $(".sound").hide()

    $(".block1").click(function(){
        $(".block2").slideToggle(400)
    })

    $(".progress").knob({
        'min' : 0,
        'max' : 10,
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
        'fgColor' : 'blue',		
         'bgColor': 'lightBlue'
        

    })

    $(".progressTime").knob({
        'min' : 0,
        'max' : 300,
        'step' : 1,
        'angleOffset': 0,
        'angleArc':360,
        'readOnly':false,
        'rotation':'clockwise',
        'thickness':0.2,
        'lineCap' : 'round',
        'width':200,
        
        'displayInput' : false,
        'displayPrevious':false,
        'fgColor' : 'blue',		
         'bgColor': 'lightBlue'
       

    })

    $(".start").click(function(){
       
        $(".sound").show()
        $(".start").hide()
        startRebus(num)
        setInterval(timer, 1000)
    })

    

    $("#button").click(function(){
        if($("#answer").val().toLowerCase() == `${answer[num - 1][0]}` 
            || $("#answer").val().toLowerCase() == `${answer[num - 1][1]}` 
            || $("#answer").val().toLowerCase() == `${answer[num - 1][2]}`){
            $("#answer").val("");
            progress++;
            $(".progress").val(progress).trigger('change');
            was.push(num);

            if(progress < 10){
                do{
                    num = Math.floor(1 + Math.random() * 15)
                }while(was.includes(num))
                startRebus(num)

            }
            else{
            //    $("#reb").hide();
            //    $(".answerInput").hide()
               $(".nextTask").show()
               time = time;
               $(".sound").hide()

            }
            
    

    }
    
})




})
function startRebus(arg){
    $("#melody").attr("src",`/task2/sound/${arg}.mp3` )
    }

function timer(){
    time++
    $(".seconds").val(time).trigger("change");
}    

   