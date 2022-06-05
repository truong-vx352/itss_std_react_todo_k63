/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import {useState} from 'react'
function TodoItem({item}) {

  const [toggleGreyText, setToggleGreyText] = useState(item.done)
  const handleItemClick = () => {
      item.done = !item.done
      setToggleGreyText(!toggleGreyText)
  }
  
  return (
    <label className={`${toggleGreyText ? 'has-text-grey-light' : ''} panel-block`}>
            <input onClick={handleItemClick} type="checkbox" 
              checked={item.done ? "checked" : ""}
              />
            {item.text}
    </label>
  );
}

export default TodoItem;