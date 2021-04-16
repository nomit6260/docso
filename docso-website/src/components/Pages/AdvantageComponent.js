import React from 'react'
import styled from "styled-components"
import { CalenderLogo,PhoneLogo,ClockLogo,BellLogo,AdvantageImage } from "assets/icons"
import { Link } from 'react-router-dom';
 
function AdvantageComponent() {
   return (
       <Container>
           <h1 className="head">Advantages</h1>
           <div className="half">
               <Link to="/advantage"><AdvantageImage className="image"/></Link>
               <div>
                   <div className="box">
                       <div className="icontitle">
                               <Link to="/advantage"><ClockLogo className="logo"/></Link>
                               <h2 className="title">TIME</h2>
                       </div>
                       <p className="para">Highly manageable, less consumption and less wastage of
                       your precious time as Docs'O provides you with the online
                       booking platform which would save you from the hustle
                       and bustle of appointment booking hospital line.</p>
                   </div>
 
                   <div className="box">
                       <div className="icontitle">
                               <Link to="/advantage"><BellLogo className="logo"/></Link>
                               <h2 className="title">REMAINDER</h2>
                       </div>
                       <p className="para">This app comes with a feature which will never
                       let you miss you appointment, if you are too busy or you have a tight
                       schedule don't worry this feature will give you an remainder
                       notification few hours before so that you never miss it.</p>
                  </div>
       
          
                   <div className="box">
                       <div className="icontitle">
                           <Link to="/advantage"><CalenderLogo className="logo"/></Link>
                           <h2 className="title">ASSURANCE OF APPOINTMENT</h2>
                       </div>
                       <p className="para">This app will provide a 100% guarantee and assurance that
                       your appointment gets booked .You will receive a pop up notification and
                       you can view your booked appointment status in the column as soon as
                       the hospital accepts it.</p>
                   </div>
 
                   <div className="box">
                       <div className="icontitle">
                           <Link to="/advantage"><PhoneLogo className="logo"/></Link>
                            <h2 className="title">EASY COMMUNICATION</h2>
                       </div>
                       <p className="para">If you don't thik you health issue to be that big or you
                       can't reach him in such case you can easily consult the
                       Doctor through a video/voice call and get a solution to you health issues.</p>
                   </div>
               </div>
           </div>
            
          
        
       </Container>
   )
}
 
export default AdvantageComponent
 
const Container = styled.div`
   background-color:#E6EAE8;
   padding-top: 8rem; 
   padding-left: 8rem;
  
   .head{
       font-size:3.3rem;
       color:#1eab94;
       text-align: center;
   }
   .title{
       font-size: 2.0rem;
       color: #054625;
       margin-left: 20px;
       margin-top: 10px;
   }
   .para{
       font-size: 1.5rem;
       color: #095DB9;
   }
   .box{
       border: solid;
       box-shadow: 5px 10px 8px #ABAEAC;
       margin-left: 40px;
       margin: 20px;
       width: 75%;
       padding: 10px;
   }
 
   .half{
       display: flex;
   }
   .logo{
       height: 60px;
       widht: 60px;
   }
 
   .icontitle{
       display: flex;
   }
   .image{
       height: 800px;
       width: 500px;
   }
`;

