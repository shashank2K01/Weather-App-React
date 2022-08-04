import "./current_weather.css"



const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Bangalore</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>
            <div className="bottom">
                <p className="temperature"> 15C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label"> Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label"> Feels Like </span>
                        <span className="parameter-calue">20C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label"> Wind </span>
                        <span className="parameter-calue">2ms</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label"> Humidity </span>
                        <span className="parameter-calue">2</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label"> Pressure </span>
                        <span className="parameter-calue">16hpa</span>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default CurrentWeather;