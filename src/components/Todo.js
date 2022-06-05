import React, { useState } from 'react';
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
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

  const updateItems = (item) => {
    const item_ = {key: getKey(), text:item, done:false}
    putItems([... items, item_])
  }

  const handleOnClickTab = (e) => {
    setCurrentTab(e.currentTarget.getAttribute('id'))
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Filter handleOnClickTab={handleOnClickTab} currentTab={currentTab} id={id}/>
      <Input updateItems={updateItems}/>
      {currentTab == 0 && 
        <>
          {items.map(item => (
            <TodoItem
              key={item.key}
              item={item}
            />
          ))}
          <div className="panel-block">
            {items.length} items
          </div>
        </>
      }
      {currentTab == 1 && 
        <>
          {items.filter(item => item.done === false).map(item => (
            <TodoItem
              key={item.key}
              item={item}
            />
          ))}
          {
            <div className="panel-block">
              {items.filter(item => item.done === false).length} items
            </div>
          }
        </>
      }
      {currentTab == 2 && 
        <>
          {items.filter(item => item.done === true).map(item => (
            <TodoItem
              key={item.key}
              item={item}
            />
          ))}
          {
            <div className="panel-block">
              {items.filter(item => item.done === true).length} items
            </div>
          }
        </>
      }
    </div>
  );
}

export default Todo;