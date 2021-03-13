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
  padding: 30px 50px;
`

const TopContainer = styled.div `
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const BottomContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
        <CenterWrapper />
        <RightWrapper />
      </BottomContainer>

    </Container>
  )
}

export default App;
