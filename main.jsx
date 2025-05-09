function App() {
  return (
    <div className="app bg-pink-200 p-4">
      <h1 className='text-4xl text-center text-blue-400'>React18 Playground</h1>
      <p className='text-xl text-violet-400 text-center my-3'>Codecamp Thailand</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)