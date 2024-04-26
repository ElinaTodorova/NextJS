"use client"
import dataSeed from "./lib/data.js";
import AgencySelection from "./section/AgencySelection/AgencySelection.jsx";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(dataSeed);
  return (
    <main>
     <AgencySelection {...data}/>
    </main>
  );
}
