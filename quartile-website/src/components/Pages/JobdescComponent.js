import React from 'react'
import styled from "styled-components"



function JobdescComponent() {
    return (
        <Container>
            <div className="heading">
                <h1 className="jobtitle">Job Title</h1>
                <h5 className="jobid">Job ID: | Quartile Technologies Inc.</h5>
                <button>Apply Now</button>
            </div>
            <div style={{paddingLeft:"30px"}}>
            <h1 className="deschead">DESCRIPTION</h1>
            <p className="desc">job Description</p><br/><br/>

            <h1 className="deschead">BASIC QUALIFICATION</h1>
            <p className="desc">basic QUALIFICATION Description</p><br/><br/>

            <h1 className="deschead">PREFERED QUALIFICATION</h1>
            <p className="desc">PREFERED QUALIFICATION DESCRIPTION</p><br/><br/>

            <span className="table">
            <h1 style={{color:"#1eab94"}}>Job Details</h1>
           <table>
           <tr><img src="https://res.cloudinary.com/nomit/image/upload/v1616679307/QuartileLabs/icons8-location-64_fp7lf2.png"></img>Bhilai, CG, IN</tr>
           <tr><img src="https://res.cloudinary.com/nomit/image/upload/v1616679307/QuartileLabs/icons8-location-64_fp7lf2.png"></img>Engineering Team</tr>
            <tr><img src="https://res.cloudinary.com/nomit/image/upload/v1616679307/QuartileLabs/icons8-location-64_fp7lf2.png"></img>Software Development </tr>
           </table>
           </span>

           <span className="socialicon">
               <h1 style={{color:"#1eab94"}}>Share this job</h1>
               <table>
                   <tr>
                       <img style={{marginLeft:"20px"}} src="https://res.cloudinary.com/nomit/image/upload/v1616679307/QuartileLabs/facebook_e78hhe.png"></img>
                       <img src="https://res.cloudinary.com/nomit/image/upload/v1616679308/QuartileLabs/linkedin_hpfnjt.png"></img>
                       <img src="https://res.cloudinary.com/nomit/image/upload/v1616679308/QuartileLabs/twitter_k3ulm3.png"></img>
                       <img src="https://res.cloudinary.com/nomit/image/upload/v1616679307/QuartileLabs/apple_xehf6i.png"></img>
                   </tr>
               </table>
           </span>

            </div>

            

        </Container>
    )
}

export default JobdescComponent

const Container = styled.div`
    padding-top: 7rem;
    .heading{
        background-color:#f7faff;
        padding:15px;
        padding-left:30px;
    }
    .table{
       
        position:absolute;
        right:10%;
        top:30%;
        
    }
    .socialicon{
        position:absolute;
        right:14.5%;
        top:55%;
        width:10%;

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
    .deschead{
        padding-top:10px;
        color:black;
        font-size:18px;
    }
    .desc{
        font-size:15px;
        color:black;
    }
    .jobtitle{
        color:black;
        font-size:25px;
    }
    .jobid{
        color:black;
        font-size:15px;
    }
    button{
        position:absolute;
        right:10%;
        margin-top:-50px;
        cursor:pointer;
        background-color:#151e3f;
        color:#ffffff;
        padding:10px;
        width:120px; 
    }
`