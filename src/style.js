import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: white;
    `
    export const TitleNewsletter = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: 100;
    color: white;
    text-align: center;
  `;
  
  export const ParagraphNewsletter = styled.p`
    font-size: 1rem;
    color: white;
    text-align: center;
    margin: 45px;
  `;

export const Newsletter = styled.div`
form {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  

}
`;

export const ParentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;

`

export const BoxNewsletter = styled.div`
    background-color: #1b216d;
    display: flex;
    flex-direction: column;

    width: 813px;
    height: 363px;

    border-radius: 20px;
    padding: 60px 100px 50px;
    margin: 85px auto;
`

export const FormContent = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    


`

export const InputEmail = styled.input`
    width: 431px;
    height: 31px;
    border-radius: 20px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    margin: 20px 10px ;
`
export const ButtonSubscribe = styled.button`
    background-color: white;
    width: 129px;
    height: 46px;
    padding: 10px 20px;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
`

