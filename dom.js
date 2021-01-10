function somme()
{
let price=document.getElementsByClassName("prix")
let totalPrice=document.getElementsByClassName("order_total_amount")
 let bloc=document.getElementsByClassName("text-grey")
 let sum=0;
for ( let i=0;  i <supButton.length; i++ )
{   
 sum+=parseInt((price[i].subString(0,price[i].length -1)).innerHTML)*parseInt(bloc[i].innerHTML);
    
     

    } 
    totalPrice.innerHTML=sum;

}


let plusButton=document.getElementsByClassName("text-success")
let qte=document.getElementsByClassName("text-grey")



for ( let i=0;  i <plusButton.length; i++ )
{
    plusButton[i].addEventListener('click', function(){  
        
qte[i].innerHTML++;



    } )
}
let minusButton=document.getElementsByClassName("text-danger")
let qt=document.getElementsByClassName("text-grey")

for ( let i=0;  i <plusButton.length; i++ )
{
    minusButton[i].addEventListener('click', function(){  
        
  if (parseInt(qt[i].innerHTML) > 1)  {console.log(i); console.log(qt[i]); 
      qt[i].innerHTML --;
                                         }


    } )
}
let supButton=document.getElementsByClassName("btn-danger")
let bloc=document.getElementsByClassName("cart_items")

for ( let i=0;  i <supButton.length ; i++ )
{
    supButton[i].addEventListener('click', function(){  
      
        console.log(bloc[i]);
        console.log(i);
     bloc[i].parentNode.removeChild(bloc[i]);
    

    } )

}

    
let loveButton=document.getElementsByTagName("svg")
 for ( let i=0;  i <loveButton.length ; i++ ) {
loveButton.addEventListener('click', function(){
  
   
       if(loveButton[i].style.backgroundColor='white') { console.log('hi');
                                                         loveButton[i].style.backgroundColor='red';}
       else loveButton[i].style.backgroundColor='white';
    }) }