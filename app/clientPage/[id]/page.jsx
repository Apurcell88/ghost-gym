import React from "react";
import ClientHome from "@/app/(components)/ClientHome";

const getClientById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Clients/${id}`, {
    cache: "no-store", // grab new data
  });

  if (!res.ok) {
    throw new Error("Failed to get client");
  }

  return res.json();
};

async function ClientPage({ params }) {
  const client = await getClientById(params.id);
  console.log(client);

  return <ClientHome client={client} />;
}

export default ClientHome;
