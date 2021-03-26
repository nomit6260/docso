import React from 'react'
import styled from "styled-components"
import { Card, CardHeading } from "components/Cards/Card"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { HeadingPrimary } from 'styles/Heading';


function TeamComponent() {
    return (
        <Container>
            <div style={{ backgroundColor:"#151e3f", color:"#ffffff", paddingTop:"70px", textAlign:"center", fontSize:"30px"}}>Our Teams</div>
            <div className="solutions" >
                <Tabs className="tabs" selectedTabClassName="selected-tab">
                    <div style={{backgroundColor:"#151e3f"}}>
                    <TabList className="tab-list">
                        <Tab>Data Team</Tab>
                        <Tab>Engineering Team</Tab>
                        <Tab>Product Team</Tab>
                        <Tab>AI Team</Tab>
                    </TabList>
                    </div>
        
             

                    <TabPanel className="center" >
                    <h2 style={{textAlign:"left", padding:"10px", textDecoration:"underline black", color:"gray"}}>
                        Data Team
                    </h2>
                        <div className="grid selectDisable center">
                            <Card>
                                <CardHeading className="link team">
                                <img style={{alignItems:"center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU"></img><br/>
                                    DName1
                                </CardHeading >
                            </Card>
                            <Card>
                                <CardHeading className="link team" >
                                <img style={{alignItems:"center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU"></img><br/>
                                    DName2
                                </CardHeading>
                            </Card>
                            <Card>
                                <CardHeading className="link team">
                                <img style={{alignItems:"center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU"></img><br/>
                                    DName3
                                </CardHeading>
                            </Card>

                        </div>
                    </TabPanel>
                    <TabPanel className="center" >
                        <h2 style={{textAlign:"left", padding:"10px", textDecoration:"underline black", color:"gray"}}>Engineering Team</h2>
                        <div className="grid selectDisable center">
                            <Card>
                                <CardHeading className="link team">
                                <img style={{alignItems:"center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU"></img><br/>
                                    Abhishek Vishwakarma<br/>
                                    <h5>Software Engineer</h5>
                                </CardHeading>
                            </Card>
                            <Card>
                                <CardHeading className="link team">
                                <img style={{alignItems:"center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU"></img><br/>
                                    Anurag Vishwakarma<br/>
                                    <h5>Software Engineer</h5>
                                </CardHeading>
                            </Card>
                            <Card>
                                <CardHeading className="link team">
                                <img style={{alignItems:"center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU"></img><br/>
                                    Nomit Kasera<br/>
                                    <h5>Software Engineer</h5>
                                </CardHeading>
                            </Card>

                        </div>
                    </TabPanel>
                    <TabPanel className="center" >
                    <h2 style={{textAlign:"left", padding:"10px", textDecoration:"underline black", color:"gray"}}>Project Team</h2>
                        <div className="grid selectDisable center">
                            <Card>
                                <CardHeading className="link team">
                                <img style={{alignItems:"center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU"></img><br/>
                                   PName1
                                </CardHeading>
                            </Card>
                            <Card>
                                <CardHeading className="link team">
                                <img style={{alignItems:"center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU"></img><br/>
                                    PName2
                                </CardHeading>
                            </Card>
                            <Card>
                                <CardHeading className="link team">
                                <img style={{alignItems:"center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU"></img><br/>
                                    PName3
                                </CardHeading>
                            </Card>

                        </div>
                    </TabPanel>
                    <TabPanel>
                    <h2 style={{textAlign:"left", padding:"10px", textDecoration:"underline black", color:"gray"}}>AI Team</h2>
                        <div className="grid selectDisable center">
                            <Card>
                                <CardHeading className="link team">
                                <img style={{alignItems:"center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU"></img><br/>
                                    AName1
                                </CardHeading>
                            </Card>
                            <Card>
                                <CardHeading className="link team">
                                <img style={{alignItems:"center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU"></img><br/>
                                    AName2
                                </CardHeading>
                            </Card>
                            <Card>
                                <CardHeading className="link team">
                                <img style={{alignItems:"center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU"></img><br/>
                                    AName3
                                </CardHeading>
                            </Card>
                            

                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </Container>
    )
}

export default TeamComponent

const Container = styled.div`
background-color:#f7faff;
.solutions,
.initiatives{
    // height: 300px;
    // justify-content: center;
    align-items: center;
   
    text-align: center;
    flex-direction: column;
    p{
        color: ${props => props.theme.primary};
        font-size: 35px;
    }
    h3{
        max-width: 750px;
        font-size: 20px;
        margin: 2rem;
    }
    .landing{
        background-color: ${props => props.theme.primary};
        padding: 35px;
        color:#ffffff;
        // justify-content: center;
        
    
    }

    .initiatives-img{
        display: flex;
        img{
            height: 15%;
            width: 15%;
        }
        align-items: center;
        justify-content: space-evenly;
    }
}

.tabs{
    font-size: 16px;
    .selected-tab{
        border: none;
        color: ${props => props.theme.success};
    }

    .tab-list{
        display: flex;
        color:#ffffff;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        li{
            margin: 10px;
        }
    }
}

.selectDisable {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.team{
    text-align:left;
}

.selectEnable { 
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -o-user-select: text;
    user-select: text;
}
.grid{
    display: inline-flex;
    flex-wrap: wrap;
    div {
        margin: 10px;
        min-height: 250px;
        min-width: 250px;
        &:hover{
            .link{color: ${props => props.theme.success};}
            transition: color 0.3s;
        }
    }
}

`