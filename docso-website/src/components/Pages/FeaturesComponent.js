import React from 'react'
import styled from "styled-components"
import { Card, CardHeading } from "components/Pages/Card"
import { InfoLogo, HospitalLogo, MedicineLogo, MedLogo, PathoLogo, ReportLogo, Scrnshot1 } from "assets/icons"
import "animate.css/animate.min.css";
import Img5 from "components/ScreenShot/download-background.jpg"

function FeaturesComponent() {
    return (
        <Container style={{backgroundImage: `url(${Img5})`,
        backgroundRepeat: 'no-repeat',
         width:'100%', backgroundAttachment:'fixed',
          backgroundSize:'100% 100%' }}>
            <h1 className="head">Features</h1>
            <Scrnshot1 className="snapmob"/>
           <div className="outer">
<<<<<<< HEAD
           
=======
        
>>>>>>> c5a694515b4769007a4958eb0a16157c73b0c6e5
              <div >
          <Card>
                <CardHeading>
                    <HospitalLogo className="logo"/><span className="Chead">CHOOSE YOUR HOSPITAL</span>
                </CardHeading><br/>
                <p>You can manually choose your's choice of hospital and easily consult to your neariest hospital.</p>
            </Card>

            <Card>
                <CardHeading>
                  <MedLogo className="logo"/>NEARBY MEDICAL STORES
                </CardHeading><br/>
                <p>The app will show the list of nearby medical stores and there location by which you can easily navigate to the stores.</p>
            </Card>

            <Card>
                <CardHeading>
                 <ReportLogo className="logo"/> GET DIGITAL REPORTS
                </CardHeading><br/>
                <p>Get the digital medical reports, which is Accessible from anywhere and faster to get your reports.</p>
            </Card>
            </div>
            <Scrnshot1 className="snap"/>
          
          
          <div className="second" class="animate__animated animate__fadeInUp">
            <Card>
                <CardHeading>
                 <MedicineLogo className="logo"/>BUY MEDICINE ONLINE
                </CardHeading><br/>
                <p>You can order medicine online with easy and convenient payment options.</p>
            </Card>

            <Card>
                <CardHeading>
                <PathoLogo className="logo"/>PATHOLABS APPOINTMENTS
                </CardHeading><br/>
                <p>Not only doctor's appointment but the appointment for patholabs can be easily booked on a single click.</p>
            </Card>

            <Card>
                <CardHeading>
                 <InfoLogo className="logo"/>MEDICINE DETAILS
                </CardHeading><br/>
                <p>Most of times you need the medicine details before consumption, so the app will let you find the details of medicines.</p>
            </Card><br/><br/>
            </div> 
            </div> 
        </Container>
    )
}

export default FeaturesComponent

const Container = styled.div`
    background-color:#f7faff;
    padding-top: 8rem;  
    padding-left: 5rem;
    @media (max-width: 600px) {
        padding-left:2rem;
       }
    
    
    .head{
        font-size:4rem;
       color:white;
        text-align:center;
    }
    .Chead{
        margin-top:
    }
   
    .snap{
        width:400px;
        height:auto;
        float:right;
        margin-left:-45px;
        display:block;
        @media (max-width: 600px) {
<<<<<<< HEAD
           display: none;
=======
           width:200px;
           height:auto;
           display:none;
>>>>>>> c5a694515b4769007a4958eb0a16157c73b0c6e5
       }
    }
    .title{
        font-size: 2.3rem;
        color: black;
        @media (max-width: 600px) {
            margin-top:5px;
            font-size:1.8rem;
            text-align:justify;
            padding-right:40px;
           }
    }
    p{
        font-size: 1.5rem;
        color: white;
        margin-left:5px;
        padding-bottom:8px;
        @media (max-width: 600px) {
            font-size:1.75rem;
            text-align:justify;
            padding-right:10px;
       }
    }
    .box{
        border: solid;
        box-shadow: 5px 10px 8px #ABAEAC;
        margin-left:20px;
        width: 45%;
        padding: 10px;
    }
   
    .logo{
        height: 60px;
        width: 60px;
        margin-top:5px;
        margin-left:5px;
        padding-right:5px;
        @media (max-width: 600px) {
            width:40px;
            height:40px;
            padding-right:5px;
           }
    }
    .outer{
        display: flex;
        @media (max-width: 600px) {
            display:block;
       }    
    }
<<<<<<< HEAD
    
=======
    .inner{
        display: flex;
        @media (max-width: 600px) {
            
       }
    }
>>>>>>> c5a694515b4769007a4958eb0a16157c73b0c6e5
    .second{
        margin-left: none;
    }
    .snapmob{
        display: none;
        @media (max-width: 600px) {
            display:block;
            width: 350px;
            height: 550px;
            margin-left: none;
            
       } 

    }
`;
