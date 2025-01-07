function App() {
  const [number, setNumber] = React.useState(1)
  
  return (
    <div className="counter">
      <button className="btn" onClick={()=>setNumber(number+1)}>Number={number}</button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)