import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 430px;
    margin: 25px 0;
    @media (min-width: 1200px) {
        max-width: 380px;
        margin: 0;
        h2{
            margin:15px 0;
        }
    }
`
const NowTemp = styled.div`
    position: relative;
    width: 100%;
    height: 380px;
    background: linear-gradient(130deg, rgba(89,128,233,1) 0%, rgba(114,158,238,1) 100%);
    box-shadow: inset 3px -33px 44px -15px rgba(255,255,255,0.5);
    border-radius: 15px;
    margin: 25px 0;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
    p{
        padding-top: 40px;
        font-size: 24px;
        font-weight: 700;
    }
    h3{
        padding: 30px 20px 0 0;
    }
    @media (min-width: 1200px) {
        margin: 0;
    }
`
const Temp = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;
    position: relative;
`

const Circle  = styled.span `
        padding: ${props => props.padding || '10px 10px'};
        background-color: #FFFFFF;
        border-radius: 50%;
        position: relative;
        ::before{
            content: '';
            background-color: #FFFFFF;
            position: absolute;
            padding: ${props => props.paddingContent};
            left:  ${props => props.leftContent || '5px'};
        }
`
const Now = styled.span`
    color: #FFFFFF;
    padding-right: 17px;
    font-size: 30px;
    font-weight: 700;
`

const Temperature = () => {
    return (
        <Wrapper>
            <h2>Today</h2>
            <NowTemp>
                <Now>Now</Now>
                <Temp>
                    <span>22<sup>&deg;</sup>C</span>
                    <Circle padding={'15px 15px'} leftContent={'10px'} paddingContent={'40px 5px'} afterConten></Circle>
                    <span>14:00</span>
                </Temp>
                <Temp>
                    <span>20<sup>&deg;</sup>C</span>
                    <Circle paddingContent={'40px 5px'} />
                    <span>15:00</span>
                </Temp>
                <Temp>
                    <span>17<sup>&deg;</sup>C</span>
                    <Circle paddingContent={'40px 5px'} />
                    <span>16:00</span>
                </Temp>
                <Temp>
                    <span>13<sup>&deg;</sup>C</span>                    
                    <Circle paddingContent={'14px 5px'}/>
                    <span>17:00</span>
                </Temp>
            </NowTemp>
        </Wrapper>
    )
}

export default Temperature