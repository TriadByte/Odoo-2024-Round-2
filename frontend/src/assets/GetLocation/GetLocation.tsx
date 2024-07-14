import { useState } from "react";

const GetLocation = () => {
  const [location, setLocation] = useState<{ lat: number | null; lng: number | null }>({
    lat: null,
    lng: null,
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          console.log("Latitude: ", latitude, "Longitude: ", longitude);
        },
        (error) => {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      {location.lat !== null && location.lng !== null && (
        <div>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      )}
    </div>
  );
};

export default GetLocation;
