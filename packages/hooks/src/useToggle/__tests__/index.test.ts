import { renderHook, act } from '@testing-library/react'
import useToggle from '../index'

const callToggle = (hook) => {
  act(() => {
    hook.result.current[1].toggle()
  })
}

const callRight = (hook) => {
  act(() => {
    hook.result.current[1].setRight()
  })
}

describe('useToggle', () => {
  it('不传参', async () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();

    callRight(hook)
    expect(hook.result.current[0]).toBeTruthy()
  })
})