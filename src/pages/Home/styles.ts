import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-areas: "menu body";
`

export const Menu = styled.div`
  flex: 1;
  grid-area: menu;

  display: flex;
  flex-direction: column;
  
  background-color: #6663d4;
  color: #eff1ff;
`

export const Navigator = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  color: #6663d4;

  div {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    width: 70%;
    padding: 16px;
    height: 40px;
    align-items: center;
    background-color: #6663d4;
    border-radius: 8px;
    color: #eff1ff;

    :hover {
      background-color: ${shade(0.3, '#6663d4')};
    }

    li {
      list-style: none;
      margin-left: 20px;
    }

    & + div {
      margin-top: 20px;
    }

    transition: color 0.2s;
  }

  .select {
    display: flex;
    justify-content: flex-start;
    width: 70%;
    padding: 16px;
    height: 40px;
    align-items: center;
    background-color: #eff1ff;
    border-radius: 8px;
    color: #6663d4;
  }  
`

export const Box = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;

  h1 {
      margin-left: 20px;
      font-weight: 700;
      font-size: 32px;
  }
`

export const Banner = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  div {  
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    height: 300px;
    width: 180px;
    background-color: #eff1ff; 
    border-radius: 16px;
    color: #6663d4;

    font-size: 14px;
    font-weight: 600;

    p {
      margin-top: 16px;
      margin-left: 8px;
    }

    svg {
      cursor: pointer;
      position: absolute;
      color: #ee5253;
      margin-top: 36px;
      right: 30px;
    }

    .svg {
      background-color: transparent;
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .svg svg {
      position: initial;
      height: 100%;
      width: 100%;
    }    
  }
`

export const Body = styled.div`
    grid-area: "body";
    flex: 1;

    header {
      height: 100px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        margin-left: 40px;
      }


      strong {
        font-size: 14px;
        margin: 0 16px;
      }

      div {
        display: flex;
        align-items: center;
      }       

      svg {
        color: #888;
        margin: 0 16px;
        cursor: pointer;
      }

      svg + svg + svg {
        margin-right: 80px;
      }

      .notification {
        position: relative;
        
        &::after {
          background-color: #fa983a;
          width: auto;
          height: auto;
          padding: 4px 4px;
          position: absolute;
          border-radius: 50%;
          border: 2px solid #eff1ff;
          text-align: right;
          color: white;
          content: '';
          right: 16px;
          top: 2px;         
        } 
      }
    }
`

export const User = styled.div`
  border-radius: 50%;

  img {
    position: relative;
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 32px;                   
  }

  &::after {
    background-color: #10ac84;
    width: auto;
    height: auto;
    padding: 4px 4px;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #eff1ff;
    text-align: right;
    color: white;
    content: '';
    right: 32px;
    top: 26px;         
  }  
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Info = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 40px;

  .layer {
    background-color: #6663d4;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    justify-content: space-between;

    svg {
      border: 0;
      height: 200px;
      width: 200px;
      padding: 0;
      margin: 0;
    }

    strong {
      color: #eff1ff;
      font-size: 18px;
    }

    p {
      margin-top: 18px;
      max-width: 350px;
      color: #eff1ff;
      font-size: 16px;
    }

    button {
      margin-top: 32px;
      border: none;
      color: #eff1ff;
      background-color: #e99417;
      width: 100px;
      height: 30px;
      border-radius: 8px;
    }
  }
`

export const Aside = styled.aside`
  width: 35%;
  height: 100%;
`