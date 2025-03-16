import React, { useState, useEffect } from "react";

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [speed, setSpeed] = useState(null);

  useEffect(() => {
    // Check online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Measure internet speed
    const measureSpeed = async () => {
      const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"; // Small test image
      const startTime = new Date().getTime();

      try {
        const response = await fetch(imageUrl, { cache: "no-cache" });
        if (!response.ok) throw new Error("Failed to fetch");

        await response.blob();
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000; // in seconds
        const fileSize = 100000; // Approx 100 KB
        const speedMbps = (fileSize / duration / 1024 / 1024).toFixed(2);
        setSpeed(speedMbps);
      } catch (error) {
        setSpeed("N/A");
      }
    };

    measureSpeed();
    const interval = setInterval(measureSpeed, 5000); // Check speed every 5 seconds

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="networkstatus bg-dark0 text-light p-2 d-flex justify-content-between align-items-center">
      <span className="fw-bold px-3">
        {isOnline ? "🟢 Online " : "🔴 Offline "}
      </span>
      <span className="m-0">  |  Internet Speed: {speed ? `${speed} Mbps` : "Checking..."}</span>
    </div>
  );
};

export default NetworkStatus;
