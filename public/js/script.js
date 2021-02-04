let inpcode=document.getElementById('inpcode')
let enbtn=document.getElementById('encode')
let code=document.getElementById('code')
let encryptbtn=document.getElementById('encrypt')
enbtn.onclick=function(){ 
    let data=inpcode.value 
    data=btoa(data)
    code.value=data
}
encryptbtn.onclick=function(){ 
    let text=code.value
    let endata=encryptdata(text)
    code.value=endata;
}

function encryptdata(data){ 
    let ans=''
    for(let i in data){ 
        if (data[i]==data[i].toLowerCase()){
           ans +=data[i].toUpperCase();
            
        } else if(data[i]==data[i].toUpperCase()){ 
         ans +=data[i].toLowerCase();
        }else{ 
             continue;
         }
       console.log(ans[i]);
  }
  return ans;


}