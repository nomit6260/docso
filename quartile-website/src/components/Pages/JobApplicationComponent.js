import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from "styled-components"
import { Card } from "components/Pages/Card"
import {BlueBtn} from "styles/Buttons"


function JobApplicationComponent() {
    return (
        <Container>
            <div class="head">Apply<br />
                <span style={{ fontSize: "1.4rem", color: "lightgray" }}>Job Title | Job ID: | Location</span>
            </div>
            <Tabs className="tabs" selectedTabClassName="selected-tab">
                <TabList className="tab-list">
                    <h2>My Progress</h2>
                    <Tab><Card>Resume</Card></Tab>
                    <Tab><Card>Contact Information</Card></Tab>
                    <Tab><Card>Education</Card></Tab>
                    <Tab><Card>Job-specific questions</Card></Tab>
                    <Tab><Card>Acknowledgement</Card></Tab>
                    <Tab><Card>Self-Identification</Card></Tab>
                    <Tab><Card>Review and Submit</Card></Tab>

                </TabList>
                <div className="vl" />

                <TabPanel>
                    <h2 className="tabhead">
                        Resume</h2>
                </TabPanel>

                <TabPanel className="form">
                    <div className="grid selectDisable">
                        <h2 className="tabhead" >Contact Information
                            <h6 style={{float:"right"}}><b style={{ color: "red",}}>*</b> Required Field</h6>
                        </h2>


                        <form style={{ padding: "10px" }}>

                            <div style={{ display: "flex", }}>
                                <lable className="lable1" >First Name<b style={{ color: "red" }}>*</b>
                                    <input type="text" name="fname" />
                                </lable>
                                <lable className="lable2">Last Name<b style={{ color: "red" }}>*</b>
                                    <input type="text" name="lname" />
                                </lable><br /><br /><br />
                            </div>


                            <div style={{ display: "flex" }} >
                                <lable className="lable1">Email Address<b style={{ color: "red" }}>*</b>
                                    <input type="text" name="email"/>
                                </lable>
                                <lable className="lable2" >Phone Number<b style={{ color: "red" }}>*</b>
                                    <input type="text" name="phn" />
                                </lable><br /><br /><br />
                            </div>

                            <div>
                                <lable>Address Line<b style={{ color: "red" }}>*</b></lable><br />
                                <input type="text" name="address"/><br /><br />
                            </div>

                            <div style={{ display: "flex", }}>
                                <lable className="lable1" >City<b style={{ color: "red" }}>*</b>
                                    <input type="text" name="city" />
                                </lable>
                                <lable className="lable2" >Postal/Zip Code<b style={{ color: "red" }}>*</b>
                                    <input type="text" name="zip" />
                                </lable><br /><br /><br />
                            </div>

                            <div style={{ display: "flex" }}>
                                <lable className="lable1" >Country/Region<b style={{ color: "red" }}>*</b><br />
                                    <select>
                                        <option disabled>Choose your Country/Region</option>
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </lable>
                                <lable className="lable2" >State<b style={{ color: "red" }}>*</b><br />
                                    <select>
                                        <option disabled>Choose your State</option>
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </lable>
                            </div><br /><br />
                            <div className="submit-btn">
                            <BlueBtn>Save and Continue</BlueBtn>
                            </div>

                        </form>
                    </div>
                </TabPanel>

                <TabPanel  >
                    <h2 className="tabhead">
                        Education</h2>
                    <div className="grid selectDisable center">



                    </div>
                </TabPanel>

                <TabPanel  >
                    <h2 className="tabhead">
                        Job-specific questions</h2>
                    <div className="grid selectDisable center">



                    </div>
                </TabPanel>

                <TabPanel  >
                    <h2 className="tabhead">
                        Acknowledgement</h2>
                    <div className="grid selectDisable center">



                    </div>
                </TabPanel>

                <TabPanel  >
                    <h2 className="tabhead">
                        Self-Identification</h2>
                    <div className="grid selectDisable center">



                    </div>
                </TabPanel>

                <TabPanel  >
                    <h2 className="tabhead">
                        Review and Submit</h2>
                    <div className="grid selectDisable center">



                    </div>
                </TabPanel>
            </Tabs>

        </Container>
    )
}

export default JobApplicationComponent

const Container = styled.div`
    padding-top: 7rem;
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tabhead{
        text-align: left;
        padding: 10px;
        font-size: 2rem;
        text-decoration: underline black;
        color: black; 
    }
    .lable2{
        margin-left:50px;
        width:50%;
    }
    .lable1{
        width:50%
    }
    .head{
    background-color:#313956;
    font-size:2.5rem;
    color:#ffffff;
    padding:25px;
    }
    .form{
        color: ${props => props.theme.black};
        font-size: 16px;
        .submit-btn{
            display: flex;
            justify-content: flex-end;
            button{
                background-color:#313956;
                color:#ffffff;
                padding:10px;
                border: 1px solid gray;
                cursor:pointer; 
            }
        }
    }
    select{
        height:30px;
        width:310px;
    }
    input{
        height:30px;
        width:100%;
    }
    .vl {
        margin: 5rem;
        margin-top: 5rem;
        border-left: 3px solid;
    }      
    .tabs{
        padding: 3rem;
        display: flex;
        font-size: 18px;
        .selected-tab{
            border-top: solid;
            border-width: 5px;
            border-color: ${props => props.theme.success};
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
