
async function getCountryCodeNumber(country, tel) {

 const apiString = `https://jsonmock.hackerrank.com/api/countries?name=${country}`
 const response = await fetch(apiString); 

 if(response.ok){
  const {data} = await response.json();

  if(!data || data.length === 0){
    return -1;
  }

  const countryCode = data[0].callingCodes[data[0].callingCodes.length-1];
  return `+${countryCode} ${tel}`;

 } 

}


const main = async()=>{
  // call api , get country code append to number and return. any error return -1;


  const telWithCountryCode = await getCountryCodeNumber('singapore', '83604043');
  console.log('telWithCountryCode : ', telWithCountryCode);

}
main();
