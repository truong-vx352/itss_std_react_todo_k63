import React, { useEffect, useRef, useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {updateItems} ) {
  // const inputRef = useRef(null)

  const [item, setItem] = useState("")
  // const handleOnChange = (event)=>{
  //       // show the user input value to console
  //       setItem(event.target.value);
  // };
  // useEffect(() => {
  //   if(inputRef && inputRef.current) {
  //     inputRef.current.addEventListener("keyup", function(event) {
  //       if (event.key === "Enter") {
  //         updateItems(inputRef.current.value)
  //         // console.log(item)
  //         inputRef.current.value = ''
  //       }
  //     });  
  //   }
  // }, [])
  const handleOnChange = (e) => {
    setItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItems(item)
    setItem('')
  }
  return (
    <div className="panel-block">
      <form onSubmit = {handleSubmit} style={{width: '100%'}}>
        <label>
        <input onChange={handleOnChange} className="input" type="text" value={item}></input>
        </label>
      </form>
    </div>
  );
}

export default Input;
