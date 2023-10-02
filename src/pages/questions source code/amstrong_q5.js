import react from 'react';
import './Answer_box.css'
function Question5(){
    return(
        <div className='box'>
        <h1 className='heading'>Python Finding Armstrong Number Code</h1>
  <pre><code>{`
    number = int(input())
    num = number
    digit, sum = 0, 0
    length = len(str(num))
    for i in range(length):
        digit = int(num%10)
        num = num/10
        sum += pow(digit,length)
    if sum==number:
      print("Armstrong Number")
    else:
      print("Not Armstrong Number")`}
</code></pre>
</div>
    )
}
export default Question5;