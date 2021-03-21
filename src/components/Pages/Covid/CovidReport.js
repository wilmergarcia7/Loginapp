function CovidReportItem ({covidDato, id, fb_id}){
    
    return(
        <li className="flex flex-row justify-evenly text-3xl">
        <span>{covidDato}</span>
      
        </li>
    )

}

function CovidReport({covidDat}){
    console.log(covidDat)
    const CovidItems = covidDat.length;
  
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