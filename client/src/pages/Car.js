import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Car() {
  const [carObject, setCarObject] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/cars/byId/${id}`).then((response) => {
      setCarObject(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const onSubmit = () => {
    axios
      .post(`http://localhost:3001/api/cars/saled/byId/${id}`)
      .then((response) => {
        navigate("/");
      });
  };

  return (
    <div>
      <div className=" border-b-2 mb-[10px] color-[#333]">
        <h1 className="text-ellipsis text-[18px] color-[#333] p-[24px] h-[18px] whitespace-nowrap overflow-hidden ">
          {carObject.title}
        </h1>
      </div>
      <div className="">
        <div className="w-[480px] mr-[13px] float-left">
          <div className="h-[360px] overflow-hidden relative w-[480px]">
            {carObject.image}
          </div>
        </div>
        <div className="inline-block w-[243px] mr-[13px]">
          <h3 className="text-lg color-[#039] pb-[20px] relative">
            {carObject.price} TL
          </h3>
          <ul className="pt-[4px] list-style-none">
            <li className="border-b-2 border-dotted p-[5px]">
              {carObject.model}
            </li>
            <li className="border-b-2 border-dotted p-[5px]">
              {carObject.brand}
            </li>
            <li className="border-b-2 border-dotted p-[5px]">
              {carObject.model}
            </li>
            <li className="border-b-2 border-dotted p-[5px]">
              {carObject.year}
            </li>
            <li className="border-b-2 border-dotted p-[5px]">
              {carObject.kilometer}
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={onSubmit}
        className="border mt-2 p-4 px-24 shadow-sm rounded-lg hover:bg-gray-200 duration-500"
      >
        Buy
      </button>
    </div>
  );
}

export default Car;
