let cards = [
    {
      name: "php",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
      id: 1,
    },
    {
      name: "css3",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
      id: 2
    },
    {
      name: "html5",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
      id: 3
    },
    {
      name: "jquery",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
      id: 4
    }, 
    {
      name: "javascript",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
      id: 5
    },
    {
      name: "node",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
      id: 6
    },
    {
      name: "photoshop",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
      id: 7
    },
    {
      name: "python",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
      id: 8
    },
    {
      name: "rails",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
      id: 9
    },
    {
      name: "sass",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
      id: 10
    },
    {
      name: "sublime",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
      id: 11
    },
    {
      name: "wordpress",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
      id: 12
    }
  ];
let firstCard = null
let secondCard = null
let time = 0;
let was = [];
let progress = 0;
let num = Math.floor(1 + Math.random() * 15)
$(document).ready(function(){
    $(".nextTask").hide()
    $(".block2").hide()
    $(".boards").hide()

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
        'thickness':0.3,
        'lineCap' : 'round',
        'width':200,
        
        'displayInput' : true,
        'displayPrevious':false,
        'fgColor' : 'green',		
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
        'thickness':0.3,
        'lineCap' : 'round',
        'width':200,
        
        'displayInput' : false,
        'displayPrevious':false,
        'fgColor' : 'green',		
         'bgColor': 'lightBlue'
       

    })

    $(".start").click(function(){
        $(".start").hide()
        $(".boards").css('display', 'grid' )
        // $(".board").on('click', cardClicked);
        fillBoard();
        $(".board").on('click', cardClicked);
        
        
        setInterval(timer, 1000)
    })

    

    
    
})





function startRebus(arg){
    $("#melody").attr("src",`/task2/sound/${arg}.mp3` )
    }

function timer(){
    time++
    $(".seconds").val(time).trigger("change");
}   
function fillBoard(){
 let fillBoard = shuffle([...cards, ...cards]);
 for (let i = 0; i < fillBoard.length; i++) {
   let cardHTML = `<div class="board" data-id="${fillBoard[i].id}">
   <div class="front">ROBOCODE</div> 
   <div class="back"> <img src="${fillBoard[i].img}" alt="${fillBoard[i].name}"></div>
   

    </div>`;
     $(".boards").append(cardHTML);
    
 }
}

function shuffle(array){

    let counter = array.length;
  
    let temp;
  
    let index;
  
     // While there are elements in the array
  
     while (counter > 0) {
  
    // Pick a random index
  
    index = Math.floor(Math.random() * counter);
  
    // Decrease counter by 1
  
    counter--;
  
    // And swap the last element with it
  
    temp = array[counter];
  
    array[counter] = array[index];
  
    array[index] = temp;
  
    }
  
    return array;
  
  }
  function cardClicked(event){
    if(secondCard || $(this).hasClass('matched')){
        return
    }
    if(!firstCard){
        firstCard = $(this);
        firstCard.addClass('flip');
        return
    }
    if(firstCard){
        secondCard = $(this);
        secondCard.addClass('flip');
        if(firstCard.attr('data-id') == secondCard.attr('data-id') ){
            firstCard.addClass('matched');
            secondCard.addClass('matched');
            firstCard = null
            secondCard = null
            progress++
            $(".progress").val(progress).trigger('change');
            if(progress == 12){
                //win();
                $(".nextTask").show()
                $(".boards").hide()
            }
            return
        }
        else{
            setTimeout(function(){
                firstCard.removeClass('flip');
                secondCard.removeClass('flip');
                firstCard = null
                secondCard = null


            },600)
        }
    }


  }

