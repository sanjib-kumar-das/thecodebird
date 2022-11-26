import { useState, useEffect } from "react";

export default function GetLocation() {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });
  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
    const roundLat = Number(location.coords.latitude.toFixed(2));
    const roundLng = Number(location.coords.longitude.toFixed(2));

    if (roundLat === 22.55 && roundLng === 88.37) {
      // alert("⚠ Caution! You are entering an danger zone.");
    }
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        error: {
          code: 0,
          message: "Geolocation not supported",
        },
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  //   console.log(location.coordinates.lat, location.coordinates.lng);
  //   console.log("object");

  return location;
}
