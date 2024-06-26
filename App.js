import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Box = styled.TouchableOpacity`
  background-color: tomato;
  width: 200px;
  height: 200px;
`;

export default function App() {
  const [y, setY] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const moveUp = () => {
    // Incrementing y by 1 every 1 second
    const id = setInterval(() => setY((prev) => prev + 1), 1);
    setIntervalId(id);

    console.log(id);
  };

  // Once y hits 200 -> clear the interval to avoid non-ending interval
  useEffect(() => {
    if (y === 200) {
      clearInterval(intervalId);
    }
  }, [y, intervalId]);

  console.log("rendering");
  return (
    <Container>
      <Box
        onPress={moveUp}
        style={{
          transform: [{ translateY: y }],
        }}
      />
    </Container>
  );
}
