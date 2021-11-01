/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { Redirect } from "react-router";
import { connect } from "react-redux";

function Home(props) {
  return (
    <Container>
      {!props.user && <Redirect to="/" />}
      <Section>
        <h4>
          <a>Develop New Skills - </a>
        </h4>
        <p>
          Millions of people use Linkedin to learn and connect with people to
          kick start their carrier.
        </p>
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 2px;
  max-width: 100%;
`;
// eslint-disable-next-line no-unused-vars
const Content = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.div`
  min-height: 50px;
  padding: 16px 0px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h4 {
    color: #0a66c2;
    font-size: 17px;
    cursor: pointer;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 17px;
    color: black;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 4fr) minmax(0, 12fr) minmax(300px, 6fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 15px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
export default connect(mapStateToProps)(Home);
