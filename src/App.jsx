import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodo } from "./components/InputTodo";
import { useCompleteTodos } from "./hooks/useCompleteTodos";
import { useIncompleteTodos } from "./hooks/useIncompleteTodos";
import { useText } from "./hooks/useText";
import "./styles.css";

export const App = ()=> {
  const [todoText,{ onChangeTodoText, onClickAdd }] = useText();
  const [incompleteTodos,{ onClickDelete, onClickComplete }] = useIncompleteTodos();
  const [completeTodos,{ onClickBack }] = useCompleteTodos();

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5}/>
      {incompleteTodos.length >= 5 && <p style={{color:"red"}}>登録できるtodoは5件までです。</p>}
      <IncompleteTodos incompleteTodos={incompleteTodos} onClickDelete={onClickDelete} onClickComplete={onClickComplete}/>
      <CompleteTodos completeTodos={completeTodos} onClick={onClickBack} />
    </>
  );
}
