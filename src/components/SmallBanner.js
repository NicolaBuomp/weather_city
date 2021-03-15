import React from 'react'
import styled from 'styled-components'
import {date, day, month, weekDays, currentMonth, time} from '../Date'

const gradients = {
    Clear : "linear-gradient(90deg, rgba(89,128,233,1) 0%, rgba(111,170,242,1)100%)",
    Thunderstorm : "linear-gradient(90deg, rgba(78,78,78,1) 0%, rgba(148,148,148,1)100%)",
    Drizzle : "linear-gradient(90deg, rgba(78,78,78,1) 0%, rgba(148,148,148,1)100%)",
    Rain : "linear-gradient(90deg, rgba(121,121,121,1) 0%, rgba(148,148,148,1)100%)",
    Snow : "linear-gradient(90deg, rgba(210,210,210,1) 0%, rgba(148,148,148,1)100%);",
    Clouds : "linear-gradient(90deg, rgba(78,188,255,1) 0%, rgba(168,185,186,1) 100%)",
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    color: #FFFFFF;
    @media (min-width: 576px) {
        flex-direction: row;
    }
    @media (min-width: 1200px) {
        flex-direction: column;
        min-width: 380px;
        min-height: 330px;
        margin-left: 10px;
        justify-content: space-between;
    }
`
const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 130px;
    padding: 8px;
    margin: 15px 0;
    border-radius: 20px;
    box-shadow: 2px 7px 39px -16px rgba(0,0,0,0.45);
    background: ${(props) => props.gradients || "linear-gradient(90deg, rgba(78,78,78,1) 0%, rgba(148,148,148,1)100%)"};
    @media (min-width: 576px) {
        margin-right: 15px;
    }
    @media (min-width: 1200px) {
        margin: 0;
    }
`
const AddBanner = styled.div`
    width: 100%;
    margin: 15px 0;
    display: flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    font-weight: 700;
    color: #01175F;
    font-size: 22px;
    @media (min-width: 1200px) {
        margin: 0;
    }
`
const Description = styled.div`
    font-size: 18px;
    .date{
        padding:10px 0;
    }
`
const Icon = styled.div`
    img{
        width: 100px;
    }
`

const Temp = styled.div`
    font-size: 30px;
`

const SmallBanner = (props) => {
    return (
        <Wrapper>
            <AddBanner>
                <p><i className="far fa-plus-square"></i> Aggiungi città</p>
            </AddBanner>

            <Banner gradients={gradients[props.bologna.weather[0].main]}>
                <Description>
                    <h2>{props.bologna.name}</h2>
                    <p className='date'>{weekDays[day]} {date.getDate()}, {currentMonth[month]}</p>
                    <p>{time}</p>
                </Description>

                <Icon>
                    <img src={"http://openweathermap.org/img/w/"+props.bologna.weather[0].icon+'.png'} alt=""/>
                </Icon>

                <Temp>
                    <p>
                        {Math.floor(props.bologna.main.temp)}
                        <sup>&deg;</sup>C
                    </p>
                </Temp>

            </Banner>
            
            <Banner gradients={gradients[props.napoli.weather[0].main]}>
                <Description>
                    <h2>{props.napoli.name}</h2>
                    <p className='date'>{weekDays[day]} {date.getDate()}, {currentMonth[month]}</p>
                    <p>{time}</p>
                </Description>

                <Icon>
                    <img src={"http://openweathermap.org/img/w/"+props.napoli.weather[0].icon+'.png'} alt=""/>
                </Icon>

                <Temp>
                    <p>
                        {Math.floor(props.napoli.main.temp)}
                        <sup>&deg;</sup>C
                    </p>
                </Temp>

            </Banner>
        </Wrapper>
    )
}

export default SmallBanner