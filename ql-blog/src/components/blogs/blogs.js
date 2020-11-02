import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Link, withRouter } from "react-router-dom"
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import agents from "utils/agents"
import GetDate from "components/UI/GetDate"

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
        props.featured &&
        css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-lightest rounded-lg relative`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg border-2`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-1 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;
const AuthorContainer = styled.div`margin-top: 1rem;`
const SearchContainer = styled.div`
      width: 30%;
      ${tw`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`}
`
const SearchButton = tw(PrimaryButton)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;
const TopBar = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
`

const Blogs = ({
    headingText = "Blog Posts",
    prePosts = [],
    searchVisible = false
}) => {

    const [posts, setPosts] = useState(prePosts)
    const [visible, setVisible] = useState(7);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (prePosts.length === 0) {
            fetchBlogs()
        } else {
            setLoading(false)
        }
    }, [])

    const fetchBlogs = async () => {
        setLoading(true)
        const res = await agents.Articles.all(0)
        console.log(res)
        setPosts(res)
        setLoading(false)
    }

    const onLoadMoreClick = () => {
        setVisible(v => v + 6);
    };

    if (loading) return <h1>Loading...</h1>

    return (
        <AnimationRevealPage disabled>
            <TopBar>
                <HeadingRow>
                    <Heading>{headingText}</Heading>
                </HeadingRow>
                {
                    searchVisible && <SearchContainer>
                        <Input type="text" placeholder="Search Blogs" />
                        <SearchButton>Search</SearchButton>
                    </SearchContainer>
                }

            </TopBar>
            <Posts>
                {posts.slice(0, visible).map((post, index) => (
                    <PostContainer key={index} featured={post.featured}>
                        <Link to={`/${post.id}`}>
                            <Post className="group" as="a">
                                <Image imageSrc={`http://localhost:1337${post.image.formats.thumbnail.url}`} />
                                <Info>
                                    <Category>{post.category}</Category>
                                    <Title>{post.title}</Title>
                                    {post.description && <Description>{post.description}</Description>}
                                    <AuthorContainer>
                                        <Link to={`/author/${post.author.id}`}>
                                            <Category>@{post.author.username}</Category>
                                        </Link>
                                        <CreationDate>
                                            <GetDate datetime={post.createdAt} />
                                        </CreationDate>
                                    </AuthorContainer>
                                </Info>
                            </Post>
                        </Link>
                    </PostContainer>
                ))}
            </Posts>
            {visible < posts.length && (
                <ButtonContainer>
                    <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
                </ButtonContainer>
            )}
        </AnimationRevealPage>
    );
};

export default withRouter(Blogs)