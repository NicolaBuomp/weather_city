import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    
`
const Search = styled.div`
    position:relative;

    input{
        min-width: 380px;
        min-height: 130px;
        margin: 15px 0;
        padding-left: 30px;
        border: none;
        border-radius: 20px;
        box-shadow: 2px 7px 39px -16px rgba(0,0,0,0.45);
        font-size: 25px;
        :focus{
            outline: none;
        }
        ::placeholder{
        color: #D3D3D3;
        }
    }
    h2{
        padding-left: 15px;
        padding-bottom: 10px;
    }
`
const Button = styled.button`
    width: 50px;
    min-height: 130px;
    border: none;
    border-radius: 20px;
    position:absolute;
    top: 54px;
    right: 0;
    background: linear-gradient(180deg, rgba(89,128,233,1) 0%, rgba(114,158,238,1) 100%);
    font-size: 30px;
    color: #ffffff;
    cursor:pointer;
    :focus{
        outline:none;
    }
`

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 380px;
    min-height: 130px;
    padding: 8px;
    margin: 15px 0;
    border-radius: 20px;
    box-shadow: 2px 7px 39px -16px rgba(0,0,0,0.45);
    background: linear-gradient(90deg, rgba(89,128,233,1) 0%, rgba(111,170,242,1)100%);
    font-size: 25px;
    color: #ffffff;
    p{
        padding-top: 10px;
        font-weight: 700;
    }
`

const Search_Location = () => {
    return (
        <Wrapper>
            <Search>
                <h2>Search</h2>
                <input type="text" placeholder="ex: Miami"/>
                <Button type="submit"><i class="fas fa-search"></i></Button>
            </Search>
            <Search>
                <h2>Localization</h2>
                <Banner>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Add localization</p>
                </Banner>
            </Search>
        </Wrapper>
    )
}

export default Search_Location