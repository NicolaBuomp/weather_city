import React, {useState} from 'react'
import styled from 'styled-components'
import {date, day, month, weekDays, currentMonth} from '../Date'


const Wrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    @media (min-width: 1200px) {
        width: 40%;
        height:  370px;
        margin: 20px 40px 0;
    }
`
const Button = styled.button`
    all: unset;
    cursor:pointer;
    padding: 15px 20px;
    background: ${props => props.activate ? 'rgba(89,128,233,1)' : '#FFFFFF'};
    color: ${props => props.activate ? '#FFFFFF' : 'null'};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size:20px;
    font-weight: 700;
    text-align:center;
`
const Box = styled.div`
    height: 380px;
    background: linear-gradient(130deg, rgba(89,128,233,1) 0%, rgba(114,158,238,1) 100%);
    border-radius: ${props => props.month ? '15px' : 'null'};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    @media (min-width: 576px) {
        justify-content: center;
    }
    @media (min-width: 1200px) {
        width: 560px;
        justify-content:center;
        align-items:center;
        height: 100%;
    }
`
const Card = styled.div`
    padding: 10px 40px;
    height: 80%;
    background:  rgba(114,158,238,1);
    box-shadow: 2px 7px 39px 0px rgba(0,0,0,0.25);
    margin: 0 15px;
    border-radius: 15px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .temp{
        font-size: 30px;
    }
    @media (min-width: 1200px) {
        width: 25%;
    }
`
const BoxMonth = styled.div`
    height: 80%;
    width: 90%;
    margin: 0 auto;
    background: linear-gradient(130deg, rgba(89,128,233,1) 0%, rgba(114,158,238,1) 100%);
    box-shadow: 2px 7px 39px 0px rgba(0,0,0,0.25);
    border-radius: 20px;
    display: flex;
    color: #FFFFFF;
`
const LeftBoxMonth = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-left: 10px;
    width: 40%;
    font-size: 20px;
    p{
        padding-top: 20px;
    }
    img{
        width: 200px;
    }
`
const RightBoxMonth = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    font-size: 20px;
    justify-content: space-around;
    .temp{
        font-weight: 700;
    }
`

const Week_Month = (props) => {

    const [show, setShow]= useState(true)

    return (
        <Wrapper>
            {
                show ?
            <>
            <Button activate onClick={()=>setShow(true)}>This week</Button>
            <Button onClick={()=>setShow(false)}>This month</Button>
            </>
            :
            <>
            <Button onClick={()=>setShow(true)}>This week</Button>
            <Button activate onClick={()=>setShow(false)}>This month</Button>
            </>
            }
            
            {
                show ?
                <Box>
                    <Card>
                        <p>{weekDays[day + 1]}</p>
                        <p className='temp'>18<sup>&deg;</sup>C</p>
                        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt=""/>
                    </Card>
                    <Card>
                        <p>{weekDays[day + 2]}</p>
                        <p className='temp'>21<sup>&deg;</sup>C</p>
                        <img src="http://openweathermap.org/img/wn/09d@2x.png" alt=""/>
                    </Card>
                    <Card>
                        <p>{weekDays[day + 3]}</p>
                        <p className='temp'>18<sup>&deg;</sup>C</p>
                        <img src="http://openweathermap.org/img/wn/03d@2x.png" alt=""/>
                    </Card>
                </Box>
                :
                <Box month>
                    <BoxMonth>
                        <LeftBoxMonth>
                            <p>{weekDays[day].substring(0 , 3)}, {date.getDate() + 7} {currentMonth[month].substring(0 , 3)}</p>
                            <img src="http://openweathermap.org/img/wn/02d@2x.png" alt=""/>
                        </LeftBoxMonth>
                        <RightBoxMonth>
                            <span className='temp'>{Math.floor(props.torino.main.temp)}<sup>&deg;</sup>C</span>
                            <p className='wind'>Vento leggero</p>
                            <p className='temp_max'>La massima sarà di {Math.floor(props.torino.main.temp_max)}<sup>&deg;</sup>C, la minima sarà {Math.floor(props.torino.main.temp_min)}<sup>&deg;</sup>C.</p>
                            <span>
                            <p>Umidità: {Math.floor(props.torino.main.humidity)}%</p>
                            <p>UV: 3</p>
                            </span>
                        </RightBoxMonth>
                    </BoxMonth>
                </Box>
            }
        </Wrapper>
    )
}

export default Week_Month