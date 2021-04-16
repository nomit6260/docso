import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from "styled-components"
import { FaPhoneSquareAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiGooglemaps } from "react-icons/si";

function ContactUsComponent() {
    return (
        <Container>
            <h1 className="head">Contact Us</h1>
            <h1 className="head1">Fill this form to send message to us</h1><br/>
            <form>
                <label>First Name</label><br/>
                <input type="text" name="fname"/><br/>

                <label>Last Name</label><br/>
                <input type="text" name="lname"/><br/>

                <label>Email</label><br/>
                <input type="text" name="email"/><br/>

                <label>Message</label><br/>
                <textarea type="text" name="message"/><br/><br/>
                <button name="submit">Submit</button>
            </form>
            <div className="vl">
            <h1 className="infohead"> Information</h1><br/><br/>
            <span className="info"><FaEnvelope className="logo" />&nbsp;&nbsp;&nbsp;&nbsp;info@quartilelabs.com</span><br/><br/>
            <span className="info"><FaPhoneSquareAlt className="logo" />&nbsp;&nbsp;&nbsp;&nbsp;+918871384916</span><br/><br/>
            <span className="info"><SiGooglemaps className="logo" />&nbsp;&nbsp;&nbsp;&nbsp;Smriti Nagar, CG, IN</span><br/><br/>
            </div>
        </Container>
    )
}

export default ContactUsComponent

const Container = styled.div`
    background-color:#f7faff;
    padding-top: 8rem;
    padding-left: 3rem;
    .head{
        font-size:3.3rem;
        color:#1eab94;
    }
    .head1{
        font-size:2.2rem;
        color:black;
    }
    label{
        font-size:1.5rem;
        color:black;
    }
    input{
        width:25%;
        height:3rem;
    }
    textarea{
        width:25%;
        height:8rem;
    }
    button{
        font-size:1.7rem;
        color:#ffffff;
        background-color:#1eab94;
        width:25%;
        height:3.5rem;
        cursor:pointer;
        
    }
    .logo{
        font-size:2rem;
    }
    .vl {
        border-left: 2px solid gray;
        height: 40rem;
        position: absolute;
        left: 35%;
        margin-top:5px;
        top:20%;
        
      }
      .infohead{
          padding-left:5rem;
          font-size:2.2rem;
          color:black;
      }
      .info{
          padding-left:5rem;
          color:black;
          font-size:1.7rem;
      }
`