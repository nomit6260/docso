import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"
import { Card, CardHeading } from "components/Cards/Card"

function CareerComponent() {
    return (
        <Container>
            <img src="https://res.cloudinary.com/nomit/image/upload/v1616610987/QuartileLabs/Group_1881_omat1w.png" alt="head" style={{width:"100%"}}></img>
            <div style={{backgroundColor:"#f7faff", padding:"5rem",}}>
                <div style={{color:"black", textAlign:"center", fontSize:"3.7rem", marginLeft:"5rem"}}>Areas we're focused on today. To build for the world tomorrow.</div><br/>
                <p style={{color:"gray", textAlign:"center", fontSize:"2.4rem", marginLeft:"5rem"}}>Software developers at AWS are continually raising the bar in engineering excellance. Working here, you'll see why everything we create has the potential to have a big impact on our customers around the world.</p>
            <br/>
            <br/>
            <br/>
            <div style={{ display:"flex",alignItems:"center"}}>
            <img className="icon" src="https://res.cloudinary.com/nomit/image/upload/v1616610980/QuartileLabs/architecture_wcbgp4.png" alt="architecture"></img> 
            <img className="icon" src="https://res.cloudinary.com/nomit/image/upload/v1616610980/QuartileLabs/security_pf0jtq.png" alt="security"></img>
            <img className="icon" src="https://res.cloudinary.com/nomit/image/upload/v1616610980/QuartileLabs/serverless_kcjalm.png" alt="severless"></img>
            <img className="icon" src="https://res.cloudinary.com/nomit/image/upload/v1616610980/QuartileLabs/devops_nekwni.png" alt="devops"></img>
            <img className="icon" src="https://res.cloudinary.com/nomit/image/upload/v1616610980/QuartileLabs/machine-learning_yrqh1u.png"alt="machine learning"></img>
            <img className="icon" src="https://res.cloudinary.com/nomit/image/upload/v1616610980/QuartileLabs/open-source_ewrrep.png" alt="open source"></img>
            </div>

            </div>



            <div>
                <h1 className="head">
                    We are hiring.
                </h1>
                <p style={{color:"black",fontSize:"2rem", textAlign:"center",paddingBottom:"2rem"}}>Search our open Software Development positions</p>
            </div>

            <div style={{backgroundColor:"#f7faff", padding:"5rem"}}>
                    <b style={{color:"#1eab94", fontSize:"1.5rem"}}>Filter</b>
                    <b style={{color:"#1eab94", fontSize:"1.5rem", marginLeft:"40rem"}}>Showing </b>
                    <label>Sort by:</label>
                    <select >
                    <option>Most Relevant</option>
                    <option>Option2</option>
                    <option>Option3</option>
                    </select>
                    <span ><br/><br/>

                        <table>
                            <b><th>Job Type</th></b>
                            <tr>Part Time <input style={{marginLeft:"140px"}} className="checkbox" type="checkbox"/></tr>
                            <tr>Full Time <input style={{marginLeft:"142px"}} className="checkbox" type="checkbox"/></tr>
                        </table><br/>
                        
                        <table>
                            <b><th>Job Category</th></b>
                            <tr>Software Engineer <input style={{marginLeft:"76px"}} className="checkbox" type="checkbox"/></tr>
                            <tr>Web Developer <input style={{marginLeft:"100px"}} className="checkbox" type="checkbox"/></tr>
                            <tr>Graphics Designer <input style={{marginLeft:"75px"}} className="checkbox" type="checkbox"/></tr>
                        </table><br/>
                        <table>
                            <b><th>Job Location</th></b>
                            <tr>Bhilai, CG, IN <input style={{marginLeft:"114px"}} className="checkbox"  type="checkbox"/></tr>
                            <tr>Remote <input style={{marginLeft:"153px"}} className="checkbox"  type="checkbox"/></tr>
                        </table>
                    </span><br/><br/><br/><br/>
                       
                    <span >
                    <Link  to="/jobdesc">
                            <Card className="cardCom">
                                <CardHeading className="link team">
                                    Job Title
                                </CardHeading >
                                <h2 style={{textAlign:"right",marginTop:"-25px"}}>Posted date</h2>
                                <h3>Location | Job ID: </h3>
                                <p className="jobdesc">Job Description</p>
                                <Link to="/jobapplication"><button>Apply Now</button></Link>
                            </Card>
                        </Link><br/>
                        
                    </span>
            </div>

        </Container>
    )
}

export default CareerComponent

const Container = styled.div`
    padding-top: 8rem;
    .icon{
       padding-left:10rem;
    }
    .jobdesc{
        font-size:1.3rem;
        color:black;
    }
    .cardCom{
        padding:10px;
        background-color:#ffffff;
    }
    button{
        
        background-color:black;
        color:#ffffff;
        padding:7px;
        width:85px; 
    }
    
    .head{
        padding-top:2rem;
        color:black;
        text-align:center;
        font-size:4rem;
    }
    select{
        color:#1eab94;
        background-color:#f7faff;
        border-color:gray;
        width:120px;
        height:25px;
    }
    label{
        color:#1eab94;
        font-size:1.5rem;
        margin-left:500px;
    }
    th{
        color:black;
        font-size:1.5rem;
        padding:2px;
    }
    table{
        background-color:#ffffff;
        border-color:gray;
        border: 1px solid #ddd;
        width:20%;
        
    }
    tr{
        border: 1px solid #ddd;
        font-size:1.5rem;
        color:black;

    }

    .team{
        text-align:left;
    }
    .checkbox{
        margin-right:-75%;
        width:18px;
        height:18px;
        margin-top:5px;
        background-color:#ffffff;
    }
    .checkbox:hover{
        background-color:#ccc;
    }
    .input:checked{
        background-color:red;
    }
    
    .grid{
        display: inline-flex;
        flex-wrap: wrap;
        div {
           
            &:hover{
                .link{color: ${props => props.theme.success};}
                transition: color 0.3s;
            }
        }
    }
`