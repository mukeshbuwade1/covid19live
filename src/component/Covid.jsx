import React,{useEffect, useState} from "react";



const Covid =()=> {
  const[mydata, setMydata] = useState([]);


  const getcoviddata =  async() => {

    

    try{
      const res =  await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      
      setMydata(actualData.statewise[0]);

    }catch(err)
    {
      console.log(err);
    }
    
  }

  useEffect(()=>{
    getcoviddata()
  },[])
  
  return (
    <>
    
      <div className="main_div">
      <div className="card">
       <h2><span>OUR</span> country</h2>
        <h3 >India</h3>
      </div>

      <div className="card">
       <h2><span>total</span> confirmed</h2>
        <h3 >{mydata.confirmed}</h3>
      </div>

      <div className="card">
       <h2><span>total</span> recovered</h2>
        <h3 >{mydata.recovered}</h3>
      </div>

      <div className="card">
       <h2><span>total</span> active</h2>
        <h3 >{mydata.active}</h3>
      </div>

      <div className="card">
       <h2><span>total</span> deaths</h2>
        <h3 >{mydata.deaths}</h3>
      </div>

      <div className="card">
       <h2><span>last</span> updatedtime</h2>
        <h3 >{mydata.lastupdatedtime}</h3>
      </div>
        
      </div>
    </>
    
  );
}

export default Covid;
