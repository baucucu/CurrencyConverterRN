import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Home from "./screens/Home";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#fff",
  $lightGray: "#F0F0F0",
  $border: "#E2E2E2",
  $inputText: "#797979"
});

export default () => <Home />;
