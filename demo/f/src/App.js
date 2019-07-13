import React from 'react';
import Com from  './component/com-c'
function App() {
  const s = [
    1,
    2,
    3
  ]
  return (
    <div className="App">
      <Com s={s}/>
    </div>
  );
}

export default App;
