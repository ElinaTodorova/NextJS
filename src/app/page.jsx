
import data from "./lib/data.js";
import AgencySelection from "./section/AgencySelection/AgencySelection.jsx";

export default function Home() {
  return (
    <main>
     <AgencySelection {...data}/>
    </main>
  );
}
