import React, { useState, useEffect } from 'react';
/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [currentTab, setCurrentTab] = useState(0)
  const id = [0,1,2]
  const [items, putItems, clearItems] = useStorage()

  const updateItems = (item) => {
    const item_ = {key: getKey(), text:item, done:false}
    putItems([... items, item_])
  }

  
  const handleOnClickTab = (e) => {
    setCurrentTab(e.currentTarget.getAttribute('id'))
  }

  const displayItems = () => {
    return items.filter(item => {
        if (currentTab == 0) return true;
        if (currentTab == 1) return !item.done;
        if (currentTab == 2) return item.done;
      })
  };

  const handleItemClick = (item_) => {
    putItems((items.map(item => {
      if(item.key === item_.key) {
        item.done = !item.done
      }
      return item
    })))
  }
  
  return (
    <div className="panel">
      
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      
      <Filter handleOnClickTab={handleOnClickTab} currentTab={currentTab} id={id}/>
      
      <Input updateItems={updateItems}/>
      
      {displayItems().map(item => (
        <TodoItem
          key={item.key}
          item={item}
          handleItemClick={handleItemClick}
        />
      ))}
      
      <div className="panel-block">
        {displayItems().length} items
      </div>
      
      <div className="panel-block">
        <button onClick={() => {clearItems()}} className="button is-fullwidth is-light clearButton">全てのToDoを削除</button>
      
      </div>
    </div>
  );
}

export default Todo;