export const CompleteTodos = ({completeTodos,onClick}) =>{
    
    return(
        <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo,index)=>{
            return (
              <li key={todo} className="list">
                <div>{todo}</div>
                <button onClick={()=>onClick(index)}>戻す</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
}