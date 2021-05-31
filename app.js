'use strict'

let table = document.getElementById('table');
let form = document.getElementById('form');
let allprodect = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
    function prodict(name , type){
            this.name = name;
            this.type = type;
            this.price = getRndInteger(100, 300);
            allprodect.push(this);
        }
      
  function render(){
      for (let i = 0; i < allprodect.length; i++) {
          let tr = table.appendChild(document.createElement('tr'));

          let td = table.appendChild(document.createElement('td'));
          td.textContent=allprodect[i].name;
          
          let td1 = tr.appendChild(document.createElement('td'));
          td1.textContent=allprodect[i].type;

          let td2 = tr.appendChild(document.createElement('td'));
          td2.textContent=allprodect[i].price;
      }
  }


  form.addEventListener('submit', sub);
  function sub(event){
    event.preventDefault()
      
      let name = event.target.name.value;
      let select = event.target.select.value;

      new prodict(name, select);
      setItem();
      render();

      window.location.reload();
  }
  console.log(allprodect);

  function setItem(){
      localStorage.setItem('phons', JSON.stringify(allprodect));
  }

  function getItem(){
      let alGet = localStorage.getItem('phons');
      let objecto = JSON.parse(alGet);

      if(objecto !== null){
          allprodect = objecto;
      }
      render();
  }

  getItem();