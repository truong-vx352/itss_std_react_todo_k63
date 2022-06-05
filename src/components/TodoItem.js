/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item, handleItemClick}) {
  
  return (
    <label className={`${item.done ? 'has-text-grey-light' : ''} panel-block`}>
            <input onClick={() => {handleItemClick(item)}} type="checkbox" defaultChecked={item.done}
              />
            {item.text}
    </label>
  );
}

export default TodoItem;