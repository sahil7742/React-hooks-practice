import React from 'react'
import KgButton from './KgButton'
import Hello from './Hello'
import Random from './Random'

const App = () => {
  return (
    <div>
      <h1>sahil shrivastava</h1>
      {/* way of importing components */}
      {/* method 1 */}
      <KgButton></KgButton>
      {/* method2 */}
      <KgButton/>
      <Hello></Hello>
      <Random/>
      <Random/>
      <Random/>
      
      
      
    </div>
  )
}

export default App