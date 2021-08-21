//memory variable
const extraMemoryCostFor8gb=0;
const extraMemoryCostFor16gb=180;
//storage variable
const extraStorageCostFor256gb=0;
const extraStorageCostFor512gb=100;
const extraStorageCostFor1tb=180;
//delivery variable
const deliveryChargeLate=0;
const deliveryChargeEarly=20;
//promo-code variable
const promoDiscountPercentage=20; 
const specialPromoCode="stevekaku";


function disablePromoCodeButton()
{
    document.getElementById('promo-submit').disabled=true;
}

function settotalCostWithPromo(promoCode){
    if(promoCode==specialPromoCode){
    const totalCostWithoutPromo=getTotalcostWithoutPromo();
    const totalCostWithPromo=totalCostWithoutPromo-((totalCostWithoutPromo*promoDiscountPercentage)/100);
    document.getElementById('total-with-promo').innerText=totalCostWithPromo;
    disablePromoCodeButton();
    }
}

function getTotalcostWithoutPromo(){
    const baseCost=parseInt(document.getElementById('base-cost').innerText);
    const memCost=parseInt(document.getElementById('mem-cost').innerText);
    const strgCost=parseInt(document.getElementById('strg-cost').innerText);
    const dlvCost=parseInt(document.getElementById('dlv-cost').innerText);

    return baseCost+memCost+strgCost+dlvCost;
}

function setTotalCostWithWithoutPromo(){

    const totalcostWithoutPromo=getTotalcostWithoutPromo();
    document.getElementById('total-cost').innerText=totalcostWithoutPromo;
    document.getElementById('total-with-promo').innerText=totalcostWithoutPromo;
}

function setPriceForIndividualField(fieldId,price){
    const field=document.getElementById(fieldId+'-cost');  //'mem-cost'  strg+'-cost == strg-cost
    field.innerText=price;

    setTotalCostWithWithoutPromo();
}

// memory button EventListener 
document.getElementById('mem-8gb').addEventListener('click', function () {
    setPriceForIndividualField('mem',extraMemoryCostFor8gb);
})
document.getElementById('mem-16gb').addEventListener('click', function () {
    setPriceForIndividualField('mem',extraMemoryCostFor16gb);
})

// storage button EventListener 
document.getElementById('strg-25gb').addEventListener('click', function () {
    setPriceForIndividualField('strg',extraStorageCostFor256gb);
})
document.getElementById('strg-512gb').addEventListener('click', function () {
    setPriceForIndividualField('strg',extraStorageCostFor512gb);
})
document.getElementById('strg-1tb').addEventListener('click', function () {
    setPriceForIndividualField('strg',extraStorageCostFor1tb);
})

// delivery button EventListener
document.getElementById('dlv-late').addEventListener('click', function () {
    setPriceForIndividualField('dlv',deliveryChargeLate);
})
document.getElementById('dlv-early').addEventListener('click', function () {
    setPriceForIndividualField('dlv',deliveryChargeEarly);
})

// promo code button EventListener
document.getElementById('promo-submit').addEventListener('click', function () {
    let promoCode=document.getElementById('promo-input');
    settotalCostWithPromo(promoCode.value);
    promoCode.value='';
})