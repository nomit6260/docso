import React from 'react'
import styled from "styled-components"
import { Card, CardHeading } from "components/Pages/Card"
import { InfoLogo, HospitalLogo, MedicineLogo, MedLogo, PathoLogo, ReportLogo, Scrnshot1 } from "assets/icons"
import { Link } from 'react-router-dom';

function FeaturesComponent() {
    return (
        <Container >
            <h1 className="head">Features</h1>

           <Scrnshot1 className="snap"/>

            <Card>
                <CardHeading>
                    <HospitalLogo className="logo"/><span className="Chead">Choose your hospital</span>
                </CardHeading><br/>
                <p>You can manually choose your's choice of hospital and easily consult to your neariest hospital.</p>
            </Card>

            <Card>
                <CardHeading>
                  <MedLogo className="logo"/>Nearby Medical Stores
                </CardHeading><br/>
                <p>The app will show the list of nearby medical stores and there location by which you can easily navigate to the stores.</p>
            </Card>

            <Card>
                <CardHeading>
                 <ReportLogo className="logo"/> Get Digital Reports
                </CardHeading><br/>
                <p>Get the digital medical reports, which is Accessible from anywhere and faster to get your reports.</p>
            </Card>

            <Card>
                <CardHeading>
                 <MedicineLogo className="logo"/>Buy Medicine Online
                </CardHeading><br/>
                <p>You can order medicine online with easy and convenient payment options.</p>
            </Card>

            <Card>
                <CardHeading>
                <PathoLogo className="logo"/>Patholabs Appointments
                </CardHeading><br/>
                <p>Not only doctor's appointment but the appointment for patholabs can be easily booked on a single click.</p>
            </Card>

            <Card>
                <CardHeading>
                 <InfoLogo className="logo"/>Medicine Details
                </CardHeading><br/>
                <p>Most of times you need the medicine details before consumption, so the app will let you find the details of medicines.</p>
            </Card><br/><br/>
            
            
        </Container>
    )
}

export default FeaturesComponent

const Container = styled.div`
    background-color:#f7faff;
    padding-top: 8rem;  
    padding-left: 10rem;
    
    
    .head{
        font-size:3.3rem;
        color:#1eab94;
        text-align:center;
    }
    .Chead{
        margin-top:
    }
    .snap{
        width:450px;
        height:auto;
        float:right;
        margin-right:100px;
        margin-top:4rem;
    }
    .title{
        font-size: 2.3rem;
        color: #054625;
    }
    p{
        font-size: 1.5rem;
        color: #095DB9;
        margin-left:5px;
    }
    .box{
        border: solid;
        box-shadow: 5px 10px 8px #ABAEAC;
        margin:20px;
        width: 45%;
        padding: 10px;

    }
   
    .logo{
        height: 60px;
        widht: 60px;
        margin-top:5px;
        margin-left:5px;
        padding-right:30px;
    }
`;
