import { View, Text } from "react-native";
import UserProvider from "./src/Components/User";
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

    //UserProvider가 User를 감싸고 있음 -> User에 값 전달
    //(UserProvider = UserContext.Provider)

    // = User에서 UserProvider의 value를 받아 사용
    //이때 UserProvider내부에서 value를 전달하므로 따로 value설정필요x
    <UserProvider>
      <Container>
        <User/> 
      </Container>  
    </UserProvider>
  );
}
