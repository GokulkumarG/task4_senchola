let inp=document.querySelector('#input')
let btn=document.querySelector('button')
let list=document.querySelector('.list')

let add=[]

btn.addEventListener('click',()=>{
    let values=inp.value
    console.log(values)
   let a= add.push(values)
   ad(values)
   inp.value=''
   
//    for (i of add){
//     document.getElementById('result').innerHTML=i
//    }
    
})

const ad=(adding)=>{
    let result=document.createElement('h4');
    result.innerHTML=adding;
    list.appendChild(result)
    result.addEventListener('click',()=>{
        let col=adding
        result.style.fontSize = '200%'
        result.addEventListener('click',function(){
            result.style.backgroundColor='red'
            result.addEventListener('dblclick',function(){
                list.removeChild(result)
            })
        })
    })
}