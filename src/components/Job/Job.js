import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useLayoutRef from "../../hooks/useLayoutRef";
import { jobsUrl } from "../../util/url";
import JobCard from "./JobCard";
import "./Job.css";
import ApplicationModal from "../Applications/ApplicationModal";
import NoJob from "../Logo/NoJob";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function Job() {
  const [jobs, setJobs] = useState([]);
  const [id, setId] = useState();
  const { auth } = useAuth();
  const [pageCount, setPageCount] = useState(0);
  const [show, setShow] = useState(false);
  const { layoutRef } = useLayoutRef();

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
        const { data, metadata } = res.data.data;
        console.log(Math.ceil(metadata.count / metadata.limit));
        setPageCount(Math.ceil(metadata.count / metadata.limit));
        setJobs([...data]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const fetchJobs = async (currentPage) => {
    axios
      .get(jobsUrl, {
        params: { page: currentPage },
        headers: {
          Authorization: auth.token,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        const { data } = res.data.data;
        setJobs([...data]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handlePageClick = (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;

    fetchJobs(currentPage);
    // scroll to the top
    window.scrollTo(0, layoutRef.current.offsetTop);
  };

  return (
    <div>
      {id && (
        <ApplicationModal
          show={show}
          modalHandler={() => {
            console.log("close");
            setShow(false);
          }}
          id={id}
        />
      )}
      <h4 style={{ textAlign: "left", color: "#FFFFFF", fontSize: 22 }}>
        Jobs posted by you
      </h4>
      <div>
        <div>
          {jobs.length ? (
            <>
              <div className="jobs__container">
                {jobs.map((job) => {
                  return (
                    <JobCard
                      key={job.id}
                      job={job}
                      modalHandler={modalHandler}
                    />
                  );
                })}
              </div>
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={""}
                pageCount={pageCount}
                marginPagesDisplayed={0}
                pageRangeDisplayed={0}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </>
          ) : (
            <div className="nojob">
              <NoJob />
              <p>Your posted jobs will show here!</p>
              <Link
                to="/post"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#43afff",
                    fontSize: 16,
                    textTransform: "none",
                    marginTop: 10,
                  }}
                  variant="contained"
                  color="primary"
                >
                  Post a Job
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
