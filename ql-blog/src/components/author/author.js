import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import { withRouter, Link, useParams } from "react-router-dom";
import agents from "utils/agents"
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Blogs from "components/blogs/blogs"
import Avatar from 'react-avatar';

const HeadingRow = tw.div`flex m-2 items-center`;
const Heading = tw(SectionHeading)`text-gray-900 ml-5`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;

const renderers = {
    code: ({ language, value }) => {
        return <SyntaxHighlighter style={vs2015} language={language} children={value} />
    }
}


const Author = () => {
    const { username } = useParams()
    const [profile, setProfile] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [userBlogs, setUserBlogs] = useState([])

    useEffect(() => {
        fetchProfile()
    }, [])

    const fetchProfile = async () => {
        setLoading(true)
        let res = null
        try {
            res = await agents.Profile.get(username)
            console.log(res)
            if (res.articles.length > 0) {
                setUserBlogs(res.articles)
            }
            setProfile(res)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setError(true)
            setLoading(false)
        }

    }

    if (loading) return <h1>Hold on! Fetching Profile...</h1>
    if (error) return <h1>Sorry error fetching Profile...</h1>

    return (
        <AnimationRevealPage disabled>
            <HeadingRow>
            <Avatar size="100" round src={`http://localhost:1337${profile.profile_pic.formats.thumbnail.url}`} /> <Heading>{profile.username}</Heading>
            </HeadingRow>

            <div>
                <Category>{profile.aboutme}</Category>
            </div>

            {
                userBlogs.length > 0 ?
                    <>
                        <br/><br/>
                        <h1>{profile.username}'s' Blogs</h1>
                        <Blogs prePosts={userBlogs} headingText="" />
                    </>
                    :
                    <>
                        <h1>No Blogs writtern</h1>
                    </>
            }

        </AnimationRevealPage>
    );
};

export default withRouter(Author)