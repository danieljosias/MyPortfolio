import styled from 'styled-components';

export const Container = styled.div`
    

    @media (max-width: 1364px){
        display: flex;
        justify-content: center;
        margin: 100px;
        
        .wrapper{
            display: flex;
            flex-direction: column;
            text-align: center;
            gap: 20px;

            h2{
                color: var(--primary-color);
            }

            p{
                color: var(--white);
                font-weight: bold;
            }
        }

        .card{
            width: 300px;
            background-color: transparent;
        }
        
        .card__inner{
            display: flex;
            justify-content: center;
            gap:40px;
            padding: 20px;

            img{
                width: 250px;
                height: 200px;
                border-radius: 0px 20px 0px 20px;
            }
        }
        
        .card__right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: justify ;
            width: 250px;
            height: 200px;
            gap: 10px;

            h3{
                color: var(--primary-color);
                font-weight: bold;
            }

            p{
                color: var(--black-1);
                font-weight: bold;
            }

            button{
                border: none;
                background-color: transparent;
            }
            
            .link{
                display: block;
                text-decoration: none;
                text-transform: uppercase;
                border: 2px solid var(--primary-color);
                padding: 10px;
                position: relative;
                overflow: hidden;
                color: var(--black-1);
                font-weight: bold;
            }

            .link:before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 100%;
                height: 100%;

                background-color: var(--primary-color);
                z-index: -1;
                transition: .5s ease-in;
            }
            
            .link1:before{
                width: 110%;
                height: 0;
                transform: translate(-50%,-50%) rotate(45deg);
            }
            
            .link1:hover:before{
                height: 550%;
            }
        }
        
        .carousel .slick-prev,.carousel .slick-next {
            color: var(--primary-color);
        }

        .slick-slider{
            width: 1000px;
        }
        
        .slick-list{
            border-radius: 15px;
            background: var(--white);
        }
        
        .slick-next{
            right: -55px;
            padding: 20px;
        }
        
        .slick-prev{
            left: -105px;
            padding: 20px;

        }

        .slick-prev:before, .slick-next:before{
            color: var(--primary-color);
            font-size: 50px;
            
        }
        
        .slick-dots li button:before{
            color: var(--primary-color);
            
        }
    }

    @media (max-width: 1440px){
        display: flex;
        justify-content: center;
        margin: 100px;
        
        .wrapper{
            display: flex;
            flex-direction: column;
            text-align: center;
            gap: 20px;

            h2{
                color: var(--primary-color);
            }

            p{
                color: var(--white);
                font-weight: bold;
            }
        }

        .card{
            width: 300px;
            background-color: transparent;
        }
        
        .card__inner{
            display: flex;
            justify-content: center;
            gap:40px;
            padding: 20px;

            img{
                width: 250px;
                height: 200px;
                border-radius: 0px 20px 0px 20px;
            }
        }
        
        .card__right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: justify ;
            width: 250px;
            height: 200px;
            gap: 10px;

            h3{
                color: var(--primary-color);
                font-weight: bold;
            }

            p{
                color: var(--black-1);
                font-weight: bold;
            }

            button{
                border: none;
                background-color: transparent;
            }
            
            .link{
                display: block;
                text-decoration: none;
                text-transform: uppercase;
                border: 2px solid var(--primary-color);
                padding: 10px;
                position: relative;
                overflow: hidden;
                color: var(--black-1);
                font-weight: bold;
            }

            .link:before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 100%;
                height: 100%;

                background-color: var(--primary-color);
                z-index: -1;
                transition: .5s ease-in;
            }
            
            .link1:before{
                width: 110%;
                height: 0;
                transform: translate(-50%,-50%) rotate(45deg);
            }
            
            .link1:hover:before{
                height: 550%;
            }
        }
        
        .carousel .slick-prev,.carousel .slick-next {
            color: var(--primary-color);
        }

        .slick-slider{
            width: 1000px;
        }
        
        .slick-list{
            border-radius: 15px;
            background: var(--white);
        }
        
        .slick-next{
            right: -55px;
            padding: 20px;
        }
        
        .slick-prev{
            left: -105px;
            padding: 20px;

        }

        .slick-prev:before, .slick-next:before{
            color: var(--primary-color);
            font-size: 50px;
            
        }
        
        .slick-dots li button:before{
            color: var(--primary-color);
            
        }
    }

    @media (max-width: 1024px){
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        

        .wrapper{
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: center;
            gap: 20px;
            

            h2{
                color: var(--primary-color);
            }

            p{
                color: var(--white);
                font-weight: bold;
            }
        }

        .card{
            width: 300px;
            background-color: transparent;
        }
        
        .card__inner{
            display: flex;
            justify-content: center;
            gap:40px;
            padding: 20px;
            
            img{
                width: 150px;
                height: 200px;
                border-radius: 0px 20px 0px 20px;
            }
        }
        
        .card__right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: justify ;
            width: 250px;
            height: 200px;
            gap: 10px;

            h3{
                color: var(--primary-color);
                font-weight: bold;
            }

            p{
                color: var(--black-1);
                font-weight: bold;
            }

            button{
                border: none;
                background-color: transparent;
            }
            
            .link{
                display: block;
                text-decoration: none;
                text-transform: uppercase;
                border: 2px solid var(--primary-color);
                padding: 10px;
                position: relative;
                overflow: hidden;
                color: var(--black-1);
                font-weight: bold;
            }

            .link:before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 100%;
                height: 100%;

                background-color: var(--primary-color);
                z-index: -1;
                transition: .5s ease-in;
            }
            
            .link1:before{
                width: 110%;
                height: 0;
                transform: translate(-50%,-50%) rotate(45deg);
            }
            
            .link1:hover:before{
                height: 550%;
            }
        }

        .slick-slider{
            width: 808px;
        }

        .slick-next{
            right: -25px;
            padding: 20px;
        }
        
        .slick-prev{
            left: -75px;
            padding: 20px;

        }
    }

    @media (max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        

        .wrapper{
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: center;
            gap: 20px;
            

            h2{
                color: var(--primary-color);
            }

            p{
                color: var(--white);
                font-weight: bold;
            }
        }

        .card{
            width: 300px;
            background-color: transparent;
        }
        
        .card__inner{
            display: flex;
            justify-content: center;
            gap:40px;
            padding: 20px;
            
            img{
                width: 150px;
                height: 200px;
                border-radius: 0px 20px 0px 20px;
            }
        }
        
        .card__right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: justify ;
            width: 250px;
            height: 200px;
            gap: 10px;

            h3{
                color: var(--primary-color);
                font-weight: bold;
            }

            p{
                color: var(--black-1);
                font-weight: bold;
            }

            button{
                border: none;
                background-color: transparent;
            }
            
            .link{
                display: block;
                text-decoration: none;
                text-transform: uppercase;
                border: 2px solid var(--primary-color);
                padding: 10px;
                position: relative;
                overflow: hidden;
                color: var(--black-1);
                font-weight: bold;
            }

            .link:before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 100%;
                height: 100%;

                background-color: var(--primary-color);
                z-index: -1;
                transition: .5s ease-in;
            }
            
            .link1:before{
                width: 110%;
                height: 0;
                transform: translate(-50%,-50%) rotate(45deg);
            }
            
            .link1:hover:before{
                height: 550%;
            }
        }

        .slick-slider{
            width: 608px;
        }

        .slick-next{
            right: -25px;
            padding: 20px;
        }
        
        .slick-prev{
            left: -75px;
            padding: 20px;

        }
    }

    @media (max-width: 375px){
        display: flex;
        justify-content: center;
        margin: 0px;
        
        .card{
            width: 300px;
            background-color: transparent;
        }
        
        .card__inner{
            display: flex;
            justify-content: center;
            gap:40px;
            padding: 20px;
            
            img{
                display: none;
                width: 150px;
                height: 200px;
                border-radius: 0px 20px 0px 20px;
            }
        }
        
        .card__right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: justify ;
            width: 250px;
            height: 200px;
            gap: 10px;

            h3{
                color: var(--primary-color);
                font-weight: bold;
            }

            p{
                color: var(--black-1);
                font-weight: bold;
            }

            button{
                border: none;
                background-color: transparent;
            }
            
            .link{
                display: block;
                text-decoration: none;
                text-transform: uppercase;
                border: 2px solid var(--primary-color);
                padding: 10px;
                position: relative;
                overflow: hidden;
                color: var(--black-1);
                font-weight: bold;
            }

            .link:before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 100%;
                height: 100%;

                background-color: var(--primary-color);
                z-index: -1;
                transition: .5s ease-in;
            }
            
            .link1:before{
                width: 110%;
                height: 0;
                transform: translate(-50%,-50%) rotate(45deg);
            }
            
            .link1:hover:before{
                height: 550%;
            }
        }

        .slick-slider{
            max-width: 250px;
        }

        .slick-next{
            right: -25px;
            padding: 20px;
        }
        
        .slick-prev{
            left: -75px;
            padding: 20px;

        }
    }


`;
