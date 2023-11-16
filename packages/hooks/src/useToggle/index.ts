import {useState, useMemo} from 'react';

export default function useToggle(defaultValue = false, reverseValue?) {

  const [state, setState] = useState(defaultValue)

  const actions = useMemo(() => {
    const reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;

    const toggle = () => setState(v => v === defaultValue ? reverseValueOrigin : defaultValue)
    const set = v => setState(v);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin)
  
    return {
      toggle,
      set,
      setLeft,
      setRight
    }
  })

  return [state, actions]
}