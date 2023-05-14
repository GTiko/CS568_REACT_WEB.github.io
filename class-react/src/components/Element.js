import React from "react";

export default function Element() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Element Created")
  );
}
