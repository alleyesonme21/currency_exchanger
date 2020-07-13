import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getCurrency } from './currency_exchanger.js';

async function getCurrencyEX(money) {
  const currencyResponse = await getCurrency(money);
  if (currencyResponse === false) {
    $("#currencyPro").text("THis currency is not available")
  } else {
    $("#currencyPro").text(`The currency is : ${currencyResponse.conversion_rates[money]}`);
    const entry = $("#entry").val();
    // add more codes soon
  }
}

$(document).ready(function(){
  $("#currencyInfo").submit(function(event) {
    event.preventDefault();
    let money = $("#addCurrency").val();
    getCurrencyEX(money);
    
  });
  });