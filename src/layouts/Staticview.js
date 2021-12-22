import React, { useState } from "react";
import Header from "../components/Header";
import Sider from "../components/Sider";

export default function Staticview() {
  const [isFolded, setIsFolded] = useState(true);
  return (
    <div>
      <Header />
      <Sider isFolded={isFolded} />
    </div>
  );
}
