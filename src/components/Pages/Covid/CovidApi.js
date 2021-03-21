import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/country/code',
  params: {code: 'hn'},
  headers: {
    'x-rapidapi-key': '',
    'x-rapidapi-host': ''
  }
};

export default (handler)=>{
    axios.request(options).then(function (response) {
	    
      handler(null, response.data);
        

    }).catch(function (error) {

	    console.error(error);
        handler(error, null);
    });
}