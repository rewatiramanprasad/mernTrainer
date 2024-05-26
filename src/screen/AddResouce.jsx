import React from "react";
import TopBar from "../components/TopBar";
import "./AddResource.css";
import ImageComponent from "../components/ImageComponent";
import loginTiles from "../assets/loginTiles.png";
import Form from "../components/Form";
const AddResource = () => {
  return (
    <div className="container">
      <TopBar buttonStatus={false} />
      <div className="innerContainerLogin">
        <div>
          <Form />
        </div>
        <div>
          <ImageComponent src={loginTiles} />
        </div>
      </div>
    </div>
  );
};

export default AddResource;
