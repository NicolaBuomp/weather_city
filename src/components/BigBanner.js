import React from 'react';
import styled from 'styled-components';
import {date, day, month, weekDays, currentMonth} from '../Date'
import Torino from '../assets/torino.jpg'

const gradients = {
    Clear : "linear-gradient(rgba(89,128,233,1), rgba(111,170,242,1))",
    Thunderstorm : "linear-gradient(rgba(78,78,78,1), rgba(148,148,148,1))",
    Drizzle : "linear-gradient(rgba(78,78,78,1), rgba(148,148,148,1))",
    Rain : "linear-gradient(rgba(121,121,121,1), rgba(148,148,148,1))",
    Snow : "linear-gradient(rgba(210,210,210,1), rgba(148,148,148,1));",
    Clou : "linear-gradient(rgba(78,188,255,1), rgba(111,111,111,1))",
}

const Wrapper = styled.div`
    width:100%;
    min-height: 330px;
    background-image: url(${props => props.img});
    background-size: cover;
    padding: 30px 0;
    border-radius: 20px;
    box-shadow: 2px 7px 39px -16px rgba(0,0,0,0.65);
    position: relative;
    text-align: center;
    @media (min-width: 1200px) {
        width: 70%;
        text-align: left;
        padding: 30px 100px;
        margin-right: 10px;
  }
`

const TitleCity = styled.h1`
    font-weight: 700;
    padding: 5px 0;
`

const CurrentDate = styled.p`
    padding: 5px 0;
    font-size:18px;
    font-weight: 700;
`
const Condition = styled.p`
    padding: 5px 0;
    text-transform: capitalize;
`
const TempWidget = styled.div`
    text-align: center;
    height: 250px;
    width: 20%;
    max-width: 90px;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    position: absolute;
    left: -20px;
    top: 40px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 2px 7px 39px -16px rgba(0,0,0,0.65);
    background: ${(props) => props.gradients || 'linear-gradient(rgba(78,78,78,1), rgba(148,148,148,1))'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    img{
        width: 100%;
        padding-top: 10px;
    }
`


const BigBanner = (props) => {

    return (
        <Wrapper img={Torino}>
            <TempWidget gradients={gradients[props.torino.weather[0].main]}>
                <p>
                    {Math.floor(props.torino.main.temp)}
                    <sup>&deg;</sup>C
                </p>
                    
                <img src={"http://openweathermap.org/img/w/"+props.torino.weather[0].icon+'.png'} alt=""/>
            </TempWidget>
            <TitleCity>{props.torino.name}</TitleCity>
            <CurrentDate>{weekDays[day]} {date.getDate()}, {currentMonth[month]}</CurrentDate>
            <Condition>{props.torino.weather[0].description}</Condition>
        </Wrapper>
    )
}

export default BigBanner