import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20px;

    h2{
        color: var(--primary-color);
    }

    p{
        color: var(--white);
        font-weight: bold;
    }

    .card__container{
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: space-evenly;
    }

    .card{
        width: 350px;
        height: 350px;
        display: flex;
        flex-direction: column;
        transition: all 0.5s;
        transform: scale(.9);
        cursor: pointer;
        
        img{
            width: 345px;
        }
    }
    
    .card:hover{
        -webkit-transform: scale(1);
        border: 3px solid var(--primary-color);
        transition: all ease-in-out 0.5s;
    }

    .card__inner{
        h3{
            color: var(--primary-color);  
        }

        p{
           color: var(--white);
        }
    }

    @media (min-width: 768px){
        margin-top: 50px;
        
        .card__container{
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            justify-content: space-evenly;
        }

        .card{
            width: 350px;
            height: 350px;
            display: flex;
            flex-direction: column;
            transition: all 0.5s;
            transform: scale(.9);
            cursor: pointer;
        
        }
        
        img{
            width: 294px;
        }
    }

`
