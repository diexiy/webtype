"use client";
import { useState, useEffect } from "react";

export default function GamePage() {
  const [textToType, setTextToType] = useState("");
  const [input, setInput] = useState("");
  const [progress, setProgress] = useState(0);

  // Fetch the race text from our API
  useEffect(() => {
    fetch("/api/race")
      .then((res) => res.json())
      .then((data) => setTextToType(data.text));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    // calculate progress
    let correct = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === textToType[i]) correct++;
      else break;
    }
    setProgress(correct);

    // Send progress to API
    fetch("/api/race", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "Player1", progress: correct }),
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 p-4">
      <h1 className="text-2xl font-bold">Typing Race</h1>
      <p className="border p-4 rounded w-full max-w-xl">{textToType}</p>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="border p-2 rounded w-full max-w-xl"
        placeholder="Start typing..."
      />

      <p>Progress: {progress}/{textToType.length}</p>
      {progress === textToType.length && <p className="text-green-500">You finished!</p>}
    </div>
  );
}
