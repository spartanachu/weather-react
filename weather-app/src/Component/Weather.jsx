import { useState} from "react"
import axios from "axios"

function Weather()
{
    const [city,setcity]=useState("")
    const [wed,setwed]=useState("")
    const[teb,setteb]=useState("")
    const [dec,setdec]=useState("")
    function handlecity(event)
    {
        setcity(event.target.value)
    }
    function handlecheck()
    {
        var weatherdata=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5dc5d1d0f5dbf36d2bffc3590e90f3fe`)
        
        weatherdata.then(function(success)
    {
        console.log(success)
        setwed(success.data.weather[0].main)
        setteb(success.data.main.temp)
        setdec(success.data.weather[0].description)
    })
    
    .catch(function(errordatas)
{
    console.log("errordatas")
})

    }
    return(
        <>
        <div className="flex flex-col grow">
            <h1 className="text-3xl font-bold">Weather Report</h1>
            <p className="text-2xl my-3">i can give you aweather report about your city!</p>
            <div className="my-5 flex grow-2 gap-2 " >
                <input value={city} onChange={handlecity}  className="rounded-md" type="text" placeholder="Enter the City" />
                <button onClick={handlecheck} className="bg-black text-white rounded-md p-2 hover:bg-blue-400 ">Get Report</button>
            </div>
            <div className="my-5 text-2xl font-bold bg-transparent">
                <input value={city} placeholder="City" className="bg-transparent"></input>
                <p>Weather: {wed}</p>
                <p>Temperature:{teb}</p>
                <p>Description: {dec}</p>
            </div>
        </div>
        </>
    )
}

export default Weather