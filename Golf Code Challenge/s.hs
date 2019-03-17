f=0:scanl(+)1f
h 0=1
h n=f!!n*n+f!!(n+1)+h(n-1)
main=readLn>>=print.h
