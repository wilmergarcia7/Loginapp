function CovidReportItem ({
    code, 
    confirmed, 
    country, 
    critical, 
    deaths, 
    lastChange, 
    lastUpdate,
    latitude,
    longitude,
    recovered
    })
{
   
    return(
        <li className="flex justify-evenly text-2xl pt-10">
        <span>
            Código: {code} <br/>
            Confirmados: {confirmed} <br/>
            País: {country} <br/>
            En estado critico: {critical} <br/>
            Muertes: {deaths} <br/>
            Último cambio: {lastChange} <br/>
            Última actualización: {lastUpdate} <br/>
            Latitud: {latitude} <br/>
            Longitud: {longitude} <br/>
            Recuperados: {recovered}       
        </span>
        </li>
        
    );

}

function CovidReport({covidDat}){
    
    const CovidItems = covidDat.map((item, index)=>{
        return(
            
            <CovidReportItem
            key={index}
            fb_id={item.fb_id}
            code={item.code}
            confirmed={item.confirmed}
            country={item.country}
            critical={item.critical}
            deaths={item.deaths}
            lastChange={item.lastChange}
            lastUpdate={item.lastUpdate}
            latitude={item.latitude}
            longitude={item.longitude}
            recovered={item.recovered}
            >
            
            </CovidReportItem>
        )
        
    });
  
return(
    <section>
        <ul>
            {CovidItems}               
        </ul>
    </section>
)
}


export default CovidReport;

/*
 return(
     <li>
                {codigo}
                </li>
                <li>
                {confirmados}
                </li>
            <CovidReportItem
            key={item.code}
            confirmado={item.confirmed}
            pais={item.country}
            />
        )*/