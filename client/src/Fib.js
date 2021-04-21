import React, { useState, useEffect } from "react";
import axios from "axios";

export const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState("");
  const [isSending, setIsSending] = useState(true);

  useEffect(() => {
    const fetchValues = async () => {
      await axios.get("/api/values/current").then((res) => setValues(res.data));
    };

    const fetchIndexes = async () => {
      await axios
        .get("/api/values/all")
        .then((res) => setSeenIndexes(res.data));
    };

    fetchValues();
    fetchIndexes();
  }, [isSending]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/values", {
      index,
    });

    setIndex("");
    setIsSending(!isSending);
  };

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <label>Enter your index:</label>
          <input value={index} onChange={(e) => setIndex(e.target.value)} />
          <button>Submit</button>
        </form>

        <h3>Indexes I have seen</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            margin: "20px 150px 20px 150px",
          }}
        >
          {seenIndexes.map(({ number }, i) => (
            <p key={i}>{number}, </p>
          ))}
        </div>

        <h3>Calculated Values</h3>
        {Object.entries(values).map((t, k) => (
          <p key={k} value={t[0]}>
            For index ({t[0]}) | Calculated...{t[1]}
          </p>
        ))}
      </center>
    </div>
  );
};
