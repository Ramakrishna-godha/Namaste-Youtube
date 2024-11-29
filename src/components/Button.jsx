import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 p-2 m-5 rounded-lg bg-gray-300">{name}</button>
    </div>
  );
};

export default Button;
