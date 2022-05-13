import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { jobsUrl } from "../../util/url";
import JobCard from "./JobCard";
import "./Job.css";
import ApplicationModal from "../Applications/ApplicationModal";

export default function Job() {
  const [jobs, setJobs] = useState([]);
  const [id, setId] = useState();
  const { auth } = useAuth();
  const [pageNo, setPageNo] = useState(1);
  const [show, setShow] = useState(false);

  const modalHandler = (e, id) => {
    setShow(true);
    setId(id);
  };

  useEffect(() => {
    axios
      .get(jobsUrl, {
        headers: {
          Authorization: auth.token,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        const { data, metadata } = res.data.data;
        //const totalPages = Math.ceil(metadata.count / metadata.limit);
        setJobs([...data]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <ApplicationModal
        show={show}
        modalHandler={() => {
          console.log("close");
          setShow(false);
        }}
        id={id}
      />
      <h4 style={{ textAlign: "left", color: "#FFFFFF", fontSize: 22 }}>
        Jobs posted by you
      </h4>
      <div>
        <div className="jobs__container">
          {jobs.length ? (
            jobs.map((job) => {
              return (
                <JobCard key={job.id} job={job} modalHandler={modalHandler} />
              );
            })
          ) : (
            <p>No jobs</p>
          )}
        </div>
      </div>
    </div>
  );
}
