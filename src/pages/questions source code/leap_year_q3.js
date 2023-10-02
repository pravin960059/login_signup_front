
import react from 'react';
import './Answer_box.css'

function Question3(){
    return(
        <div className='box'>
        <h1 className='heading'>Python Finding Leap Year Code</h1>
  <pre><code>{`
year=int(input())
if(year%400==0):
  print('Leap Year')
elif(year%4==0 and year%100!=0):
  print('Leap Year')
else:
  print('Not Leap Year')
    `}
</code></pre>
</div>
    )
}
export default Question3;