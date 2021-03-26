import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from "styled-components"
import { Card } from "components/Pages/Card"


function JobApplicationComponent() {
    return (
        <Container>
           <div class="head">Apply<br/>
           <span style={{fontSize:"1.4rem", color:"lightgray"}}>Job Title | Job ID: | Location</span>
           </div>

           <div style={{padding:"20px", fontSize:"2rem", color:"black"}}>My Progress<br/>
            
                                
           <div >
                <Tabs className="tabs" selectedTabClassName="selected-tab">
                    
                    <TabList className="tab-list">
                        <Tab><Card>Resume</Card></Tab>
                        <Tab><Card>Contact Information</Card></Tab>
                        <Tab><Card>Education</Card></Tab>
                        <Tab><Card>Job-specific questions</Card></Tab>
                        <Tab><Card>Acknowledgement</Card></Tab>
                        <Tab><Card>Self-Identification</Card></Tab>
                        <Tab><Card>Review and Submit</Card></Tab>
                        
                        
                    </TabList>
                    <div className="vl">
            
    
                    <TabPanel  >
                        <h2 style={{textAlign:"left", padding:"10px",fontSize:"2rem", textDecoration:"underline black", color:"black"}}>
                            Resume</h2>
                        <div className="grid selectDisable center">
                        
                       

                        </div>
                    </TabPanel>

                    <TabPanel  >
                        <h2 style={{textAlign:"left", padding:"10px",fontSize:"2rem", textDecoration:"underline black", color:"black", display:"flex"}}>Contact Information
                        <h6 style={{position:"absolute", right:"-20%"}}><b style={{color:"red", textAlign:"right"}}>*</b> Required Field</h6>
                        
                        </h2>

                        <div className="grid selectDisable center">
                        
                                    <form style={{padding:"10px"}}>
                                        
                                    <div style={{display:"flex",}}>
                                        <lable style={{width:"48%"}}>First Name<b style={{color:"red"}}>*</b>
                                        <input type="text"/>
                                        </lable>
                                        <lable style={{marginLeft:"50px", width:"50%"}}>Last Name<b style={{color:"red"}}>*</b>
                                        <input type="text"/>
                                        </lable><br/><br/><br/>
                                        </div>
                                        

                                       
                                        <div style={{display:"flex"}} >
                                        <lable>Email Address<b style={{color:"red"}}>*</b>
                                        <input type="text"/>
                                        </lable>
                                        <lable style={{marginLeft:"50px"}}>Phone Number<b style={{color:"red"}}>*</b>
                                        <input type="text"/>
                                        </lable><br/><br/><br/>
                                        </div>
                                        
                                        <div>
                                        <lable>Address Line<b style={{color:"red"}}>*</b></lable><br/>
                                        <input type="text"/><br/><br/>
                                        </div>

                                        <div style={{display:"flex",}}>
                                        <lable style={{width:"50%"}}>City<b style={{color:"red"}}>*</b>
                                        <input type="text"/>
                                        </lable>
                                        <lable style={{marginLeft:"50px",width:"50%"}}>Postal/Zip Code<b style={{color:"red"}}>*</b>
                                        <input type="text"/>
                                        </lable><br/><br/><br/>
                                        </div>

                                        <div style={{display:"flex"}}>
                                        <lable style={{width:"50%"}}>Country/Region<b style={{color:"red"}}>*</b><br/>
                                        <select>
                                            <option disabled>Choose your Country/Region</option>
                                            <option></option>
                                            <option></option>
                                            <option></option>
                                        </select>
                                        </lable>
                                        <lable style={{marginLeft:"50px",width:"50%"}}>State<b style={{color:"red"}}>*</b><br/>
                                        <select>
                                            <option disabled>Choose your State</option>
                                            <option></option>
                                            <option></option>
                                            <option></option>
                                        </select>
                                        </lable>
                                        </div><br/><br/>

                                        <button>Save and Continue</button>
                                        

                        
                                    </form>
                       

                        </div>
                    </TabPanel>

                    <TabPanel  >
                        <h2 style={{textAlign:"left", padding:"10px",fontSize:"2rem", textDecoration:"underline black", color:"black"}}>
                            Education</h2>
                        <div className="grid selectDisable center">
                        
                       

                        </div>
                    </TabPanel>

                    <TabPanel  >
                        <h2 style={{textAlign:"left", padding:"10px",fontSize:"2rem", textDecoration:"underline black", color:"black"}}>
                            Job-specific questions</h2>
                        <div className="grid selectDisable center">
                        
                       

                        </div>
                    </TabPanel>

                    <TabPanel  >
                        <h2 style={{textAlign:"left", padding:"10px",fontSize:"2rem", textDecoration:"underline black", color:"black"}}>
                            Acknowledgement</h2>
                        <div className="grid selectDisable center">
                        
                       

                        </div>
                    </TabPanel>

                    <TabPanel  >
                        <h2 style={{textAlign:"left", padding:"10px",fontSize:"2rem", textDecoration:"underline black", color:"black"}}>
                            Self-Identification</h2>
                        <div className="grid selectDisable center">
                        
                       

                        </div>
                    </TabPanel>

                    <TabPanel  >
                        <h2 style={{textAlign:"left", padding:"10px",fontSize:"2rem", textDecoration:"underline black", color:"black"}}>
                            Review and Submit</h2>
                        <div className="grid selectDisable center">
                        
                       

                        </div>
                    </TabPanel>
                    </div>
                </Tabs>
        


            </div>
            </div>
    

        </Container>
    )
}

export default JobApplicationComponent

const Container = styled.div`
    padding-top: 7rem;
    .head{
    background-color:#313956;
    font-size:2.5rem;
    color:#ffffff;
    padding:25px;
    }
    button{
        background-color:#313956;
        color:#ffffff;
        padding:10px;
        border: 1px solid gray;
        position:absolute;
        right:5%;
        cursor:pointer;
        
    }
    select{
        height:30px;
        width:310px;
    }
    
    
    .vl {
        border-left: 2px solid gray;
        height: 64rem;
        position: absolute;
        left: 28%;
        padding:10px;
        margin-top:10px;
        top:29%;
        
      }
      input{
          height:30px;
          width:100%;
      }
      
      
    
    .tabs{
        font-size: 18px;
        .selected-tab{
            border: none;
            color: ${props => props.theme.success};
        }
    
        .tab-list{
            display: flex;
            width:25%;
            flex-direction:column;
            color:black;
            cursor: pointer;
            align-items: left;
            justify-content: center;
            li{
                margin: 10px;
            }
        }
    }
`