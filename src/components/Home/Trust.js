import React from "react";

export default function Trust() {
  return (
    <div className="trust_container">
      <h4>Companies Who Trust Us</h4>
      <div className="trust_item_container">
        <TrustItem image="/goldline.png" />
        <TrustItem image="/kanba.png" />
        <TrustItem image="/lighting.png" />
        <TrustItem image="/ztos.png" />
        <TrustItem image="/liva.png" />
        <TrustItem image="/solaytic.png" />
        <TrustItem image="/velocity-9.png" />
        <TrustItem image="/ideaa.png" />

        <TrustItem image="/ztos.png" />
      </div>
    </div>
  );
}

function TrustItem({ image }) {
  return (
    <div className="trust_item">
      <img src={image} alt="trust" />
    </div>
  );
}
