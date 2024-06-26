import styled from 'styled-components';

export const FooterStyle = styled.div`
background-color: #D9D9D9;
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 50px;

svg{
    font-size: 25px;
}

.Links{
display: flex;
margin-left: 20px;
            
    .networks{
        display: flex;
        align-items: center;
        margin: 50px;


    a{  
        font-size: 20px;
        margin-left: 7px;
        text-decoration: none;
        color: black;
    }    
     }
}

        h5{
            color: black;
        }
`
