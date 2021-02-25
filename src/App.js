
import React, {useState, useRef, useLayoutEffect} from 'react'
// import { useDispatch, useSelector, cre } from 'react-redux'
// import {getUserDataInitiate} from '../../../Redux/actions/content'
import { createSelector } from 'reselect'
import moment from 'moment'

import './App.css';

function App() {
  const [timer, updateTimer] = useState(0)
  const [start, updateStart] = useState(false)
  const [total, updateTotal] = useState(1)
  const countRef = useRef(null)

  const timeConvert = (num) => {
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    return hours + ":" + minutes; 
  }

  useLayoutEffect(() => {
    if (start) {
        clearInterval(countRef.current)
        countRef.current = setInterval(() => {
            updateTimer((timer) => timer + total)
        }, 1000)
    } else  {
        clearInterval(countRef.current)
    }

  }, [start, total])


  const onReset = () => {
        clearInterval(countRef.current)
        updateTimer(0)
        updateStart(false)
        updateTotal(1)
  }
  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <div style={{textAlign: 'center'}}>
            <h3>Stopwatch</h3>
            {timeConvert(timer)}
            </div>
          
          <div className='stopwatch-card'>
            <div style={{padding: '10px 10px 10px 10px'}}>
              <button 
                onClick={() => {
                  if(!start) {
                    updateStart(true)
                  } else {
                    updateStart(false)
                  }
                  
                }}
                style={{ margin: '0 10px'}}
            >
                {start ? 'Pause' : 'Start'}
            </button>
              <button onClick={onReset}>Stop</button>
              <div style={{marginTop: '10px'}}>
                <button
                    onClick={(e) => {
                        if(total > -10)
                        updateTotal(total - 1)
                    }}
                    style={{ margin: '0 10px'}}
                >
                  minus
                </button>
                 {total}
                <button 
                onClick={() => {
                    if(total < 10)
                    updateTotal(total + 1)
                   
                }}
                style={{margin: "0 0 0 10px"}}
                >
                    plus
                </button>
           
              </div>
            </div>
          </div>
        </div>
  );
}

export default App;


