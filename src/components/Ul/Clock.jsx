import React ,{ useState, useEffect} from "react";
import  '../../styles/clock.css'
import data from "bootstrap/js/src/dom/data";

const Clock = () => {

      const [time, setTime] = useState(new Date());

      useEffect(() =>{
           // countDown ()
            const intervalID = setInterval(() =>{
                setTime(new Date());
            }, 1000)

          return()=>{
                clearInterval(intervalID)
          }

      }, [])

    const today = new Date();
    const days = today.getDate() < 10? '0' + today.getDate() : today.getDate();
    const hours = today.getHours() < 10? '0' + today.getHours() : today.getHours();
    const minutes = today.getMinutes() < 10? '0' + today.getMinutes() : today.getMinutes();
    const seconds = today.getSeconds() < 10? '0' + today.getSeconds() : today.getSeconds();

  return (
    <div className="clock_wrapper d-flex align-items-center gap-3">
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-20">{days}</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
      </div>
      <span className="text-white fs-3">:</span>

      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-20">{hours}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
      </div>
      <span className="text-white fs-3">:</span>

      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-20">{minutes}</h1>
          <h5 className="text-white fs-6">Minuts</h5>
        </div>
      </div>
      <span className="text-white fs-3">:</span>

      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-20">{seconds}</h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
