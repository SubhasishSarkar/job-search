const baseUrl = "https://jobs-api.squareboat.info/api/v1/";

export const loginUrl = `${baseUrl}auth/login`;
export const jobsUrl = `${baseUrl}recruiters/jobs`;
export const applicantionsUrl = (id) => {
  return `${baseUrl}recruiters/jobs/${id}/candidates`;
};
