import React, { useState, useEffect } from 'react';
import { getData } from './api/api'
import BigBanner from './components/BigBanner'
import SmallBanner from './components/SmallBanner'
import RightWrapper from './components/RightWrapper'
import CenterWrapper from './components/CenterWrapper'
import LeftWrapper from './components/LeftWrapper'
import styled from 'styled-components'
import './BaseLayout.css'

const Container = styled.div `
  width: 100%;
  padding: 10px 20px;
  max-width: 1800px;
  margin: 0 auto;
`

const TopContainer = styled.div `
  width: 100%;
  height: 50%;
  padding-bottom: 40px;
  display: flex;
  align-items:center;
  flex-direction:column;
  @media (min-width: 1200px) {
      flex-direction: row;
      justify-content: space-between;
  }
`

const BottomContainer = styled.div `
  width: 100%;
  height: 50%;
  display: flex;
  align-items:center;
  flex-direction:column;
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`

const App = () => {

  const [torino, setTorino] = useState()
  const [bologna, setBologna] = useState()
  const [napoli, setNapoli] = useState()

  useEffect(()  => {

    getData('Torino')
    .then(res => {
      setTorino(res)
    })

    getData('Bologna')
    .then(res => {
      setBologna(res)
      console.log(res);
    })

    getData('Napoli')
    .then(res => {
      setNapoli(res)
      console.log(res);
    })
  },[])
  
  return (
    <Container>
      <TopContainer>
        {torino && bologna && napoli &&
        <>
          <BigBanner torino={torino}/>
          <SmallBanner bologna={bologna} napoli={napoli}/>
        </>
        }
      </TopContainer>

      <BottomContainer>
        <LeftWrapper />
        <CenterWrapper torino={torino}/>
        <RightWrapper />
      </BottomContainer>

    </Container>
  )
}

export default App;
