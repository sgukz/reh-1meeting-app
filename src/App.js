import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { HashRouter as Router, Link } from "react-router-dom";
import liff from "@line/liff";
import DefaultImg from "./assets/default-image.jpg";
import Routes from "./Routes";
const pkgVersion = require("../package.json").version;
class App extends Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  closeCollapse = (collID) => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: "" });
  };
  componentDidMount() {
    // liff.init(
    //   {
    //     liffId: "1655384297-9KVyzyQd",
    //   },
    //   () => {
    //     liff
    //         .getProfile()
    //         .then((profile) => {
    //             const userId = profile.userId;
    //             alert(userId)
    //         })
    //   },
    //   (err) => alert(err.message)
    // );
  }
  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className="flyout">
          <MDBNavbar
            color="red accent-3"
            dark
            expand="md"
            fixed="top"
            scrolling
          >
            <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
              <strong className="align-middle">REH 1Meeting</strong>&nbsp;
              <strong style={{ fontSize: "12px" }}>{"v." + pkgVersion}</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <MDBCollapse id="mainNavbarCollapse" isOpen={collapseID} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/meeting-history"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>ประวัติเข้าประชุม</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/profile"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>sguk</strong>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <div className="mt-2 mr-2" style={{ textAlign: "right" }}>
              <Link
                to="/profile"
                style={{ fontSize: "14px", cursor: "pointer" }}
              >
                <img
                  src={DefaultImg}
                  width="45"
                  height="45"
                  alt=""
                  className="rounded-circle mr-1"
                />
                SGUKZ
              </Link>
            </div>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
