import React from "react";
import styled, { css } from "@emotion/native";
import { Platform } from "react-native";

const AppContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  ${Platform.select({
    ios: css`
      background-color: red;
    `,
    android: css`
      background-color: red;
    `
  })};
`;

const Welcome = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

export default function App() {
  return (
    <AppContainer>
      <Welcome>Open up App.js to start working on your app!</Welcome>
    </AppContainer>
  );
}
