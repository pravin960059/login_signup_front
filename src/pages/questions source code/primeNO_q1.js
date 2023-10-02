import react from 'react';
import './Answer_box.css'
function Question1(){
    return(
      <div className="box">
        <h1 className='heading'>Python Prime Number Finding Code</h1>
  <pre ><code >
    {`
num = int(input())
if num == 1:
    print(num, "is not a prime number")
elif num > 1:
   for i in range(2,num):
       if (num % i) == 0:
           print(num,"is not a prime number")
           break
   else:
       print(num,"is a prime number")

else:
   print(num,"is not a prime number")`}
</code></pre>
</div>

    )
}
export default Question1;