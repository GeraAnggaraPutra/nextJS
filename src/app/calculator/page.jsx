"use client";
import React, { useState } from "react";

export default function Calculator() {
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [hasil, setHasil] = useState();

  const handleSubmit = () => {
    setHasil(angka1 + angka2);
  };

  return (
    <div className="ml-3">
      <form className="flex gap-2">
        <input
          className="w-[100px] border p-2 rounded-xl shadow-xl border-sky-600"
          type="number"
          placeholder="angka 1"
          onChange={(e) => setAngka1(Number(e.target.value))}
        />
        <input
          className="w-[100px] border p-2 rounded-xl shadow-xl border-sky-600"
          type="number"
          placeholder="angka 2"
          onChange={(e) => setAngka2(Number(e.target.value))}
        />
        <button
          className="bg-slate-600 py-1 px-3 rounded-lg shadow-lg text-white hover:bg-slate-500 hover:scale-105 duration-300 font-bold"
          onClick={handleSubmit}
        >
          Hitung
        </button>
      </form>
      <p className="text-2xl mt-2">Hasil : {hasil}</p>
    </div>
  );
}
