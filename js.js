// fatora system 

let iname=document.querySelector('#iname');
let iprice=document.querySelector('#iprice');
let iqty=document.querySelector('#iqty');
let tbody=document.querySelector('table tbody');
let totalcell=document.querySelector('#totalvalue')

let datafatora=[];


function renderfatora(){
    tbody.innerHTML='';
    datafatora.forEach((el,index) => {
        tbody.innerHTML +=
        `
        <tr>
            <td>${index+1}</td>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td>${el.qty}</td>
            <td>${el.price*el.qty}</td>
            <td><button class='btn btn-danger' onclick='alert(${index+1});deletrow(${index})'>del</button></td>
        </tr>`
    });
    totalcell.innerHTML=gettotal();
};

function addtofatora(){
    let itemobj = {
        name : iname.value,
        price: +iprice.value,
        qty: +iqty.value,
    };
    datafatora.push(itemobj);
    renderfatora();
    iprice.value='';
    iname. value='';
    iqty.value='';
    console.log(itemobj);
};


function gettotal(){
    let final=0;
    datafatora.forEach((el,index)=>{
        let subtotal=el.price*el.qty;
        final=final+subtotal;
        // final+=subtotal
    });
    return final;
}
renderfatora();

function deletrow(indextodel){
    datafatora.splice(indextodel,1);
    renderfatora();
};







