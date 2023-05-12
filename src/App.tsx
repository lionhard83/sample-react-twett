import { useEffect, useState, useRef } from 'react'
import logo from './logo.svg';
import './App.css';
const ronaldo = 'https://cdn.calciomercato.com/images/2023-02/ronaldo.alnassr.2022.23.gol.1400x840.jpg';
const messi = 'https://static.open.online/wp-content/uploads/2023/05/messi-1152x768.jpg'



type Option =  'X' | 'O' | '';

// componenti
const App = () => {

  const x = useRef<HTMLInputElement>(null);
  const image = useRef<HTMLImageElement>(null);

  const [turn, setTurn] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<Option>('');
  const [grid, setGrid] = useState<Option[][]>([['','',''], ['','',''], ['','','']])
  
  const showPassword = () => {
    x.current!.type = x.current!.type === 'password' ?  'text' : 'password';
  }


  const handleClick = (index1: number, index2: number) => {
    

    if (winner || grid[index1][index2]) return;
    grid[index1][index2] = turn;
    setGrid([...grid]);

  }
  
  useEffect(() => {
    if (checkWinner()) {
      setWinner(turn);
    } else {
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid])


  const reset = () => {
    setGrid([['','',''], ['','',''], ['','','']]);
    setWinner('');
    setTurn('X');
  }

  const checkWinner = () => 
        (grid[0][0] && grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2]) || 
        (grid[1][0] && grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2]) || 
        (grid[2][0] && grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2]) ||

        (grid[0][0] && grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0]) || 
        (grid[0][1] && grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1]) || 
        (grid[0][2] && grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2]) ||

        (grid[0][0] && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) || 
        (grid[0][2] && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0])

  
  return (
    <>
      <input type='password' ref={x} ></input>
      <img ref={image} style={{maxHeight: '200px'}} src={ronaldo}></img>
      <button onClick={() => image.current!.src = image.current!.src === ronaldo ? messi : ronaldo} >showPassword</button>
      <button onClick={() => x.current!.focus()} >Focus</button>
      <button onClick={reset}>Reset</button>
      {!winner && <p>The turn is for: {turn}</p>}
      {winner && <p>The winner is : {winner}</p>}
      <div className="grid">
        {grid.map((item, index1) => item.map((subItem, index2) => <div key={`${index1}-${index2}`} onClick={() => {handleClick(index1, index2)}}>_{subItem}_</div>))} 
    </div>
    </>
    
  );
}

export default App;
