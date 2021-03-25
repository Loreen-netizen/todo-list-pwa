import React from "react";
import styled from "styled-components";
import Link from "../Link/Link";
import { Button } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const Header = styled.header`
  background: #b5179e;
  color: white;
  text-align: center;
  padding: 0.1em 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  background: #b5179e;
  color:white
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;

const Footer = styled.footer`
  background: #f7a2dd;
  border-radius: 8px;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
  color: #a846a0;
  font-weight: 900;
`;

const List = styled.ul`
  list-style: none;
  font-family: Arial, Sans-serif;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const LinkWrap = styled.li`
  width: 50%;
`;

const PAGE_TITLE_MAP = {
  home: "To-do List",
  add: "Adding Item",
  edit: "Editing Item",
};

const StyledButton = styled(Button)`
  && {
    color: white;
  }
`;

const Layout = (props) => {
  const { children, activePage, userName, onLogIn, onUserClick } = props;
  return (
    <>
      <Header>
        <Title>{PAGE_TITLE_MAP[activePage]}</Title>
        <StyledButton
          onClick={userName ? onUserClick : onLogIn}
          startIcon={userName ? <AccountCircle /> : undefined}
        >
          {userName || "Log In"}
        </StyledButton>
      </Header>

      {children}

      <Footer>
        <nav>
          <List>
            <LinkWrap>
              <Link fullWidth disabled={activePage === "home"} url="/">
                Back To Home
              </Link>
            </LinkWrap>

            <LinkWrap>
              <Link fullWidth disabled={activePage === "add"} url="/add">
                Add new item
              </Link>
            </LinkWrap>
          </List>
        </nav>
      </Footer>
    </>
  );
};
export default Layout;
