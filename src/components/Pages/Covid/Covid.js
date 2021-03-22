import {useEffect, useState} from 'react';

import getCountryCodeTotal from './CovidApi';
import NewCovid from "./NewCovid";

import firebaseSDK from '../../../FireBaseInit';
import CovidReport from './CovidReport';
function Covid (){

    const [covidData, setCovidData] = useState({newCovids:[], covidsNews:""});
  //  const [error, setError] = useState(false);
      
  useEffect(
      
    ()=>{
      const covidRef = firebaseSDK.database().ref('covid').orderByKey().limitToLast(100);
            
      covidRef.on('value', (snapshot)=>{
      const fb_CovidData = snapshot.val();
      const newCovidss = [];
      
      for(let fb_id in fb_CovidData){
        newCovidss.push({...fb_CovidData[fb_id],fb_id});
        
      }
      setCovidData({...covidData,newCovids: newCovidss});
    });


      getCountryCodeTotal(
        (err, data)=>{

          if(err){
            console.log(err);
          } else {
           
            firebaseSDK.database().ref('covid').push(data[0]);
            
           
              
          }

            
          }
        
      )
      
    
    return ()=>{
      console.log("UnMounting");
      covidRef.off();
    }
    }

    ,[]
  );
  

  
  return (
    <section>
  <CovidReport
    covidDat={covidData.newCovids}
    
  >
  </CovidReport>
  </section>
  
);
  
}


export default Covid;
/*
onst onAddNew = (e) =>{
  let NewDataCovid = {
    datos: covidData.newCovids[0]['data'][0],
    id: new Date().getTime()
  };
  firebaseSDK.database().ref('covid').push(NewDataCovid);
  }*/

/*const getCoviDatos = async () => {
      try{
        const response = await getCountryCodeTotal;
        console.log(response.data)
        setCovid(response.data)
      } catch(error){
        setError(true);
      }
    };

    
    useEffect(()=>{
      getCoviDatos()
    },[])
    */