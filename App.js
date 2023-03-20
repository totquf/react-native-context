import { View, Text } from "react-native";
import User from "./src/Components/User";
import styled from "styled-components";
import UserContext from "./src/Context/User";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  `

export default function App() {
  return (
    <UserContext.Provider value={{ name: '김서경' }}>
      <Container>
        <User/>
      </Container>  
    </UserContext.Provider>
  );
}
