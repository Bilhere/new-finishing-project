/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

function Home() {
  return (
    <>
      <div className="container-fluid col-11 mt-3">
        <h1 style={{ color: "green" }}>Hoş Geldiniz</h1>
        <div className="col-sm-12">
          <p style={{ color: "black" }}>
            Plajlarımızla ilgili bilgilere buradan ulaşabilirsiniz
          </p>
        </div>
      </div>
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194672.46593478715!2d28.60320367394811!3d40.325544052747865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca0ca30dbbea31%3A0xb06d9bc1d393a7a2!2sMudanya%2FBursa!5e0!3m2!1str!2str!4v1711912572298!5m2!1str!2str"
          width="100%"
          height="650"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
    </>
  );
}

export default Home;