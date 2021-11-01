/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "boxicons";
import PostModal from "./PostModal";
import { connect } from "react-redux";
import { getPostAPI } from "../Actions/index";
import ReactPlayer from "react-player";
function Main(props) {
  const [Showmodel, setShowmodel] = useState("close");

  useEffect(() => {
    props.getPost();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (Showmodel) {
      case "open":
        setShowmodel("close");
        break;
      case "close":
        setShowmodel("open");
        break;
      default:
        setShowmodel("close");
        break;
    }
  };
  return (
    <>
      {props.articles.length === 0 ? (
        <p>There are no Post's Sorry for the Inconvience!..</p>
      ) : (
        <Container>
          <MainArea>
            <Feedbox>
              <div>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="./images/user.svg" alt="" />
                )}
                <button
                  onClick={handleClick}
                  disabled={props.loading ? true : false}
                >
                  Start a post
                </button>
              </div>
              <div>
                <button>
                  <box-icon name="photo-album" className="icon1"></box-icon>
                  <span>Photo</span>
                </button>
                <button>
                  <box-icon className="icon2" name="video"></box-icon>
                  <span>Video</span>
                </button>
                <button>
                  <box-icon className="icon3" name="calendar-event"></box-icon>
                  <span>Event</span>
                </button>
                <button>
                  <box-icon
                    className="icon4"
                    type="solid"
                    name="file-gif"
                  ></box-icon>
                  <span>Gif</span>
                </button>
              </div>
            </Feedbox>
          </MainArea>
          <Content>
            {props.loading && <img src="/images/bx-loader.svg" alt="loaderr" />}
            {props.articles.length > 0 &&
              props.articles.map((articles, key) => (
                <PostSection key={key}>
                  <Shared>
                    <a>
                      <img src={articles.actor.image} alt="" />
                      <div>
                        <span>{articles.actor.title}</span>
                        <span>{articles.actor.description}</span>
                        <span>
                          {articles.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    {/*<button>
                      <img src="/images/dots.svg" alt="threedots" />
                    </button>*/}
                  </Shared>
                  <Description>{articles.description}</Description>
                  <SharedImg>
                    <a>
                      {!articles.sharedImg && articles.video ? (
                        <ReactPlayer width={"100%"} url={articles.video} />
                      ) : (
                        articles.sharedImg && (
                          <img src={articles.sharedImg} alt="" />
                        )
                      )}
                    </a>
                  </SharedImg>
                  <SocialIcon>
                    <li>
                      <button>
                        <box-icon name="like"></box-icon>
                        <box-icon type="solid" name="happy-beaming"></box-icon>
                        <span>35</span>
                      </button>
                    </li>
                    <li>
                      <a>{articles.comments}</a>
                    </li>
                  </SocialIcon>
                  <Actions>
                    <button>
                      <box-icon name="like"></box-icon>
                      <span>Like</span>
                    </button>
                    <button>
                      <box-icon
                        type="solid"
                        name="message-rounded-detail"
                      ></box-icon>
                      <span>Comments</span>
                    </button>
                    <button>
                      <box-icon type="solid" name="share"></box-icon>
                      <span>Share</span>
                    </button>
                    <button>
                      <box-icon type="solid" name="save"></box-icon>
                      <span>Save</span>
                    </button>
                  </Actions>
                </PostSection>
              ))}
          </Content>
          <PostModal showmodel={Showmodel} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  grid-area: main;
`;
const MainArea = styled.div`
  text-align: center;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  border: none;
`;
const Feedbox = styled(MainArea)`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 16px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        span {
          color: gray;
          margin-left: 5px;
        }
        &:hover {
          transform: scale(1.05);
          transition: all 1s ease-in-out;
          background-color: lightblue;
          border-radius: 20px;
        }
      }
    }
  }
`;
const PostSection = styled(MainArea)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const Shared = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 16px;
          font-weight: 700;
          color: black;
        }
        &:nth-child(n + 1) {
          font-size: 14px;
          color: gray;
        }
      }
    }
  }
  /*button {
    position: absolute;
    background: transparent;
    top: 0;
    margin-left: 0;
    border: none;
    outline: none;
  }*/
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 16px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: whitesmoke;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialIcon = styled.li`
  text-decoration: none;
  list-style-type: none;
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  li {
    margin-right: 5px;
    font-size: 14px;
    display: flex;
  }
  button {
    background: transparent;
    border: none;
    outline: none;
  }
`;
const Actions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 8px;
    background-color: #e4e6eb;
    span {
      color: black;
    }
    @media (min-width: 768px) {
      span {
        margin-left: 10px;
      }
    }
  }
  button:hover {
    background-color: #cad0db;
  }
`;
const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPost: () => dispatch(getPostAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
