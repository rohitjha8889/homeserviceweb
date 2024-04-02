"use client";

import React from 'react';

const App = () => {

  const handleClick = () => {
    window.open('https://www.metrolitesolutions.com/job/select_profile.php', '_parent');
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px', height:'90vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h1>जॉब में अप्लाई करने के लिए यहाँ क्लिक करें</h1>
        <button onClick={handleClick} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Apply Now</button>
      </div>
    </>
  );
}

export default App;
