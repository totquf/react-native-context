import React from "react";
import styled from "styled-components";
import { UserConsumer } from "../Context/User";

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
    `

const User = () => {
    return (
        //UserConsumer = UserContext.Comsumer
        //UserProvider에서 값 받아서 사용
        //value = { user: { name }, dispatch: setName }
        <UserConsumer> 
            {({ user }) => <StyledText>이름 : { user.name }</StyledText>}
        </UserConsumer>
    )
}

export default User;