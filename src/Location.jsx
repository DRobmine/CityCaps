"use client";
import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

// Marker uchun custom icon
const stationIcon = new L.Icon({
  iconUrl: "https://static.thenounproject.com/png/wifi-hotspot-icon-112189-512.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// 🔹 Search Control
function SearchControl({ setDestination }) {
  const map = useMap();
  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        const { center } = e.geocode;
        setDestination(center);
        L.marker(center).addTo(map).bindPopup(e.geocode.name).openPopup();
        map.setView(center, 14);
      })
      .addTo(map);

    return () => map.removeControl(geocoder);
  }, [map, setDestination]);
  return null;
}

// 🔹 User Location
function UserLocation({ setUserPos }) {
  const map = useMap();
  useEffect(() => {
    map.locate({ setView: true, maxZoom: 16 });
    map.on("locationfound", (e) => {
      setUserPos(e.latlng);
      L.marker(e.latlng).addTo(map).bindPopup("📍 Siz shu yerdasiz").openPopup();
      L.circle(e.latlng, { radius: e.accuracy }).addTo(map);
    });
  }, [map, setUserPos]);
  return null;
}

// 🔹 Routing
function Routing({ userPos, destination }) {
  const map = useMap();
  useEffect(() => {
    if (!userPos || !destination) return;

    const control = L.Routing.control({
      waypoints: [
        L.latLng(userPos.lat, userPos.lng),
        L.latLng(destination.lat, destination.lng),
      ],
      lineOptions: { styles: [{ color: "blue", weight: 4 }] },
      createMarker: (i, wp) =>
        L.marker(wp.latLng).bindPopup(i === 0 ? "Boshlanish (siz)" : "Manzil (search)"),
    }).addTo(map);

    return () => map.removeControl(control);
  }, [map, userPos, destination]);

  return null;
}

export default function Map() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [hours, setHours] = useState("");

  // 🔹 Routing uchun state
  const [userPos, setUserPos] = useState(null);
  const [destination, setDestination] = useState(null);

  // Metro stansiyalari + mashhur joylar
  const places = [
    { name: "Chilonzor (Metro)", coords: [41.3111, 69.2797] },
    { name: "Mustaqillik Maydoni (Metro)", coords: [41.3081, 69.2819] },
    { name: "Alisher Navoiy (Metro)", coords: [41.2965, 69.2587] },
    { name: "Kosmonavtlar (Metro)", coords: [41.307, 69.2686] },
    { name: "Paxtakor (Metro)", coords: [41.3078, 69.2634] },
    { name: "Bunyodkor (Metro)", coords: [41.3114, 69.2371] },
    { name: "Oybek (Metro)", coords: [41.2996, 69.2621] },
    { name: "Toshkent (Metro)", coords: [41.2999, 69.2866] },
    { name: "Yunus Rajabiy (Metro)", coords: [41.3021, 69.264] },
    { name: "Bodomzor (Metro)", coords: [41.3332, 69.3008] },
    { name: "Hazrati Imom Majmuasi", coords: [41.3623, 69.2852] },
    { name: "Chorsu Bozori", coords: [41.3263, 69.2312] },
    { name: "Amir Temur Maydoni", coords: [41.3115, 69.2793] },
    { name: "Magic City", coords: [41.3089, 69.2704] },
    { name: "Toshkent Botanika bog‘i", coords: [41.3562, 69.3139] },
    { name: "Toshkent Aeroporti", coords: [41.262, 69.2823] },
    { name: "Milliy Stadium (Bunyodkor)", coords: [41.2877, 69.2276] },
    { name: "Broadway (Sailgoh ko‘chasi)", coords: [41.3157, 69.2816] },
    { name: "Minor Masjidi", coords: [41.3276, 69.2965] },
  ];const handleReserve = (place) => {
    setSelectedPlace(place);
    setModalOpen(true);
    // 🔹 Manzil sifatida ham belgilaymiz
    setDestination({ lat: place.coords[0], lng: place.coords[1] });
  };

  const handleSubmit = () => {
    alert(
    `  ✅ ${selectedPlace?.name} uchun band qildingiz!\n💳 Karta: ${cardNumber}\n⏱️ Soat: ${hours}`
    );
    setModalOpen(false);
    setCardNumber("");
    setHours("");
  };

  return (
    <div id="location" style={{ width: "100%", height: "500px" }}>
      <MapContainer
        center={[41.2995, 69.2401]}
        zoom={12}
        style={{ height: "100%", width: "100%", zIndex:'10', borderRadius: "12px" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* 🔹 Cluster */}
        <MarkerClusterGroup>
          {places.map((place, idx) => (
            <Marker key={idx} position={place.coords} icon={stationIcon}>
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold">📍 {place.name}</h3>
                  <p className="text-sm text-gray-600">
                    Band qilingan: {Math.floor(Math.random() * 4) + 1} ta kapsula
                  </p>
                  <p className="text-sm text-gray-600">Narxi: 1-soat: 150$</p>
                  <p className="text-sm text-gray-600">
                    Bo‘sh kapsulalar: {Math.floor(Math.random() * 3) + 1} ta
                  </p>
                  <button
                    onClick={() => handleReserve(place)}
                    className="bg-red-600 border rounded-lg p-1 mt-1 text-gray-50"
                  >
                    Band qilish
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>

        {/* 🔹 Qo‘shimcha funksiyalar */}
        <SearchControl setDestination={setDestination} />
        <UserLocation setUserPos={setUserPos} />
        <Routing userPos={userPos} destination={destination} />
      </MapContainer>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-center mb-4">
              {selectedPlace?.name} uchun band qilish
            </h2>
            <input
              type="text"
              placeholder="💳 Karta raqami"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full border p-2 mb-3 rounded-md"
            />
            <input
              type="number"
              placeholder="⏱️ Necha soatga?"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full border p-2 mb-3 rounded-md"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-400 px-4 py-2 rounded-md text-white"
              >
                Bekor qilish
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-600 px-4 py-2 rounded-md text-white"
              >
                Tasdiqlash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}