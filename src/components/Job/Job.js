import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { jobsUrl } from "../../util/url";

export default function Job() {
  const { auth } = useAuth();
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axios.get(jobsUrl, {
          headers: {
            Authorization: auth.token,
          },
        });
        const { data, metadata } = res.data;
        const totalPages = Math.ceil(metadata.count / metadata.limit);
      } catch (e) {}
    };
    getJobs();
  }, []);
  return (
    <div>
      <h4>Jobs posted by you</h4>
      <div>
        <div>{}</div>
      </div>
    </div>
  );
}
