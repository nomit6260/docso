
import React from 'react'
import styled from "styled-components"
import "react-alice-carousel/lib/alice-carousel.css";
import { BlackBtn } from "styles/Buttons"
import { FaGooglePlay, FaApple, FaDesktop, FaUsers, FaMobileAlt, FaFontAwesome } from "react-icons/fa";
import { HiMail, HiCode } from "react-icons/hi"
import { Link } from 'react-router-dom';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from "components/Carousel/CarouselNauka"
import Img1 from "components/ScreenShot/splash.png"
import Img2 from "components/ScreenShot/home.png"
import Img3 from "components/ScreenShot/drawer.png"
import Img4 from "components/ScreenShot/book.png"
import Img5 from "components/ScreenShot/login.png"
import Img7 from "components/ScreenShot/detail.png"
import Img8 from "components/ScreenShot/doc-aval.png"
import Img9 from "components/ScreenShot/med-shop.png"
import Img10 from "components/ScreenShot/signup.png"
import Img6 from "components/ScreenShot/bg.jpg"


  

function HomeComponent() {
    return (
        <Container style={{backgroundImage: `url(${Img6})`, backgroundRepeat: 'no-repeat', width:'100%', backgroundAttachment:'fixed', backgroundSize:'100% 100%' }}>
     <div>
                
                </div>
                
                <div><h1 class="head">MOBILE APP TO</h1> <span className="change"> </span></div>

                <p>Docs'O not only provides you platform where you can book your appointments online but also provides you with some helpful features like patholabs, online digital reports, easy communication between doctor and patient , receive madicines at your doorsteps. Instead of downloading different apps for these purpose download Docs'O and enjoy all the features in one single app bacause "YOUR HEALTH COMES FIRST". Download it today!</p>
               

                <Link to={{ pathname: "https://google.com" }} target="_blank"><BlackBtn className="btn"> <FaApple/> App Store</BlackBtn></Link>
                <Link to={{ pathname: "https://google.com" }} target="_blank"><BlackBtn className="btn"> <FaGooglePlay/> Play Store</BlackBtn></Link>
                <img src={Img1}  className="image1"></img>
                <img src={Img2}  className="image2"></img>
                <br/><br/><br/><br/><br/>

                <div>
                    {/* <img src={Img3} className="image3"></img> */}
                    <h1 className="head1">Goals Setting</h1><br/><br/>
                    <p class="desc">Docs'O can easily help you to book your appointments with a doctor and many more functions like buying medicine online, calculate your BMI, see nearby medical stores.</p>
                    
                    <br/><br/>
                    <h1 className="head1">User Feedback</h1><br/><br/>
                    <p className="desc">This is a great app which can help you save time and make your live easier. And it will help improve your productivity levels.<br/>You should definitely give it a try when you need a good app.</p>
                    <br/><br/>
                    <FaDesktop className="icon"/> <span className="point">Responsive layout</span> <br/>
                    <FaUsers className="icon"/> <span className="point"> User Friendly UI</span><br/>
                    <FaMobileAlt className="icon"/> <span className="point"> Easily Accessible</span><br/>
                    <HiMail className="icon"/> <span className="point"> Contact forms</span><br/>
                    <FaFontAwesome className="icon"/> <span className="point"> FontAwesome icons</span><br/>
                    <HiCode className="icon"/> <span className="point"> Well-structured code</span><br/>
                </div>

                <br/><br/><br/><br/><br/>

                <div>
            <Carousel 
                elements={
                    [
                        <div className="slide-1">
                            <img src={Img1} className="sliderimg"></img>
                            <div className="text-slide">SPLASH SCREEN</div>
                        </div>,

                        <div className="slide-2">
                            <img src={Img2} className="sliderimg"></img>
                            <div className="text-slide">HOME SCREEN</div>
                        </div>,

                        <div className="slide-3">
                            <img src={Img3} className="sliderimg"></img>
                            <div className="text-slide">DRAWER NAVIGATION</div>
                        </div>,

                        <div className="slide-4">
                            <img src={Img4} className="sliderimg"></img>
                            <div className="text-slide">BOOK DOCTOR</div>
                        </div>,

                            <div className="slide-5">
                                <img src={Img5} className="sliderimg"></img>
                                <div className="text-slide">LOGIN SCREEN</div>
                            </div>,

                            <div className="slide-6">
                                <img src={Img7} className="sliderimg"></img>
                                <div className="text-slide">DETAIL SCREEN</div>
                            </div>,

                            <div className="slide-7">
                                <img src={Img8} className="sliderimg"></img>
                                <div className="text-slide">DOCTOR AVAILABLE</div>
                            </div>,

                            <div className="slide-8">
                                <img src={Img9} className="sliderimg"></img>
                                <div className="text-slide">NEARBY MEDICAL SHOP</div>
                            </div>,

                            <div className="slide-9">
                                <img src={Img10} className="sliderimg"></img>
                                <div className="text-slide">SIGNUP SCREEN</div>
                            </div>,

                        ]}
            />
            </div>

                <br/><br/><br/><br/><br/>
                <div>
                    {/* <img src={Img2} className="image4"></img> */}
                    <h1 className="head1">Drawer Navigation</h1><br/><br/>
                    <p class="desc">The app contains a drawer navigation which provide you lots of options to navigate, it makes you easily naviagte between the screens.</p>
                    <br/><br/>
                    <h1 className="head1">User Feedback</h1><br/><br/>
                    <p className="desc1">This is a great app which can help you save time and make your live easier. And it will help improve your productivity levels.<br/>You should definitely give it a try when you need a good app.</p>
                    <br/><br/>
                    <FaDesktop className="icon"/> <span className="point">Responsive layout</span> <br/>
                    <FaUsers className="icon"/> <span className="point"> User Friendly UI</span><br/>
                    <FaMobileAlt className="icon"/> <span className="point"> Easily Accessible</span><br/>
                    <HiMail className="icon"/> <span className="point"> Contact forms</span><br/>
                    <FaFontAwesome className="icon"/> <span className="point"> FontAwesome icons</span><br/>
                    <HiCode className="icon"/> <span className="point"> Well-structured code</span><br/>
                </div>
                <br/>
           
            <br/>
            <br/>  
            <br/>
           
            
               
            

            <br/>
            <br/>
            

            
            
        </Container>
    )
}

export default HomeComponent

const Container = styled.div`
    padding-top: 12rem;
    padding-left:8rem;
    @media (max-width: 600px) {
        padding-left:4rem;
      }
    .sliderimg{
        width: 400px;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;      
        object-fit: cover;
        padding-bottom:30px;
        @media (max-width: 600px) {
            width:220px;
            height:auto;

          }
       
      }
      .text-slide{
          font-size:3rem;
          color:white;
          text-align: center;
          @media (max-width: 600px) {
            font-size:2rem;
          }
      }
      
      .icon{
          font-size:3rem;
          color:${props => props.theme.yellow1};
          padding:5px;
      }
      .point{
          color:white;
          font-size:1.5rem;
          margin-top:500px
      }
      p{
          width:50%;
          color:white;
          font-size:2rem;
          @media (max-width: 600px) {
            text-align: justify;
            font-size:1.8rem;
            width:90%;
          }
      }
      .desc{
        width:80%;
        color:white;
        font-size:1.8rem;
        @media (max-width: 600px) {
            font-size:1.8rem;
            
          }
        
      }
      .desc1{
        width:50%;
        color:white;
        font-size:1.8rem;
        @media (max-width: 600px) {
            font-size:1.8rem;
            width:80%;
          }
      }
      .head{
          font-size:6rem;
          color:white;
          @media (max-width: 600px) {
            text-align: left;
            font-size:5rem;
           
          }
      }
      .head1{
          font-size:3rem;
          color:white;
          text-align:justify;
          text-decoration: underline;
          text-decoration-color: ${props => props.theme.yellow1};
      }
      .change:after{
                content:'';
                animation: changetext 10s infinite linear;
                font-size:6rem;
                color: ${props => props.theme.success};
                @media (max-width: 600px) {
                    text-align: center;
                    font-size:4.8rem;
                   
                  }
              
      }
      
      @keyframes changetext{
        0% { content:"BOOK APPOINTMENTS"; }
        25% { content:"CONSULT A DOCTOR"; }
        50% { content:"BUY MEDICINE"; }
        100% { content:"PATHOLABS REPORTS"; }
      }
      .btn{
        margin-top: 2rem;
        margin-right:2.5rem;
    }
    .image1{
        width:200px;
        height:auto;
        float:right;
        margin-right:0px;
        margin-top:-420px;
        @media (max-width: 600px) {                                               
            width:100px;
            height:auto;
            margin-top:120px;
            margin-right:50px;
          }
    }
    
    .image2{
        width:300px;
        height:auto;
        margin-top:-500px;
        float:right;
        margin-right:150px;
        @media (max-width: 600px) {
            width:150px;
            height:auto;
            margin-top:50px;
            margin-right:5px;
            padding-bottom:50px;
          }
          
    .image3{
        width:500px;
        height:auto;
        float:left;
        @media (max-width: 600px) {
            width:150px;
            height:auto;
            margin-left:0px;
          }
       
    }
    .image4{
        width:500px;
        height:auto;
        float:right;
        margin-right:100px;
        @media (max-width: 600px) {
            width:250px;
            height:auto;
            margin-right:0px;
          }
       
    }
      
`