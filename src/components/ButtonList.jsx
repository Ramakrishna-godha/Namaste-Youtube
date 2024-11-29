import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Podcasts" />
      <Button name="Cooking" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Valentines" />
    </div>
  );
};

export default ButtonList;
