let paramList = [];
var paramstr = " ";
function addParam() {
  var pvalue = document.getElementById("pvalue").value;
  var params = document.getElementById("params").value;
  //var status = true;

  if (pvalue == "") {
    alert(" please add param ");
    return;
  }
  if (params == "") {
    alert(" please add param  ");
    return;
  }


  for (var i = 0; i < paramList.length; i++)
    if (paramList[i].name == pvalue) {
      alert("Sorry, the paramname  already exists.......Try again 🧐");
      return;
    }

  var param =
  {
    "name": pvalue,
    "type": params,
  }
  paramList.push(param);

  const $select = document.querySelector('#params');
  $select.value = 'choose';

  const $select1 = document.querySelector('#pvalue');
  $select1.value = '';

  updateParamView();
}

function deleteRow(buttonId) {
  document.getElementById(buttonId).remove();
}

function updateParamView() {
  let allParamsHTML = paramList.map(makeParamHTML(item));
  document.getElementById("myparam").innerText = allParamsHTML;
  // <div class="param">
  //                   <div class="paramtype">int</div>
  //                   <div class="paramname">num1</div>
  //                   <button class="delete_param" onclick="deleteParam(num1)">X</button>
  //               </div>


}
[
  {
    "name": "p1",
    "type": "int",
  },
  {
    "name": "p2",
    "type": "int",
  },
  {
    "name": "p3",
    "type": "int",
  }
]

function makeParamHTML(item) {
    let param = document.createElement('div');
    param.className = "param";

    let paramName = document.createElement('div');
    paramName.className = "param_name";
    paramName.appendChild(document.createTextNode(item.name));

    let paramType = document.createElement('div');
    paramType.className = "param_type";
    paramType.appendChild(document.createTextNode(item.type));

    //make paramtype
    let closeButton = document.createElement('button');
    //close button class - pending
    //close button value - pending
    closeButton.onclick = "deleteParam(" + item.name+ ")";//`deleteParam(${item.name})`

  
    param.appendChild(paramType);
    param.appendChild(paramName);
    param.appendChild(button);
    //button append
    return param;
}
function deleteParam(paramName){
  //delete this param from paramlist
  //call updateParamView
}

function createdummytable() {
  let tbl = document.createElement('table');
  tbl.style.width = '100px';
  tbl.style.border = '1px solid black';

  for (let i = 0; i < 3; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < 2; j++) {
      const td = tr.insertCell();
      td.appendChild(document.createTextNode(`p1, p2, p3`));
      td.style.border = '1px solid black';
    }
  }
  const dummyElement = document.getElementById("dummytable");
  dummyElement.appendChild(tbl);


}
function getcode() {
  // read rge paramList and generate the string to pass to url
  let fname = "", rettype = "";

  fname = document.getElementById("fname").value;
  rettype = document.getElementById("rettype").value;
  if (fname == "") {
    alert("function name must be given");
    return;
  }
  if (rettype == " ") {
    alert("rettern type must be entern");
    return;
  }

  let url = `http://localhost:8080/code?fname=${fname}&rettype=${rettype}&params=${paramstr}`;
  console.log(url);

  $.ajax({
    url: url,
    success: function (response) {
      document.getElementById("result_code").innerText = response;
    },
    error: function (xhr, status, error) {
      console.log(xhr);
      console.log(status);
      console.log(error);
    }
  });
}

