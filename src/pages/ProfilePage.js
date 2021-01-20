import React, { Component } from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBAnimation,
  MDBBtn,
} from "mdbreact";
import axios from "axios";
import Swal from "sweetalert2";
import config from "../config";
import "./ProfilePage.css";
import DefaultImg from "../assets/default-image.jpg";
const jwt = require("jsonwebtoken");
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      pname: "",
      fname: "",
      lname: "",
      idcard: "",
      email: "",
      position: "",
      department: "",
      government: "",
      phone: "",
      isChange: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.LoadDataUser = this.LoadDataUser.bind(this);
  }
  handleChange(event) {
    let names = event.target.name;
    let val = event.target.value;
    this.setState({ [names]: val });
  }
  submitHandler(event) {
    event.preventDefault();
    event.target.className += " was-validated";
    const {
      userid,
      pname,
      fname,
      lname,
      idcard,
      email,
      position,
      department,
      government,
      phone,
    } = this.state;
    const formData = {
      userid: userid,
      idcard: idcard,
      pname: pname,
      fname: fname,
      lname: lname,
      email: email,
      position: position,
      department: department,
      government: government,
      phone: phone,
    };
    const base_url = `${config.main_config.APP_URL}/user/update`;
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.main_config.TOKEN_APP}`,
    };
    axios.post(base_url, formData, { headers: header }).then((resp) => {
      if (resp.data.code === 200) {
        localStorage.setItem("user", JSON.stringify(resp.data.data.token));
        localStorage.setItem("userid", JSON.stringify(resp.data.data.userid));
        Swal.fire({
          title: "แก้ไขข้อมูลเรียบร้อย",
          text: "กรุณารอสักครู่...",
          icon: "success",
          showConfirmButton: false,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else if (resp.data.code === 400) {
        Swal.fire({
          title: "แจ้งเตือน",
          text: resp.data.msg,
          icon: "warning",
        });
      } else {
        Swal.fire({
          title: "แจ้งเตือน",
          text: resp.data.error,
          icon: "error",
        });
      }
    });
  }
  LoadDataUser() {
    const user = localStorage.getItem("user");
    if (user) {
      const decoded = jwt.verify(
        JSON.parse(user),
        config.main_config.TOKEN_APP
      );
      this.setState({
        userid: decoded.userid,
        pname: decoded.pname,
        fname: decoded.fname,
        lname: decoded.lname,
        idcard: decoded.idcard,
        email: decoded.email,
        position: decoded.position,
        department: decoded.department,
        government: decoded.government,
        phone: decoded.phone,
      });
    }
  }
  componentDidMount() {
    this.LoadDataUser();
  }
  render() {
    return (
      <div>
        <MDBEdgeHeader
          color="red lighten-5"
          className="sectionPage"
          style={{ height: 100 }}
        />
        <div className="mt-3 mb-5">
          <MDBAnimation type="zoomIn" duration="500ms">
            <MDBFreeBird>
              <MDBRow>
                <MDBCol
                  md="10"
                  className="mx-auto float-none white z-depth-1 py-2 px-2"
                >
                  <MDBCardBody>
                    <MDBCol className="text-center">
                      <img
                        src={DefaultImg}
                        width="150"
                        height="150"
                        alt=""
                        className="rounded-circle"
                      />
                    </MDBCol>
                    <MDBCol md="12">
                      <h4 className="font-weight-bold mb-4 text-center">
                        John Doe
                      </h4>
                      <h5 className="text-primary">ข้อมูลส่วนตัว</h5>
                      <form className="needs-validation" onSubmit={this.submitHandler}>
                        <MDBRow>
                          <MDBCol md="4" className="mb-3">
                            <label htmlFor="pname" className="grey-text">
                              คำนำหน้า <span className="text-danger">*</span>
                            </label>
                            <div
                              className={this.state.isChange ? "hidden" : ""}
                            >
                              {this.state.pname}
                            </div>
                            <input
                              onChange={this.handleChange}
                              type="text"
                              value={this.state.pname}
                              className={`form-control ${
                                this.state.isChange ? "" : "hidden"
                              }`}
                              name="pname"
                              required
                            />
                          </MDBCol>
                          <MDBCol md="4" className="mb-3">
                            <label htmlFor="fname" className="grey-text">
                              ชื่อ <span className="text-danger">*</span>
                            </label>
                            <div
                              className={this.state.isChange ? "hidden" : ""}
                            >
                              {this.state.fname}
                            </div>
                            <input
                              onChange={this.handleChange}
                              type="text"
                              value={this.state.fname}
                              className={`form-control ${
                                this.state.isChange ? "" : "hidden"
                              }`}
                              name="fname"
                              required
                            />
                          </MDBCol>
                          <MDBCol md="4" className="mb-3">
                            <label htmlFor="lname" className="grey-text">
                              นามสกุล <span className="text-danger">*</span>
                            </label>
                            <div
                              className={this.state.isChange ? "hidden" : ""}
                            >
                              {this.state.lname}
                            </div>
                            <input
                              onChange={this.handleChange}
                              type="text"
                              value={this.state.lname}
                              className={`form-control ${
                                this.state.isChange ? "" : "hidden"
                              }`}
                              name="lname"
                              required
                            />
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol md="4" className="mb-3">
                            <label htmlFor="email" className="grey-text">
                              เลขบัตรประชาชน{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div
                              className={this.state.isChange ? "hidden" : ""}
                            >
                              {this.state.idcard}
                            </div>
                            <input
                              onChange={this.handleChange}
                              type="number"
                              value={this.state.idcard}
                              className={`form-control ${
                                this.state.isChange ? "" : "hidden"
                              }`}
                              name="idcard"
                            />
                          </MDBCol>
                          <MDBCol md="4" className="mb-3">
                            <label htmlFor="email" className="grey-text">
                              อีเมล <span className="text-danger">*</span>
                            </label>
                            <div
                              className={this.state.isChange ? "hidden" : ""}
                            >
                              {this.state.email}
                            </div>
                            <input
                              onChange={this.handleChange}
                              type="email"
                              value={this.state.email}
                              className={`form-control ${
                                this.state.isChange ? "" : "hidden"
                              }`}
                              name="email"
                            />
                          </MDBCol>
                          <MDBCol md="4" className="mb-3">
                            <label htmlFor="position" className="grey-text">
                              ตำแหน่ง <span className="text-danger">*</span>
                            </label>
                            <div
                              className={this.state.isChange ? "hidden" : ""}
                            >
                              {this.state.position}
                            </div>
                            <input
                              onChange={this.handleChange}
                              type="text"
                              value={this.state.position}
                              className={`form-control ${
                                this.state.isChange ? "" : "hidden"
                              }`}
                              name="position"
                            />
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol md="4" className="mb-3">
                            <label htmlFor="department" className="grey-text">
                              หน่วยงาน <span className="text-danger">*</span>
                            </label>
                            <div
                              className={this.state.isChange ? "hidden" : ""}
                            >
                              {this.state.department}
                            </div>
                            <input
                              onChange={this.handleChange}
                              type="text"
                              value={this.state.department}
                              className={`form-control ${
                                this.state.isChange ? "" : "hidden"
                              }`}
                              name="department"
                            />
                          </MDBCol>
                          <MDBCol md="4" className="mb-3">
                            <label htmlFor="main_company" className="grey-text">
                              ส่วนราชการ <span className="text-danger">*</span>
                            </label>
                            <div
                              className={this.state.isChange ? "hidden" : ""}
                            >
                              {this.state.government}
                            </div>
                            <input
                              onChange={this.handleChange}
                              type="text"
                              value={this.state.government}
                              className={`form-control ${
                                this.state.isChange ? "" : "hidden"
                              }`}
                              name="government"
                            />
                          </MDBCol>
                          <MDBCol md="4" className="mb-3">
                            <label htmlFor="phone_number" className="grey-text">
                              เบอร์โทร
                            </label>
                            <div
                              className={this.state.isChange ? "hidden" : ""}
                            >
                              {this.state.phone}
                            </div>
                            <input
                              onChange={this.handleChange}
                              type="text"
                              value={this.state.phone}
                              className={`form-control ${
                                this.state.isChange ? "" : "hidden"
                              }`}
                              name="phone"
                            />
                          </MDBCol>
                        </MDBRow>
                        {this.state.isChange === true ? (
                          <MDBBtn
                            gradient="blue"
                            type="submit"
                          >
                            บันทึกแก้ไข
                          </MDBBtn>
                        ) : (
                          <strong
                            onClick={() => this.setState({ isChange: true })}
                            className="btn btn-outline-success"
                          >
                            แก้ไขข้อมูล
                          </strong>
                        )}
                      </form>
                    </MDBCol>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBFreeBird>
          </MDBAnimation>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
