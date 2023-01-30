// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
  };
  let is_shop_open = true;

  function time(ms) {
    return new Promise( (resolve, reject) =>{
        if (is_shop_open){
            setTimeout(resolve, ms);
        } else {
            reject (console.log("Shop is Closed - inside Promise"))
        }
   })
  }

  async function kitchen(){
    try{}
    catch(error){}
    finally{}
  }
kitchen()
