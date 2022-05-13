import axios from "axios";
import react, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { applicantionsUrl } from "../../util/url";
import useAuth from "../../hooks/useAuth";
import ApplicationCard from "./ApplicationCard";
import "./Application.css";

export default function ApplicationModal({ show, modalHandler, id }) {
  const { auth } = useAuth();
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    axios
      .get(applicantionsUrl(id), {
        headers: {
          Authorization: auth.token,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setApplications([...res.data.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);
  return (
    <Modal show={show} onHide={() => modalHandler(false)} size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Applicants for this job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {applications.length ? (
          <div className="applications__container">
            <p style={{ color: "#303F60", fontSize: 15, margin: 0 }}>
              Total {applications.length} applications
            </p>
            <div className="applications__wrapper">
              {" "}
              {applications.map((app) => {
                return <ApplicationCard application={app} />;
              })}
            </div>
          </div>
        ) : (
          <p>No application</p>
        )}
      </Modal.Body>
    </Modal>
  );
}
