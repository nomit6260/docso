import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
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
import GetDate from "components/UI/GetDate"
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    RedditIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

const HeadingRow = tw.div`flex items-center justify-between`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;
const ShareBtns = styled.div`
    .share-icon{
        margin-left: 4px;
    }
`

const renderers = {
    code: ({ language, value }) => {
        return <SyntaxHighlighter style={vs2015} language={language} children={value} />
    }
}


const Blog = () => {
    const { blog_id } = useParams()
    const [blog, setBlog] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const shareUrl = window.location.href

    useEffect(() => {
        fetchBlog()
    }, [])

    const fetchBlog = async () => {
        setLoading(true)
        let res = null
        try {
            res = await agents.Articles.get(blog_id)
            console.log(res)
            setBlog(res)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setError(true)
            setLoading(false)
        }

    }

    if (loading) return <h1>Hold on! Fetching blog...</h1>
    if (error) return <h1>Sorry error fetching blog...</h1>

    return (
        <AnimationRevealPage disabled>
            <HeadingRow>
                <Heading>{blog.title}</Heading>

                <ShareBtns>
                    <FacebookShareButton url={shareUrl} className="share-icon">
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl} className="share-icon">
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>

                    <InstapaperShareButton url={shareUrl} className="share-icon">
                        <InstapaperIcon size={32} round={true} />
                    </InstapaperShareButton>
                    <RedditShareButton url={shareUrl} className="share-icon">
                        <RedditIcon size={32} round={true} />
                    </RedditShareButton>

                    <WhatsappShareButton url={shareUrl} className="share-icon">
                        <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    <EmailShareButton url={shareUrl} className="share-icon">
                        <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                </ShareBtns>

            </HeadingRow>
            <div>
                <Link to={`/author/${blog.author.id}`}>
                    <Category>@{blog.author.username}</Category>
                </Link>
                <CreationDate>
                    <GetDate datetime={blog.createdAt} />
                </CreationDate>
            </div>
            <br />
            <ReactMarkdown renderers={renderers} children={blog.content} allowDangerousHtml={true} />
        </AnimationRevealPage>
    );
};

export default withRouter(Blog)