/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
import {useState} from 'react'

function Filter( {id, currentTab, handleOnClickTab} ) {
  
  return (
    <div className="tabs is-centered">
      <ul>
        <li onClick = {handleOnClickTab} id={id[0]} className={currentTab == 0 ? `is-active` : ''}><a>全て</a></li>
        <li onClick = {handleOnClickTab} id={id[1]} className={currentTab == 1 ? `is-active` : ''}><a>未完了</a></li>
        <li onClick = {handleOnClickTab} id={id[2]} className={currentTab == 2 ? `is-active` : ''}><a>完了済み</a></li>
      </ul>
    </div>
  );
}

export default Filter