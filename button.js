
var paramlist =[];
var paramstr = " ";
function addParam() 

{
  var pvalue = document.getElementById("pvalue").value;
  var params = document.getElementById("params").value;
  //var status = true;

  if ( pvalue == "" ) 
  {
    alert(" please add param ");
    return;
  }
  if ( params == "" ) 
  {
    alert(" please add param  ");
    return;
  }
  

  for (var i = 0; i < paramlist.length; i++)
  if (paramlist[i].name == pvalue)
  { 
      alert ("Sorry, the paramname  already exists.......Try again 🧐");
      return;
  }

  var param = 
  {
    "name" : pvalue,
    "type" : params,
  }
  paramlist.push(param);

  const $select = document.querySelector('#params');
    $select.value = 'choose';
     
    const $select1 = document.querySelector('#pvalue');
    $select1.value = '';

  console.log(paramlist)
  updateParamView();
}
function updateParamView(){
     var names = paramlist.map(function(item) {
     return item['type'] + "," + item['name'] ;
  });
  paramstr =  names.join(",");
  document.getElementById("myparam").innerText = paramstr;
   

}

function getcode ()
{
  // read rge paramlist and generate the string to pass to url
  let fname="", rettype="";

  fname = document.getElementById("fname").value;
  rettype = document.getElementById("rettype").value;
  if ( fname == "" ) 
  {
    alert("function name must be given");
    return;
  }
 if (rettype==" ")
 {
  alert("rettern type must be entern");
  return;
 }
 
  let url=`http://localhost:8080/code?fname=${fname}&rettype=${rettype}&params=${paramstr}`;
  console.log(url);

  $.ajax({
          url:url,
          success: function(response) {
            document.getElementById("result_code").innerText = response;
          },
          error: function(xhr, status, error) 
          {
            console.log(xhr);
            console.log(status);
            console.log(error);
          }
        });
}
 
