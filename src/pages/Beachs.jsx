/* eslint-disable no-unused-vars */
import React from "react";
import data from "../data/Bursaplajlar.json";

const sampleJSON = {
  name: "LearnBestCoding",
  website: "www.learnbestcoding.com",
  email: "something@learnbestcoding.com",
};

const Beachs = () => {
  return (
    <>
      <h1 style={{ color: "green" }}>Plajlar</h1>
      <div>
        <div>
            {data.features.map((features) => {
              return Object.keys(features.properties).map((key, i) => (
                // eslint-disable-next-line react/jsx-key
                <p>
                  <span>
                    {key} : {features.properties[key]}
                  </span>
                </p>
              ));
            })}
        </div>
      </div>
    </>
  );
};

export default Beachs;