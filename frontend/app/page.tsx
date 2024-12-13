"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:5000")
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Logs "Backend is running!"
      })
      .catch((error) => {
        console.error("Error connecting to backend:", error);
      });
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

