import React from 'react';

function App() {
    let curTime=new Date();
    curTime=curTime.getHours();
    let greeting="";
    const cssStyle={};
    
    if (curTime>=1 && curTime<12) {
      greeting="Good Morninggggg";
      cssStyle.color="green";
    }else if(curTime>=12 && curTime<17) {
      greeting="Good Afternoonnnnn";
      cssStyle.color="orange";
    }else if(curTime>=17 && curTime<19) {
      greeting="Good Eveningggg";
      cssStyle.color="purple";
    }else {
      greeting="Good Nightttt";
      cssStyle.color="black";
    }
return(  
<>
  <div>
    <h1>Hello World,<span style={cssStyle}> {greeting}</span></h1>
  </div>
  </>
  )
}

export default App;
