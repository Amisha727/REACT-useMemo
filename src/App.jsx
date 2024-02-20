import React, { useMemo, useState } from 'react';

//useMemo- across renders if u want to remember a value use useMemo
function App(){
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1);

  const finalValue = useMemo(() => {
      let count = 0;
      for(let i = 1; i<= inputValue; i++) {
        count = count + i;
    }
    return count;  
  }, [inputValue]);
  

  return(
    <div>
      <input onChange={function(e) {
        setInputValue(e.target.value);
        //actual reference to log (e.target)
      }} placeholder = {"Find sum from 1 to n"}></input>
      <br />
      Sum from 1 to {inputValue} is {finalValue}
      <br />
      <button onClick={() => {
        setCounter(counter + 1);
      }}>counter ({counter})</button>


    </div> 
    ) 
} 
export default App


  //2 state variables 
//we make using useEffect in which does only when input value changes,
// only when input value changes then this expensive operation will perform otherwise not.
//but this approaches problem of unnecessary rerendering  
/*const [count, setCount] = useState(0);
useEffect(() => {
  let finalCount = 0
  for(let i=1; i<= inputValue; i++){
    finalCount = finalCount + i;
  } setCount(finalCount);
}, [inputValue])
--in  this approach we are creating extra stte varibale and we have to rerender more than one times.
so better approach is using useMemo - memorize the value across re-renders, only recalculate if it input value changes.

*/
