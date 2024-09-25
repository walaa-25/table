let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let catogery=document.getElementById('catogery');
let create=document.getElementById('create');
function getTotle(){
    if(price.value !='')
    {
        let result=(+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML=result;
        total.style.background='green';
        
    }
    else{
        total.innerHTML='';
        total.style.background='red'
    }
}

let data;
if(localStorage.product!=null)
{
    data=JSON.parse(localStorage.product)
}
else
{
    data=[];
}

create.onclick=function(){
    let newcreate={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        catogery:catogery,

        
    }
    data.push(newcreate);
    localStorage.setItem=('product',JSON.stringify(data));
    console.log(newcreate)
    clearData();
    showData();
}
function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    catogery.value='';
}

function showData(){
    
    let table='';
    for(let i=0;i<data.length;i++){
        table=data[i];
        
    table +=`
    
    <tr>
        <td>${i}</td>
        <td>${data[i].title}</td>
        <td>${data[i].price}</td>
        <td>${data[i].taxes}</td>
        <td>${data[i].ads}</td>
        <td>${data[i].discount}</td>
        <td>${data[i].total}</td>
        <td>${data[i].catogery}</td>
        <td><button id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete" >delete</button></td>
    </tr>
`
    }
    document.getElementById('tbody').innerHTML=table;
}
function deleteData(){

}
