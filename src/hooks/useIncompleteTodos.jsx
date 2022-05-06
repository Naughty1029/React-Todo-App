import { useState } from "react";
import { useCompleteTodos } from "./useCompleteTodos";

export const useIncompleteTodos = () => {
    const [incompleteTodos,setIncompleteTodos] = useState([]);
    const [completeTodos,{ setCompleteTodos }] = useCompleteTodos();

    //削除用のイベント
    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index,1);
        setIncompleteTodos(newTodos);
    }

    //追加用のイベント
    const onClickComplete = (index) =>{
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index,1);
        setIncompleteTodos(newIncompleteTodos);

        const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
        setCompleteTodos(newCompleteTodos);
    }
    return [incompleteTodos,{ setIncompleteTodos,onClickDelete, onClickComplete }];
}