import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import liff from "@line/liff";
import config from "../config";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import "./HomePage.css";
let today = new Date().getTime();
function DateTimeThai(datetime, format) {
  let thmonth = {
    "01": "มกราคม",
    "02": "กุมภาพันธ์",
    "03": "มีนาคม",
    "04": "เมษายน",
    "05": "พฤษภาคม",
    "06": "มิถุนายน",
    "07": "กรกฎาคม",
    "08": "สิงหาคม",
    "09": "กันยายน",
    10: "ตุลาคม",
    11: "พฤศจิกายน",
    12: "ธันวาคม",
  };
  let createdDate = "";
  let date = datetime.split(" ");
  let date_str = date[0].split("-");
  let time_str = date[1].split(":");
  let new_date = `${date_str[2]} ${thmonth[date_str[1]]} ${
    parseInt(date_str[0]) + 543
  }`;
  let new_time = `${time_str[0]}:${time_str[1]}น.`;
  if (format === 1) {
    createdDate = new_date;
  } else if (format === 2) {
    createdDate = new_time;
  } else {
    createdDate = new_date + " " + new_time;
  }
  return createdDate;
}

const HomePage = (props) => {
  const history = useHistory();
  const [userid, setUserID] = useState("U0ce66a9d268b3f1d81d04b30631acc87");
  const [docno, setDocno] = useState("");
  const [startdate, setStartDate] = useState("");
  const [starttime, setStartTime] = useState("");
  const [enddate, setEndDate] = useState("");
  const [endtime, setEndTime] = useState("");
  const [meetingHost, setMeetingHost] = useState("");
  const [meetingRoom, setMeetingRoom] = useState("");
  const [humanAmount, setHumanAmount] = useState("");
  const [humenTotal, setHumanTotal] = useState("");
  const [isMeeting, setIsMeeting] = useState(false);
  const [isCheckIn, setIsCheckIn] = useState("");
  const [isCheckOut, setIsCheckOut] = useState("");
  const [isTimeMeeting, setIsTimeMeeting] = useState(0);

  const CheckUser = async () => {
    const base_url = `${config.main_config.APP_URL}/user`;
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.main_config.TOKEN_APP}`,
    };
    await axios
      .post(base_url, { userid: userid }, { headers: header })
      .then((resp) => {
        if (resp.data.data.length > 0) {
          setUserID(resp.data.data[0].userId);
          localStorage.setItem(
            "user",
            JSON.stringify(resp.data.data[0].data_info)
          );
          localStorage.setItem(
            "userid",
            JSON.stringify(resp.data.data[0].userId)
          );
        } else {
          localStorage.clear();
          history.push("/register");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getMeeting = (meetingid) => {
    const docno = meetingid;
    const base_url = `${config.main_config.APP_URL}/getMeetingByDocno/${docno}`;
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.main_config.TOKEN_APP}`,
    };
    axios
      .get(base_url, { headers: header })
      .then((resp) => {
        if (resp.data.code === 200) {
          let startDate = new Date(resp.data.data[0].start_date).getTime();
          let endDate = new Date(resp.data.data[0].end_date).getTime();
          if ((startDate - today) / 1000 > 1800) {
            setIsTimeMeeting(1);
          }
          if (today > endDate) {
            setIsTimeMeeting(2);
          }
          setDocno(resp.data.data[0].docno);
          setStartDate(DateTimeThai(resp.data.data[0].start_date, 1));
          setStartTime(DateTimeThai(resp.data.data[0].start_date, 2));
          setEndDate(DateTimeThai(resp.data.data[0].end_date, 1));
          setEndTime(DateTimeThai(resp.data.data[0].end_date, 2));
          setMeetingHost(resp.data.data[0].meeting_host_name);
          setMeetingRoom(resp.data.data[0].meeting_name);
          setHumanAmount(resp.data.data[0].human_amount);
          setHumanTotal(resp.data.total[0].total_meeting);

          setIsMeeting(true);
          localStorage.setItem("isMeeting", "true");
        } else if (resp.data.code === 400) {
          localStorage.setItem("isMeeting", "false");
          // if (params !== "") {
          //   Swal.fire({
          //     title: "แจ้งเตือน",
          //     text: resp.data.msg,
          //     icon: "error",
          //   });
          // }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const checkIn = (userid, meetingid) => {
    const base_url = `${config.main_config.APP_URL}/saveCheckIn`;
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.main_config.TOKEN_APP}`,
    };
    axios
      .post(base_url, { userid: userid, docno: meetingid }, { headers: header })
      .then((resp) => {
        if (resp.data.code === 200) {
          Swal.fire({
            title: "เช็คอินเข้าประชุมเรียบร้อย",
            text: `เวลา ${DateTimeThai(
              resp.data.check_date[0].check_in_date,
              3
            )}`,
            showDenyButton: false,
            showCancelButton: false,
            showCloseButton: false,
            confirmButtonText: `ตกลง`,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        } else if (resp.data.code === 400) {
          Swal.fire({
            title: "แจ้งเตือน",
            text: resp.data.msg,
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const checkOut = (userid, meetingid) => {
    const base_url = `${config.main_config.APP_URL}/saveCheckOut`;
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.main_config.TOKEN_APP}`,
    };
    axios
      .post(base_url, { userid: userid, docno: meetingid }, { headers: header })
      .then((resp) => {
        if (resp.data.code === 200) {
          Swal.fire({
            title: "เช็คเอ้าท์ออกจากประชุมเรียบร้อย",
            text: `เวลา ${DateTimeThai(
              resp.data.check_date[0].check_out_date,
              3
            )}`,
            showDenyButton: false,
            showCancelButton: false,
            showCloseButton: false,
            confirmButtonText: `ตกลง`,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        } else if (resp.data.code === 400) {
          Swal.fire({
            title: "แจ้งเตือน",
            text: resp.data.msg,
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getCheckInCheckOut = (userid, meetingid) => {
    const base_url = `${config.main_config.APP_URL}/getCheckInCheckOut/${userid}/${meetingid}`;
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.main_config.TOKEN_APP}`,
    };
    axios
      .get(base_url, { headers: header })
      .then((resp) => {
        if (resp.data.code === 200) {
          setIsCheckIn(
            resp.data.data[0].check_in_date !== null
              ? DateTimeThai(resp.data.data[0].check_in_date, 3)
              : ""
          );
          setIsCheckOut(
            resp.data.data[0].check_out_date !== null
              ? DateTimeThai(resp.data.data[0].check_out_date, 3)
              : ""
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    CheckUser();
    const queryString = props.location.search;
    let str = queryString.split("=");
    const params = str.length > 0 ? str[1] : "";
    if (params !== "") {
      getMeeting(params);
      getCheckInCheckOut(userid, params);
    }
  });
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
                  <MDBCol className={isMeeting ? "hidden" : ""}>
                    <h6 className="h6-responsive mb-4 text-center">
                      <strong className="font-weight-bold text-primary">
                        กรุณา Scan QR Code เพื่อเข้าร่วมประชุม
                      </strong>
                    </h6>
                  </MDBCol>
                  <div className={!isMeeting ? "hidden" : ""}>
                    <MDBCol md="12">
                      <blockquote className="blockquote bq-primary">
                        <p className="bq-title" style={{ fontSize: "16px" }}>
                          {meetingRoom}
                        </p>
                        <strong style={{ fontSize: "16px" }}>
                          หัวข้อ {meetingHost}
                        </strong>
                        <div>
                          <strong style={{ fontSize: "14px" }}>
                            {startdate === enddate
                              ? "วันที่ " + startdate
                              : "ระหว่างวันที่ " + startdate + " - " + enddate}
                          </strong>
                        </div>
                        <div>
                          <small style={{ fontSize: "14px" }}>
                            เวลา {starttime} - {endtime}
                          </small>
                        </div>
                        <div>
                          <small style={{ fontSize: "14px" }}>
                            เข้าประชุมแล้ว {humenTotal}/{humanAmount} คน
                          </small>
                        </div>
                      </blockquote>
                    </MDBCol>
                    <MDBCol className="text-center">
                      <div>
                        <span
                          className={
                            isTimeMeeting === 0
                              ? "hidden"
                              : isTimeMeeting === 1
                              ? "text-primary"
                              : "text-danger"
                          }
                        >
                          {isTimeMeeting === 1
                            ? "สามารถเช็คอินเข้าห้องประชุมได้ก่อน 30 นาที"
                            : "จบการประชุมแล้ว"}
                        </span>
                      </div>
                      <div>
                        <span className="text-success">
                          {isCheckIn !== "" ? "เช็คอินเมื่อ " + isCheckIn : ""}
                        </span>
                      </div>
                      <div className="mt-3">
                        <span className="text-danger">
                          {isCheckOut !== ""
                            ? "เช็คเอาท์เมื่อ " + isCheckOut
                            : ""}
                        </span>
                      </div>
                      <div
                        className={
                          isTimeMeeting === 1 || isTimeMeeting === 2
                            ? "hidden"
                            : ""
                        }
                      >
                        <MDBBtn
                          gradient="blue"
                          size="sm"
                          className={isCheckIn !== "" ? "hidden" : ""}
                          onClick={() => checkIn(userid, docno)}
                        >
                          Check-in
                        </MDBBtn>
                        <MDBBtn
                          size="sm"
                          color="danger"
                          className={isCheckOut !== "" ? "hidden" : ""}
                          onClick={() => checkOut(userid, docno)}
                        >
                          Check-out
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
        </MDBAnimation>
        <div className={isMeeting ? "footer hidden" : "footer"}>
          <MDBCol className="text-center">
            <MDBBtn
              floating="true"
              gradient="blue"
              rounded
              color="danger"
              onClick={() =>
                (window.location = "https://line.me/R/nv/QRCodeReader")
              }
            >
              <MDBIcon icon="qrcode" size="4x" />
              <br />
              <strong className="ml-2" style={{ paddingBottom: "15px" }}>
                SCAN QR Code
              </strong>
            </MDBBtn>
          </MDBCol>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
