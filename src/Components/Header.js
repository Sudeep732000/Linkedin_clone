/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signOutAPI } from "../Actions";

function Header(props) {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            <img src="/images/home-logo.svg" alt="home_logo"></img>
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search for Anything.." />
          </div>
          <SearchIcon src="/images/search-icon.svg" />
        </Search>
        <NavMenu>
          <NavlistWrp>
            <Navlist className="active">
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </Navlist>
            <Navlist>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </Navlist>
            <Navlist>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </Navlist>
            <Navlist>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </Navlist>
            <Navlist>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </Navlist>
            <User>
              <a>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
              <SignOut onClick={() => props.signOut()}>
                <a>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
            <Premiumnav>
              <h4>Try Premium for free</h4>
            </Premiumnav>
          </NavlistWrp>
        </NavMenu>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid lightgray;
  padding: 0 24px;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%auto;
  max-width: 1440px;
`;
const Logo = styled.span`
  margin-right: 5px;
  font-size: 0px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  margin-left: 8px;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 3px;
      width: 210px;
      color: rgba(0, 0, 0, 0.9);
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 13px;
      height: 34px;
      border-color: #54bed6;
      vertical-align: text-top;
    }
    input:focus {
      outline: none;
    }
  }
`;
const SearchIcon = styled.img`
  width: 18px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavMenu = styled.div`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    z-index: 1;
  }
`;
const NavlistWrp = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scale(1);
      border-bottom: 3px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
const Navlist = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 45px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
        transform: scale(1.05);
      }
    }
  }
`;
const SignOut = styled.div`
  position: absolute;
  top: 46px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 80px;
  height: 30px;
  font-size: 15px;
  font-weight: 400;
  transition-duration: 170ms;
  text-align: center;
  display: none;
`;
const User = styled(Navlist)`
  a > svg {
    width: 12px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      cursor: pointer;
      justify-content: center;
    }
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
const Premiumnav = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 12px;
  color: goldenrod;
  word-wrap: break-word;
  padding: 10px;
  word-break: break-word;
  @media (max-width: 768px) {
    display: none;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
