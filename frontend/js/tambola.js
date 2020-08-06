$(function(){
    var prev;
    var min=1;
    var max=90;
    var count=0;
    var number=[];
    var random;
    $("button").click(function(){
        prev=random;
        random = Math.floor(Math.random() * (max-min+1) )+min;
        random++;
        if(count==90){
            alert("Limit Exhausted");
        }
        else{
            while(number[random]=="true"){
                random = Math.floor(Math.random() * (max-min+1))+min;

            }
                number[random]="true";
            count++;
            if(count>1){
                
                 $(".previous").html(prev)         
        }
        
            $(".number").html(random)
         var a=$("td");
        var c=0;
      a.each(function(){
        if(c==random){
             random= random.toString();
              console.log(typeof(random));
             
              $(this).html("<span>"+random.toString()+"</span>");    
          }
          c++;
      })

        }

    })
})
//     $(function(){
//     var prev;
//     var visitied=[];
//     var count=0;
//     var rand;
//     $("button").click(function(){
//         prev=rand;
//          rand=Math.floor(Math.random()*90);
//         rand++;
//         if(count==90){

//             alert("DONE WITH ALL THE NUMBERS!!!");

//         }
//         else{
//         while(visitied[rand]=="true"){
//             rand=Math.floor(Math.random()*90);rand++;
//         }
//             visitied[rand]="true";
//             count++;
//             if(count>1){
//                 $(".previous").slideUp("slow",function(){
//                     $(".previous").html(prev).hide().slideDown("slow"); 
//                 });
         
//         }
//         $(".number").slideUp("slow",function(){
//             $(".number").html(rand).hide().slideDown("slow"); 
//         });
//         // $(".number").html(rand);
//         var a=$("td");
//         var c=0;
//       a.each(function(){
//          if(c==rand){
//              rand= rand.toString();
//              console.log(typeof(rand));
             
//              $(this).html("<span>"+rand.toString()+"</span>");    
//          }
//          c++;
//       })
    
    
//         // $(".number").hide().slideUp().slideDown("slow");
//         // $(".number").animate({zoom:"200%"},1000);
//         // $(".number").animate({zoom:"100%"},1000);
//     }
//     })
  

// })
