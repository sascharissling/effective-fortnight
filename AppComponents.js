import styled, { css } from "@emotion/native";

export const AppContainer = styled.View`
  flex: 1;
  padding: 50px;
  align-items: center;
  ${Platform.select({
    ios: css`
      background-color: #000000;
    `,
    android: css`
      background-color: #000000;
    `
  })};
`;

export const GoalInput = styled.View`
  flex-flow: row nowrap;
  align-items: center;
`;

export const GoalTextInput = styled.TextInput`
  border: 1px solid #707070;
  border-radius: 15px;
  background-color: #ffffff;
  font-size: 18px;
  height: 40px;
  width: 200px;
  margin: 20px;
  padding: 10px;
  &::placeholder {
    font-size: 14px;
  }
`;

export const AddButton = styled.Button``;

export const Goals = styled.View``;

export const Goal = styled.Text`
  color: white;
`;

export const GoalWrapper = styled.View`
  background-color: #333;
  height: 50px;
  width: 200px;
  border-radius: 15px;
  margin-vertical: 10px;
  justify-content: center;
  align-items: center;
`;
