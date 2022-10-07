1. React.memo(): HOC (Higher order component)
2. useCallback(): hook -> function -> memoized callback
3. useMemo(): hook -> value -> memoized value

function sum(a, b) {
  return a+b
}

sum(1,2) -> 3
sum(1,2) -> 3
sum(2,1) -> 3