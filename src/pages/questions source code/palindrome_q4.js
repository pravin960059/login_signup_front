import react from 'react';
import './Answer_box.css'

function Question4(){
    return(
        <div className='box'>
        <h1 className='heading'>Python Finding Palindrome number Code</h1>
  <pre><code>{`
num=int(input())
temp=num
rev=0
while(n>0):
    dig=n%10
    rev=rev*10+dig
    n=n//10
if(temp==rev):
    print("The number ",num,"is a palindrome!")
else:
    print("The number ",num,"isn't a palindrome!")
    `}
</code></pre>
</div>
    )
}
export default Question4;