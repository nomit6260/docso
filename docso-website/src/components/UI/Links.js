import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = () => {
    return (
        <Container>
            <div>
                <h2> <Link to="/team">Teams</Link></h2>
                <ul>
                    <li>
                        <Link to="/teams/data-team">Data Team</Link>
                    </li>
                    <li>
                        <Link to="/teams/engineering-team">Engineering Team</Link>
                    </li>
                    <li>
                        <Link to="/teams/product-team">Product Team</Link>
                    </li>
                    <li>
                        <Link to="/teams/ai-team">AI Team</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Community</h2>
                <ul>
                    <li>
                        <a href="https://github.com/quartilelabs" target="blank">GitHub</a>
                    </li>
                    <li>
                        <Link to="/community/events">Event</Link>
                    </li>
                    <li>
                        <Link to="/community/meetup">Meet Up</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Channels</h2>
                <ul>
                    <li>
                        <Link to="/channels/web">Web</Link>
                    </li>
                    <li>
                        <Link to="/channels/mobile">Mobile</Link>
                    </li>
                    <li>
                        <Link to="/ads">Advertising</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Resources</h2>
                <ul>
                    <li>
                        <Link to="/docs">Documentations</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blog</Link>
                    </li>
                    <li>
                        <Link to="/partners">Partners</Link>
                    </li>
                    <li>
                        <Link to="/knowledge-base">Knowledge Base</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Company</h2>
                <ul>
                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link to="/careers">Careers</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </Container>
    );
};
export default Links;

const Container = styled.div`
    height: 17.5rem;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h2{
        color: ${props => props.theme.primary};
        margin-bottom: 1rem;
        cursor: default;
    }
    li:hover {
        color: ${props => props.theme.success};
        transition: color 0.2s;
    }
    @media (max-width: ${props => props.theme.breakPoint7}) {
        height: auto;
        width: auto;
    }
    @media (max-width: ${props => props.theme.breakPoint8}) {
        height: 17.5rem;
    }
    > ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 60%;
        align-content: space-between;
    }
`;
