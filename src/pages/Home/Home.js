import React, { useState } from "react";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polygon,
} from "google-maps-react";
import { mapData } from "../../components/Map.Data";
import Modal from "react-modal";
import "./Home.css";

function Home(props) {
  const [markerData, setMarkerData] = useState({});
  const markerHandler = (item) => {
    setMarkerData(item);
    console.log("item: ", item);
    openModal();
  };

  let triangleCoords = mapData.map((item) => {
    return { lat: JSON.parse(item.order_lat), lng: JSON.parse(item.order_lng) };
  });

  const customStyles = {
    content: {
      width: 400,
      top: "30%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Map
        google={props.google}
        style={{ width: "100%", height: "100%" }}
        initialCenter={{
          lat: 39.8976752,
          lng: -75.2828021,
        }}
        zoom={10}
        // onClick={this.onMapClicked}
      >
        {mapData?.map((item) => (
          <Marker
            onClick={() => markerHandler(item)}
            key={item.id}
            position={{
              lat: JSON.parse(item?.order_lat),
              lng: JSON.parse(item?.order_lng),
            }}
          />
        ))}

        <Polygon
          paths={triangleCoords}
          strokeColor="#75fa83"
          strokeOpacity={0.8}
          strokeWeight={2}
          // fillColor="#0000FF"
          fillOpacity={0.35}
        />
      </Map>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Map Modal"
        >
          <div className="modalInnerContainer">
            <div className="modalHeaderText">
              <h1>Schedule - {markerData.id}</h1>
              <h2 onClick={closeModal}>✖</h2>
            </div>
            <div className="modalOrderContainer">
              <div className="modalOrderInnerContainer">
                <p>customerName: </p> <span>{markerData.customerName}</span>
              </div>
              <div className="modalOrderInnerContainer">
                <p>city: </p>
                <span>{markerData.city} </span>
              </div>
              <div className="modalOrderInnerContainer">
                <p>state:</p>
                <span> {markerData.state}</span>
              </div>
              <div className="modalOrderInnerContainer">
                <p>zipcode:</p>
                <span>{markerData.zipcode} </span>
              </div>
              <div className="modalOrderInnerContainer">
                <p>order_lat:</p>
                <span>{markerData.order_lat} </span>
              </div>
              <div className="modalOrderInnerContainer">
                <p>order_lng:</p>
                <span>{markerData.order_lng} </span>
              </div>
            </div>
            <button className="modalBtn">
              Go to the Customer Order Details
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAmdyq8zthlro2VMfuG14DY2Oy6wwGd6Ok",
})(Home);
