"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState(""); // store what the user types

  const handleJoin = () => {
    if (!username.trim()) return;
    router.push(`/game?username=${username}`);
    // ig go to game and send the name
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-white">

      <h1 className="text-3xl font-bold mb-6">Enter your username</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-4 py-2 rounded-xl border border-gray-300 w-64
                   focus:outline-none focus:ring-2 focus:ring-purple-500
                   bg-white dark:bg-zinc-900 dark:border-zinc-700"
      />

      <button
        onClick={handleJoin}
        className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-semibold"
      >
        Join
      </button>
    </div>
  );
}
