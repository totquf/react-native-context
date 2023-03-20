import React from "react";
import { createContext, useState } from "react";

//context선언
const UserContext = createContext({
    //기본값, value로 전달하는 형태와 동일한 형식을 갖게하기 위해 dispatch도 함께 작성
    user: { name: '김샛별' },
    dispatch: () => {},
})

//children: app -> UserProvider의 자식으로 들어오는 컴포넌트를 말함(Container,User)
//1)prop로 자식 컴포넌트들을 받아서
const UserProvider = ({ children }) => {

    const [name, setName] = useState('Beomjun Kim');
    const value = { user: { name }, dispatch: setName }

    return (
        //값을 전달할 때 이름뿐만 아니라 이름State를 수정할 수 있는 함수도 함께 전달
        //2)리턴 코드에서 사용
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}

const UserConsumer = UserContext.Consumer;

//파일 밖에서도 사용할 수 있게 객체로 묶어서 내보내줌
export { UserProvider, UserConsumer };
export default UserContext;