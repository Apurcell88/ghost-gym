import React, { Suspense } from "react";
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

let foundClient;

const ClientPage = async ({ params }) => {
  foundClient = await getClientById(params.id);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientHome client={foundClient} />
      </Suspense>
    </div>
  );
};

export default ClientPage;
