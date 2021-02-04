$(function(){ 
     let name=$('#name');
     let age=$('#age');
     let city=$('#city');
     let btn=$('#btn');
     let persons_tble=$('#persons');
     
   
     function refreshPersonTable(persons){ 
         persons_tble.empty();
         persons_tble.append(`
         <tr>
               <th> Name </th>
               <th> Age </th>
               <th> City </th>
         </tr>
         `)
         for (person of persons){ 
             persons_tble.append(`
             <tr> 
                 <td>${person.name} </td>
                 <td> ${ person.age} </td>
                 <td> ${person.city} </td>
              
             </tr>
             
             `)
         }
     }
  $.get('/api/persons',function(data){ 
      refreshPersonTable(data);
  })
btn.click(function(){ 
         $.post('/api/persons',{ 
             name:name.val(),
             age:age.val(),
             city:city.val(),
         },
         
         function(persons){ 
             refreshPersonTable(persons)
         })
     })



  
})