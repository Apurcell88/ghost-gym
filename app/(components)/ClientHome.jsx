import React from "react";

const ClientHome = ({ client }) => {
  return (
    <div>
      <div>
        <h1>
          {`Welcome ${client.foundClient.firstName} ${client.foundClient.lastName}`}
        </h1>
      </div>
    </div>
  );
};

export default ClientHome;
