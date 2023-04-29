import React from "react";

async function getData(param) {
  const res = await fetch(`https://api.github.com/users/${param}`);
  return res.json();
}

export default async function Detail({ params }) {
  const data = await getData(params.slug);
  return (
    <div>
      <p>Detail user : {params.slug}</p>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
