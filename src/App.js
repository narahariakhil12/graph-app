import { useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import lineData from "./db.json";
import "./App.css";
import CurveChart from "./CurveChart";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function App() {
  const [clickId, setClickId] = useState();
  const [open, setOpen] = useState(false);
  const [data,setData] = useState({})
  const openModal = (e) =>{
    setData(e)
    setOpen(o => !o)
  } 
  const closeModal = () => setOpen(false);

  console.log(data)
  return (
    <div>
      <ScatterChart
        width={730}
        height={250}
        margin={{
          top: 20,
          right: 20,
          bottom: 10,
          left: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="row" />
        <YAxis dataKey="col" />
        <Tooltip cursor={true} />

        <Scatter
          name="B school"
          data={lineData.points}
          fill="#82ca9d"
          onClick={(e) => openModal(e)}
          onContextMenu={(e) => {
            setClickId(e.id);
          }}
        />
        
      </ScatterChart>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal} style={{cursor:'pointer'}}>
            &times;
          </a>
         <div className="modal__data">
          <h2>Info:{data.name}</h2>
         Id:{data.id},
         value: {data.value}
         Column:{data.col}
         Row:{}
         
         </div>
        </div>
      </Popup>
 <CurveChart id={clickId}/>
    </div>
  );
}

export default App;
