import { useState } from "react";
import { useIncompleteTodos } from "./useIncompleteTodos";

export const useCompleteTodos = () => {
    const [completeTodos,setCompleteTodos] = useState([]);
    const [incompleteTodos,{setIncompleteTodos}] = useIncompleteTodos();

    //戻す用のイベント
    const onClickBack = (index) => {
      const newCompleteTodos = [...completeTodos];
      newCompleteTodos.splice(index,1);
      setCompleteTodos(newCompleteTodos);
  
      const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
      setIncompleteTodos(newIncompleteTodos);
    }
    return [completeTodos,{ setCompleteTodos, onClickBack }];
}