import React from "react";
import styled from "styled-components";

//Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

//Import images
import home2 from '../img/home2.png';

//Import Styles
import { About, Description, Image } from "../styles";

const ServicesSection = () => {
    return (
        <Services>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock}/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem5 Amet non esse veniam enim sunt ex laboris.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork}/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem5 Amet non esse veniam enim sunt ex laboris.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm}/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem5 Amet non esse veniam enim sunt ex laboris.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money}/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem5 Amet non esse veniam enim sunt ex laboris.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src = {home2} /> 
            </Image>
        </Services>
    );
};

/*If you want About to be slightly different from imported About
Also, styled(About) will copy all properties of About from styles.js file
*/
const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }

    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`

export default ServicesSection;