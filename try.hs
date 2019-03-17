-- fibfib :: Int
-- fibfib = 

fib :: Int -> [Int]
fib n = fib' 1 n
  where
    fib' a b = a:fib' b (a+b)