export async function getCurrency(money) {
  try {
    let currency = await fetch(` https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD`)
    let currencyResponse;
    if (currency.ok && currency.status == 200) {
      currencyResponse = await currency.json();
    } else {
      currencyResponse = false;
      console.log(`currency: ${currency}`);
    }
    console.log(currencyResponse);
    return currencyResponse;
    } catch(error) {
      console.log(`error: ${error}`);
      return false;
    }
}