import React from "react";
import "./Home.css";
export default function Whyus() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
  return (
    <div className="home__whyus">
      <h4>Why Us</h4>
      <div className="home_whyus_item_container">
        <WhyusItem heading="Get More Visibility" description={description} />
        <WhyusItem
          heading="Organize Your Candidates"
          description={description}
        />
        <WhyusItem heading="Verify Their Abilities" description={description} />
      </div>
    </div>
  );
}

function WhyusItem({ heading, description }) {
  return (
    <div className="whyus_item">
      <h5>{heading}</h5>
      <p>{description}</p>
    </div>
  );
}
