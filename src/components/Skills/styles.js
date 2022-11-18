import styled from 'styled-components';

export const Container = styled.div`
    @media (min-width: 1364px){
        display: flex;
        background-color: var(--secondary-color);

        h2{
            display: flex;
            justify-content: center;
            color: var(--primary-color);
            padding:10px;
        }
            
        .skills__left{
            border-right: 3px dotted var(--primary-color);
            width: 650px;
        }
        
        .skills__right{
            width: 650px;
        }
            
        .card__container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 20px;
        }

        .card{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 250px;

            img{
                width: 200px;
                height: 200px;
                transition: all .5s;
                border: 10px solid transparent;
            }
            
            img:hover{
                border: 10px solid var(--primary-color);
                border-radius: 50%;
            }

            h3{
                display: flex;
                flex-direction: column;
                color: var(--primary-color);
                display: flex;
                align-items: center;
                padding:10px;
            
            }
        }
    }

    @media (min-width: 1024px){
        display: flex;

        h2{
            display: flex;
            justify-content: center;
            color: var(--primary-color);
            padding:10px;
        }
            
        .skills__left{
            border-right: 3px dotted var(--primary-color);
            max-width: 500px;
        }
        
        .skills__right{
            max-width: 500px;
        }
            
       .card__container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            flex-wrap: wrap;
            padding: 20px;
        }

        .card{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 250px;

            img{
                width: 150px;
                height: 150px;
                transition: all .5s;
                border: 10px solid transparent;
            }
            
            img:hover{
                border: 10px solid var(--primary-color);
                border-radius: 50%;
            }

            h3{
                display: flex;
                flex-direction: column;
                color: var(--primary-color);
                display: flex;
                align-items: center;
                padding:10px;
            
            }
        }
    }

    @media (min-width: 768px){
        display: flex;

        h2{
            display: flex;
            justify-content: center;
            color: var(--primary-color);
            padding:10px;
        }
            
        .skills__left{
            border-right: 3px dotted var(--primary-color);
            max-width: 375px;
        }
        
        .skills__right{
            max-width: 375px;
        }
            
       .card__container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            flex-wrap: wrap;
            padding: 20px;
        }

        .card{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 250px;

            img{
                width: 150px;
                height: 150px;
                transition: all .5s;
                border: 10px solid transparent;
            }
            
            img:hover{
                border: 10px solid var(--primary-color);
                border-radius: 50%;
            }

            h3{
                display: flex;
                flex-direction: column;
                color: var(--primary-color);
                display: flex;
                align-items: center;
                padding:10px;
            
            }
        }
    }

    @media (min-width: 375px){
        display: flex;
        flex-direction: column;

        h2{
            display: flex;
            justify-content: center;
            color: var(--primary-color);
            padding:10px;
        }
            
        .skills__left{
            border-right: none;
            max-width: 375px;
        }
        
        .skills__right{
            max-width: 375px;
        }
            
       .card__container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            flex-wrap: wrap;
            padding: 20px;
        }

        .card{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 250px;

            img{
                width: 150px;
                height: 150px;
                transition: all .5s;
                border: 10px solid transparent;
            }
            
            img:hover{
                border: 10px solid var(--primary-color);
                border-radius: 50%;
            }

            h3{
                display: flex;
                flex-direction: column;
                color: var(--primary-color);
                display: flex;
                align-items: center;
                padding:10px;
            
            }
        }
    }
`;
