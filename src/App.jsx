import { useState } from "react";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodo } from "./components/InputTodo";
import "./styles.css";

export const App = ()=> {
  const [todoText,setTodoText] = useState("");
  const [incompleteTodos,setIncompleteTodos] = useState([]);
  const [completeTodos,setCompleteTodos] = useState([]);

  //inputされた入力値をvalueに反映させる
  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos,todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

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

  //戻す用のイベント
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5}/>
      {incompleteTodos.length >= 5 && <p style={{color:"red"}}>登録できるtodoは5件までです。</p>}
      <IncompleteTodos incompleteTodos={incompleteTodos} onClickDelete={onClickDelete} onClickComplete={onClickComplete}/>
      <CompleteTodos completeTodos={completeTodos} onClick={onClickBack} />
    </>
  );
}
