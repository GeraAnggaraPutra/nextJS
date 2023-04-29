"use client"
import React, { useState } from 'react'

export default function page() {

    const [query, setQuery] = useState("")

    const onSearch = (e) => {
        e.preventDefault()
        const inputQuery = e.target[0].value;
        setQuery(inputQuery)
    }
  return (
    <div className="ml-3">
      <form onSubmit={onSearch}>
        <input
          className="mr-3 w-auto border p-2 rounded-xl shadow-xl border-sky-600"
          type="text"
          placeholder="search user from github"
        />
        <button className="bg-slate-600 py-1 px-3 rounded-lg shadow-lg text-white hover:bg-slate-500 hover:scale-105 duration-300 font-bold h-10">
          Search
        </button>
      </form>
        <sectionResults query={query} />
    </div>
  );
}
