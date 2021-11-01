/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signInAPI } from "../Actions";
import { Redirect } from "react-router";

function Login(props) {
  return (
    <Container>
      {props.user && <Redirect to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="login_page" />
        </a>
        <div>
          <Join>Join Now</Join>
          <Signin>Sign Up</Signin>
        </div>
      </Nav>
      <Section>
        <Heading>
          <h1>Welcome to Our Professional Community</h1>
          <img src="/images/login-hero.svg" alt="home_pic" />
        </Heading>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/google.svg" alt="google_pic" />
            Sign In with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1440px;
  z-index: 1;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 120px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 2px 6px;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: black;
  font-weight: 600px;
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 9px;
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const Signin = styled.a`
  box-shadow: inset 0 0 0 1px lightblue;
  color: blue;
  border-radius: 12px;
  padding: 10px 15px;
  font-size: 16px;
  transition-duration: 170ms;
  font-weight: 600px;
  line-height: 40px;
  &:hover {
    background-color: lightblue;
    color: darkblue;
    text-decoration: none;
  }
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  align-content: start;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const Heading = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    color: #2977c9;
    font-size: 45px;
    font-weight: 200;
    line-height: 50px;
    @media (max-width: 768px) {
      font-size: 30px;
      text-align: center;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 600px;
    height: 900px;
    position: absolute;
    bottom: -2px;
    right: -20px;
    @media (max-width: 863px) {
      width: 400px;
    }
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;
const Form = styled.div`
  margin-top: 100px;
  width: 410px;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 55px;
  width: 100%;
  border-radius: 20px;
  outline: hidden;
  z-index: 0;
  transition-duration: 170ms;
  font-size: 20px;
  &:hover {
    color: chocolate;
    transform: scale(1.05);
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
