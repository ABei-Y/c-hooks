

import React from 'react';
import {useToggle} from 'cassie-hooks' // 在tsconfig.json的paths中配置了路径，encode-hooks 即 /packages/hooks/src/index.ts


export default () => {
  const [state, {toggle, setLeft, setRight}] = useToggle()

  return (
    <div>

      <p>当前的值：{state + ''}</p>

      <button type='button' onClick={toggle}>toggle</button>
      <button type='button' onClick={setLeft}>setLeft</button>
      <button type='button' onClick={setRight}>setRight</button>

    </div>
  )
}