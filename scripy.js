function addItem1Price(){
    priceCalculation('item-1-price');
    addSelectedItem('K.Accessories',getPrice('item-1-price'));
}
function addItem2Price(){
    priceCalculation('item-2-price');
    addSelectedItem('K.Accessories',getPrice('item-2-price'));
}
function addItem3Price(){
    priceCalculation('item-3-price');
    addSelectedItem('Home Cooker',getPrice('item-3-price'));
}
function addItem4Price(){
    priceCalculation('item-4-price');
    addSelectedItem('Sports Back Cap',getPrice('item-4-price'));
}
function addItem5Price(){
    priceCalculation('item-5-price');
    addSelectedItem('Full Jersey Set',getPrice('item-5-price'));
}
function addItem6Price(){
    priceCalculation('item-6-price');
    addSelectedItem('Sports cates',getPrice('item-6-price'));
}
function addItem7Price(){
    priceCalculation('item-7-price');
    addSelectedItem('Single Relax Chair',getPrice('item-7-price'));
}
function addItem8Price(){
    priceCalculation('item-8-price');
    addSelectedItem('Children play',getPrice('item-8-price'));
}
function addItem9Price(){
    priceCalculation('item-9-price');
    addSelectedItem('Flexible Sofa',getPrice('item-9-price'));
}


function priceCalculation(elementId){
   const price=getPrice(elementId);
   const previousPrice=getPrice('total-price');   
   const currentPrice=price+previousPrice;   
   setElementInnerText('total-price',currentPrice.toFixed(2));
   setElementInnerText('total',currentPrice.toFixed(2));
}
function getPrice(priceId){
    const price=document.getElementById(priceId).innerText;
    return parseFloat(price);
}
function setElementInnerText(elemnetId,value){
    document.getElementById(elemnetId).innerText=value;
}
function addSelectedItem(itemName,price){
    const itemEntry=document.getElementById('entrySelectedItem');
    const count=itemEntry.childElementCount;
    const p=document.createElement('p');
    p.classList=('py-1 text-2xl font-[500]');
    p.innerHTML=`${count+1}. ${itemName}: ${price} Tk.`
    itemEntry.appendChild(p);
}

    const totalPrice=getPrice('total');
    console.log(totalPrice);
    const purchaseBtn=document.getElementById('make-parchase-btn');
    purchaseBtn.addEventListener('click',function(){
        console.log(totalPrice);
    })

document.getElementById('coupon-input').addEventListener('keyup',function(event){
    const text=event.target.value;
    const couponApply=document.getElementById('coupon-btn');    
    
    if(text=='SELL200'){
        couponApply.removeAttribute('disabled');        
    }
    else{
        couponApply.setAttribute('disabled',true);
    }
    couponApply.addEventListener('click',function(event){
        const price=getPrice('total-price');                     
        if(price>=200){
            const discount=price*0.2;
            setElementInnerText('discount',discount.toFixed(2));
            setElementInnerText('total',price-discount);
        }
        else{
            setElementInnerText('total',price);
        } 
            
    })
});

document.getElementById('maindiv').addEventListener('click',function(){
    const totalPrice=getPrice('total');
    const makeParchaseButton=document.getElementById('make-parchase-btn');
    if(totalPrice>0){
        makeParchaseButton.removeAttribute('disabled');        
    }
    else{
        makeParchaseButton.setAttribute('disabled',true);
    }

})
