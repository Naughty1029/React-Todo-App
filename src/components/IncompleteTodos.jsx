export const IncompleteTodos = ({incompleteTodos,onClickDelete,onClickComplete}) =>{
    return(
        <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo,index)=>{
            return (
              <li key={todo} className="list">
                <div>{todo}</div>
                <button onClick={()=>onClickComplete(index)}>完了</button>
                <button onClick={()=>onClickDelete(index)}>削除</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
}