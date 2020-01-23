import React from "react";
import {
  AppContainer,
  GoalInput,
  GoalTextInput,
  AddButton,
  Goals,
  Goal,
  GoalWrapper
} from "./AppComponents";

export default function App() {
  const [enteredGoal, setEnteredGoal] = React.useState("");
  const [courseGoals, setCourseGoals] = React.useState([]);

  function handleGoalInput(enteredText) {
    setEnteredGoal(enteredText);
  }

  function handleGoalAddition() {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <AppContainer>
      <GoalInput>
        <GoalTextInput
          placeholder="Add goal for course..."
          onChangeText={handleGoalInput}
          value={enteredGoal}
        />
        <AddButton title="ADD" onPress={handleGoalAddition} />
      </GoalInput>
      <Goals>
        {courseGoals.map(goal => (
          <GoalWrapper key={goal}>
            <Goal>{goal}</Goal>
          </GoalWrapper>
        ))}
      </Goals>
    </AppContainer>
  );
}
