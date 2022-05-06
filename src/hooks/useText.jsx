import { useState } from "react";
import { useIncompleteTodos } from "./useIncompleteTodos";

export const useText = () => {
    const [todoText,setTodoText] = useState("");
    const [incompleteTodos,{setIncompleteTodos}] = useIncompleteTodos();

    //inputされた入力値をvalueに反映させる
    const onChangeTodoText = (e) => setTodoText(e.target.value);

    const onClickAdd = () => {
        if(todoText === "") return;
        const newTodos = [...incompleteTodos,todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    }

    return [todoText,{ onChangeTodoText, onClickAdd }];
}