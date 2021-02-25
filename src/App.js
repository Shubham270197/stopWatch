
import React, {useState, useRef, useLayoutEffect, useEffect} from 'react'
// import { useDispatch, useSelector, cre } from 'react-redux'
// import {getUserDataInitiate} from '../../../Redux/actions/content'
import { createSelector } from 'reselect'
import moment from 'moment'

import {
  MainContent,
  MainHeader,
  TimerData,
  Container,
  ButtonContainer,
  Button,
  IconContainer,
  IconWrap,
  Icon
} from './style';

function App() {
  const [timer, updateTimer] = useState(0)
  const [start, updateStart] = useState(false)
  const [total, updateTotal] = useState(1)
  const countRef = useRef(null)

  const timeConvert = (num) => {
    let hours = Math.floor(num / 60);  
    let minutes = num % 60;
    
    let hoursFormat = hours.toString().length
    const finalHours = hoursFormat === 1 ? "0"+hours : hours
    let minFormat = minutes.toString().length
    const finalMinutes = minFormat === 1 ? "0"+minutes : minutes
    return finalHours + ":" + finalMinutes; 
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

  useEffect(() => {
    if(timer < 1 && total <= -1 ) {
    console.log("timer = ", timer)
    clearInterval(countRef.current)
        updateTimer(0)
        updateStart(false)
        updateTotal(1)
    }
  }, [timer])


  const onReset = () => {
        clearInterval(countRef.current)
        updateTimer(0)
        updateStart(false)
        updateTotal(1)
  }
  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <MainContent>
        <MainHeader>
          <h3>Stopwatch</h3>
        </MainHeader>
        <TimerData>
        {timeConvert(timer)}
        </TimerData>
        <Container>
          <div style={{padding: '10px 10px 10px 10px'}}>
            <ButtonContainer>
              <Button 
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
              </Button>
            </ButtonContainer>
          <ButtonContainer
            customMargin
          >
            <Button onClick={onReset}>Stop</Button>
          </ButtonContainer>
            <IconContainer>
              <IconWrap>
                <Icon className="far fa-minus"
                    onClick={(e) => {
                        if(total > -10)
                        updateTotal(total - 1)
                    }}
                >
                </Icon>
                </IconWrap>
                 {total}
                 <IconWrap>
                <Icon className="far fa-plus" 
                onClick={() => {
                    if(total < 10)
                    updateTotal(total + 1)
                   
                }}
                >
                </Icon>
                </IconWrap>
              </IconContainer>
            </div>
          </Container>
          </MainContent>
        </div>
  );
}

export default App;


