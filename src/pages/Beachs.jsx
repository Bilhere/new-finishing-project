/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";


const Beachs = () => {
  const [plajlar, setPlajlar] = useState([]);
  const apiUrl = "https://api.npoint.io/1f170197c01370e05116";
  // https://acikyesil.bursa.bel.tr/dataset/plajlar/resource/6eaa7a01-7b06-44c0-be61-125dfc9aa7d8 Direkt bu adresden veri çekerek de projeye eklenebilir.
  useEffect(() => {
    (async () => {
      const data = await fetch(apiUrl).then((res) => res.json());

      setPlajlar(data);
    })();
  }, []);

  return (
    <>
      <div className="container-fluid col-11 mt-3">
        <h1 style={{ color: "green" }}>Plajlar</h1>
        <div className="row">
          {plajlar.map((plaj) => (
            <>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <div className="card-body">
                    <h5>{plaj.ADI}</h5>
                    <img className="img-thumbnail" src={plaj.image} alt="" />
                    <p className="card-text">
                      Bu plaj {plaj.ILCE} ilçesine bağlı {plaj.MAHALLE}{" "}
                      mahallesinde yer almaktadır.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          className="btn btn-sm btn-outline-secondary"
                          target="_blank"
                          href={`https://www.google.com/maps/@${plaj.coordinates},18z?entry=ttu`}
                        >
                          Harita için tıklayın
                        </a>
                      </div>
                      <small className="text-muted">
                        Plaj uzunluğu: {plaj.PLAJ_UZUNL} m.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Beachs;
