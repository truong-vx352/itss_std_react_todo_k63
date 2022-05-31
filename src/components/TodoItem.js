/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import {useState} from 'react'
function TodoItem({key, item}) {

  const [toggleGreyText, setToggleGreyText] = useState(false)
  const handleItemClick = () => {
      setToggleGreyText(!toggleGreyText)
  }
  
  return (
    <label className={`${toggleGreyText ? 'has-text-grey-light' : ''} panel-block`}>
            <input onClick={handleItemClick} type="checkbox" />
            {item.text}
    </label>
  );
}

export default TodoItem;