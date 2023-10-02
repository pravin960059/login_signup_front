import react from 'react';
import './Answer_box.css'

function Question2(){
    return(
    <div className='box'>
    <h1 className='heading'>Python Reversing a Number Code</h1>
  <pre><code>{`
num = int(input())
n=0
while num != 0:
    digit = num % 10
    n = n * 10 + digit
    num =num // 10
print(n)
`}
</code></pre>
</div>
    )
}
export default Question2;