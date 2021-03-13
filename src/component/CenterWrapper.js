import React, {useState} from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
`
const Button = styled.button`

`

const Week_Month = () => {

    const [show, setShow]= useState(true)

    return (
        <Wrapper>
            <Button onClick={()=>setShow(true)}>This week</Button>
            <Button onClick={()=>setShow(false)}>This month</Button>
            {
                show ? <p>Week</p> : <p>Month</p>
            }
        </Wrapper>
    )
}

export default Week_Month