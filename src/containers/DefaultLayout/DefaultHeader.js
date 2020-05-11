import React from "react";

import { AppNavbarBrand } from "@coreui/react";
import logo from "../../assets/img/brand/D-Tree.png";
import sygnet from "../../assets/img/brand/favicon.png";

export default function DefaultHeader() {
  return (
    <AppNavbarBrand
      full={{ src: logo, width: 89, height: 25, alt: "CoreUI Logo" }}
      minimized={{ src: sygnet, width: 30, height: 30, alt: "CoreUI Logo" }}
    />
  );
}
