import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"

function AboutUsComponent() {
    return (
        <Container>
            <div>
            <h1 className="heading">About Us</h1>
            </div><br/>

            <span className="table">
            <h1 style={{color:"#1eab94"}}>Job Details</h1>
           <table>
           <tr><Link to="/blogs">   Quartile Blogs</Link></tr>
           <tr><Link to="/careers">  Careers at Quartile</Link></tr>
            <tr><Link to="/products">   Products and Solutions</Link></tr>
           </table>
           </span><br/><br/><br/><br/><br/><br/><br/><br/><br/>

           <span className="socialicon">
               <h1 style={{color:"#1eab94"}}>Share this page</h1>
               <table>
                   <tr>
                       <img style={{marginLeft:"20px"}} src="https://res.cloudinary.com/nomit/image/upload/v1616679307/QuartileLabs/facebook_e78hhe.png"></img>
                       <img src="https://res.cloudinary.com/nomit/image/upload/v1616679308/QuartileLabs/linkedin_hpfnjt.png"></img>
                       <img src="https://res.cloudinary.com/nomit/image/upload/v1616679308/QuartileLabs/twitter_k3ulm3.png"></img>
                       <img src="https://res.cloudinary.com/nomit/image/upload/v1616679307/QuartileLabs/apple_xehf6i.png"></img>
                   </tr>
               </table>
           </span>            

           <p>
           Numbers give you credibility, especially if you’re illustrating a problem you’re trying to solve or the progress you’ve made as a business (e.g. number of items sold or years you’ve been in business).

Consider the stats you can use to make a point about your company mission or quantify your impact as a business to include on your About Us page.

Whether you’re explaining the industry problem that comes up early in your story or highlighting the milestones at your story’s climax, tying relevant figures into your narrative can help you communicate your message more effectively.
           </p>


           
        </Container>
    )
}

export default AboutUsComponent

const Container = styled.div`
    padding-top: 7rem;
    .heading{
        background-color:#f7faff;
        color:black;
        padding:15px;
        padding-left:30px;
    }
    p{
        font-size:18px;
        color: black;
        padding-left:30px;
        width:75%;
        margin-top:-140px;
    }
    .socialicon{
        padding-right:70px;
       width:auto;
       float:right;

    }
    .table{
        padding-right:50px;
       width:auto;
       float:right;
       
        
    }
    table{
        padding:5px;
        background-color:#ffffff;
        border-color:gray;
        border: 1px solid #ddd;
        width:120%;
    }
    tr{
        border: 1px solid #ddd;
        font-size:1.5rem;
        color:black;

    }
    img{
        width:30px;
        height:30px;
        padding:3px;
    }
`