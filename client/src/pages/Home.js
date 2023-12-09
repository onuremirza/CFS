import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listOfCars, setListOfCars] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/api/cars").then((response) => {
      setListOfCars(response.data);
    });
  }, []);

  return (
    <div className="flex flex-wrap m-4 p-0">
      {listOfCars.map((value, key) => {
        if (value.saled == 1) {
          return;
        } else {
          return (
            <div
              className="block h-[496px] w-[231px] relative mb-[20px] ml-[19px]"
              onClick={() => navigate(`/car/${value.id}`)}
            >
              <div className="flex flex-col relative h-full border-[1px] border-[#E6E6E6] border-solid rounded-[8px] shadow-xl">
                <div className="h-[350px] relative"></div>
                <div className="p-[10px] mb-[5px] block color[#1b1b1b] text-center">
                  <div className="">{value.title}</div>
                  <div className="">Brand: {value.brand}</div>
                  <div className="">Model: {value.model}</div>
                  <div className="">Year: {value.year}</div>
                  <div className="">Kilometer: {value.kilometer}</div>
                  <div className="">Price: {value.price}</div>
                  <button className="border w-full rounded-lg shadow-lg">
                    BUY
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Home;
