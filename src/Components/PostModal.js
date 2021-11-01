/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import "boxicons";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { postAPI } from "../Actions";
const PostModal = (props) => {
  const [editortext, setEditortext] = useState("");
  const [shareImage, setshareImage] = useState("");
  const [videolink, setVideolink] = useState("");
  const [Choice, setChoice] = useState("");

  const HandleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`Image Chosen Unsupportable ${typeof image}`);
      return;
    }
    setshareImage(image);
  };
  const selectchoice = (choice) => {
    setshareImage("");
    setVideolink("");
    setChoice(choice);
  };
  const post = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: shareImage,
      video: videolink,
      user: props.user,
      description: editortext,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    props.post(payload);
    Reset(e);
  };

  const Reset = (e) => {
    console.log("button clicked!!");
    setEditortext("");
    setshareImage("");
    setVideolink("");
    props.handleClick(e);
  };
  return (
    <>
      {props.showmodel === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a Post</h2>
              <button onClick={(event) => Reset(event)}>
                <box-icon name="x"></box-icon>
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>{props.user.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editortext}
                  placeholder="Start typing what's in your mind!"
                  onChange={(e) => setEditortext(e.target.value)}
                  autoFocus={true}
                ></textarea>
                {Choice === "image" ? (
                  <Upload>
                    <input
                      type="file"
                      accept="image/gif, image/jpeg, image/png, image/jpg"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={HandleChange}
                    />
                    <p>
                      <label htmlFor="file">Click Here!!</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                  </Upload>
                ) : (
                  Choice === "media" && (
                    <>
                      <input
                        type="text"
                        placeholder="Drop Video Link!..."
                        value={videolink}
                        onChange={(e) => setVideolink(e.target.value)}
                      />
                      {videolink && (
                        <ReactPlayer width={"100%"} url={videolink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </SharedContent>
            <SharedCreation>
              <Attach>
                <AssetButton onClick={() => selectchoice("image")}>
                  <box-icon type="solid" name="image-alt"></box-icon>
                </AssetButton>
                <AssetButton onClick={() => selectchoice("media")}>
                  <box-icon type="logo" name="youtube"></box-icon>
                </AssetButton>
              </Attach>
              <SharedComment>
                <AssetButton>
                  <box-icon name="comment-detail" type="solid"></box-icon>
                  Comments!!
                </AssetButton>
              </SharedComment>
              <Postbutton
                onClick={(event) => {
                  post(event);
                }}
              >
                Post
              </Postbutton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.5s;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.6);
    border: none;
    background: lightgray;
    border-radius: 50%;
  }
`;
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  background: transparent;
  vertical-align: baseline;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 21px 24px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-clip: content-box;
    border: 2px solid transparent;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 8px;
  }
`;
const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;
const AssetButton = styled.button`
  display: flex;
  align-items: center;
  min-width: auto;
  height: 40px;
  color: rgba(0, 0, 0, 0.5);
`;
const Attach = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;
const SharedComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
`;
const Postbutton = styled.button`
  min-width: 60px;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  background: #004182;
  color: white;
  border: none;
  outline: none;
  &:hover {
    background: #03a5ad;
  }
`;
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
const Upload = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  post: (payload) => dispatch(postAPI(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
