//tewo mero finish
//button haru
//color change winign color change
//

var dc=0;
var score , activeplayer , round , tick;
var player1 , player2;
    var cbk;
   var  arr=[];
    var  testarr;
    var nameentercheck;
var c1,c2,c3,c4,c5,c6,c7,c8,c9;

  fun();

  function fun(){
      console.log(arr.length)
    nameentercheck=0;
cbk=1;
      arr=[];
    round =0 ;
    activeplayer =0;
    console.log(activeplayer)
      tick = "X";
      console.log("hello world");
     document.querySelector('.win').classList.remove('winning');
     document.querySelector('.win').classList.remove('winner');

     document.querySelector('.pvs').textContent= '';
     document.querySelector('.win').textContent= '';
     document.getElementById('bu1').textContent= '';
     document.getElementById('bu2').textContent= '';
     document.getElementById('bu3').textContent= '';
     document.getElementById('bu4').textContent= '';
     document.getElementById('bu5').textContent= '';
     document.getElementById('bu6').textContent= '';
     document.getElementById('bu7').textContent= '';
     document.getElementById('bu8').textContent= '';
     document.getElementById('bu9').textContent= '';
    document.getElementById('player1name').value='';
    document.getElementById('player2name').value='';

 document.querySelector('.lol1').classList.remove("round");
 document.querySelector('.lol1').classList.remove("round");
 c1=0;c2=0;c3=0;c4=0;c5=0;c6=0;c7=0;c8=0;c9=0;



    };



    document.querySelector('#nextpage').addEventListener('click', function(){
        //test();
        if(nameentercheck!==1){
            player1 = (document.getElementById('player1name').value).toUpperCase();
            player2=(document.getElementById('player2name').value).toUpperCase(); 
                console.log(typeof(player2))
              if(player2!=='' && player1!==''){
              nameentercheck=1;
              console.log('nametestcheck' , nameentercheck)
    
              }
              if(nameentercheck==1){
                // document.querySelector('.pvs').style.color = 'black';
                document.querySelector('.pvs').textContent= player1 + '  VS  ' + player2;
               document.querySelector('.lol1').classList.add("round");
    
    
                if(cbk%2==0){
                    document.querySelector('.pvs').style.color = 'white';
                }else{
                document.querySelector('.pvs').style.color = 'black';
            }
        }
        
        };

         
    })




function nextplayer(){
 activeplayer===0 ? activeplayer = 1 : activeplayer=0;
console.log(activeplayer)
 if(activeplayer==0){
      tick = 'X';
//  document.querySelector('.pvs').textContent= player1 + '  turns ' + tick;


 }else{
      tick = 'O';
//  document.querySelector('.pvs').textContent= player2 + '  turns' + tick ;

 }
 document.querySelector('.lol1').classList.toggle("round");
 document.querySelector('.lol2').classList.toggle("round");




}

function check(){
    var  nu;
    var check=0;
    arr=[];
    for(let i=1 ; i<=9;i++){
  nu = document.querySelector('#bu'+i).textContent;
  arr.push(nu);
    }
    console.log(arr);

    testarr=['X','O'];

    for (let i=0; i<=1; i++)
    
        if (arr[0]===testarr[i] && arr[1]===testarr[i] && arr[2]===testarr[i])
        {
             winningshow(testarr[i]);
           
        }

        else if (arr[3]===testarr[i] && arr[4]===testarr[i] && arr[5]===testarr[i])
        {
            winningshow(testarr[i]);

        }

        else if (arr[6]===testarr[i] && arr[7]===testarr[i] && arr[8]===testarr[i])
        {
            winningshow(testarr[i]);

        }

        else if (arr[0]===testarr[i] && arr[3]===testarr[i] && arr[6]===testarr[i])
        {
            winningshow(testarr[i]);

        }

        else if (arr[1]===testarr[i] && arr[4]===testarr[i] && arr[7]===testarr[i])
        {
            winningshow(testarr[i]);

        }

        else if (arr[2]===testarr[i] && arr[5]===testarr[i] && arr[8]===testarr[i])
        {
            winningshow(testarr[i]);

        }

        else if (arr[0]===testarr[i] && arr[4]===testarr[i] && arr[8]===testarr[i])
        {
            winningshow(testarr[i]);

        }

        else if (arr[2]===testarr[i] && arr[4]===testarr[i] && arr[6]===testarr[i])
        {            
            // document.querySelector('.winner').textContent = testarr[i] + ' wines';
            winningshow(testarr[i]);  
        }
        var c=0;

        if(dc!==1){
            for (let i=0; i<=arr.length; i++){
                if(arr[i]==='X' || arr[i]==='O'){
        c++;
                }  
        
            }
            if(c==9){
                winningshow('draw');
            }
        }
 
        
    }
 
function winningshow(val){
    if(val==='draw'){
        document.querySelector('.win').textContent = val + '!!!';
        document.querySelector('.pvs').textContent= 'HOld !!!';
        document.querySelector('.win').classList.add('winning');
        document.querySelector('.win').classList.add('winner');

    }else{
        if(activeplayer==0){
            document.querySelector('.win').textContent = player2 + ' wins !!';
            document.querySelector('.pvs').textContent= 'Winner !!!';

        }else{
            document.querySelector('.win').textContent = player1 + ' wins !!';
            document.querySelector('.pvs').textContent= 'Winner !!!';


        }
       
        document.querySelector('.win').classList.add('winning');
        document.querySelector('.win').classList.add('winner');
        dc++;
    }
    c1=10;c2=10;c3=01;c4=10;c5=10;c6=10;c7=10;c8=10;c9=10;
    document.querySelector('.lol1').classList.remove("round");
    document.querySelector('.lol2').classList.remove("round");
}


document.querySelector('#cc').addEventListener('click',function(){
    cbk++;
    console.log(cbk);
    if(cbk%2==0){
        nightmodeon();

    // document['body'].style["background-color"] = 'black';

    }else{
    // document['body'].style["background-color"] = 'black';
                 nightmodeoff();        



    }
})





function usernameerror(){
    document.querySelector('.pvs').textContent= 'Error !!';
    // alert("Please Enter Your Username");
    //document.querySelector('.pvs').classList.add('er');
    document.querySelector('.pvs').style.color = 'red';
    


}


document.querySelector('#bu1').addEventListener('click' , function(){
    if(c1===0){
        if(nameentercheck===1){
            document.getElementById('bu1').textContent= tick;
            console.log("i ma clicked")
            nextplayer();
            check();
            c1++;
        }else{
            usernameerror();   
           }
           
    }
   
});
document.querySelector('#bu2').addEventListener('click' , function(){
    if(c2===0){
        if(nameentercheck===1){
            document.getElementById('bu2').textContent= tick;
            nextplayer();
            check();
            c2++
            }else{
             usernameerror();
            }
    }
    
});
document.querySelector('#bu3').addEventListener('click' , function(){
    if(c3===0){
        if(nameentercheck===1){
            document.getElementById('bu3').textContent= tick;
            nextplayer();
            check();
            c3++;
            }else{
                usernameerror();   
               }
        
    }
 
});
document.querySelector('#bu4').addEventListener('click' , function(){
    if(c4===0){
        if(nameentercheck===1){
            document.getElementById('bu4').textContent= tick;
            nextplayer();
            check();
            c4++;
            }else{
                usernameerror();   
               }
    } 

});
document.querySelector('#bu5').addEventListener('click' , function(){
    
    if(c5===0){    
        if(nameentercheck===1){
            document.getElementById('bu5').textContent= tick;
        nextplayer();
        check();
        c5++;
        }else{
            usernameerror();   
           }};

});
document.querySelector('#bu6').addEventListener('click' , function(){
        
    if(c6===0){    
    if(nameentercheck===1){
        document.getElementById('bu6').textContent= tick;
        nextplayer();
        check();
        c6++;
        }else{
            usernameerror();   
           }
       };
});
document.querySelector('#bu7').addEventListener('click' , function(){
    if(c7===0){
        if(nameentercheck===1){
        document.getElementById('bu7').textContent= tick;
        nextplayer();
        check();
        c7++;
        }else{
            usernameerror();   
           }};
    
});
document.querySelector('#bu8').addEventListener('click' , function(){
    if(c8===0){ 
        if(nameentercheck===1){
        document.getElementById('bu8').textContent= tick;
        nextplayer();
        check();
        c8++;
        }else{
            usernameerror();   
           }
        };
  
});
document.querySelector('#bu9').addEventListener('click' , function(){
    if(c9===0){   
    if(nameentercheck===1){
        document.getElementById('bu9').textContent= tick;
        nextplayer();
        check();
        c9++;
        }else{
            usernameerror();   
           }
    };

});
document.getElementById('resetall').addEventListener('click', fun);


//night mode
function nightmodeon(){
    console.log('on');
    document['body'].style["background-color"] = 'black';
    document.querySelector('.inputusername').style.color = 'White';
    document.querySelector('#nextpage').style.color = 'White';
    document.querySelector('#nextpage').style['border-color']= 'white';

    if(nameentercheck!==1){
    document.querySelector('.pvs').style.color = 'RED';
    }else{
    document.querySelector('.pvs').style.color = 'White';
    }
    document.querySelector('.winner').style.color = 'White';


}
function nightmodeoff(){
    console.log('off')
    document['body'].style["background-color"] = 'rgb(223, 216, 216)';
    document.querySelector('.inputusername').style.color = 'black';
    document.querySelector('#nextpage').style.color = 'black';
    document.querySelector('#nextpage').style['border-color']= 'black';
    if(nameentercheck!==1){
        document.querySelector('.pvs').style.color = 'red';
    }else{
        document.querySelector('.pvs').style.color = 'black';
    }
    document.querySelector('.winner').style.color = 'black';

}