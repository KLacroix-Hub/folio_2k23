import React, { useState } from 'react'

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [player, setPlayer] = useState('X')
    const [winner, setWinner] = useState(null)
    const [popUp, setPopUp] = useState(false)

    const checkWinner = () => {
        const winLines = [
            ['0', '1', '2'],
            ['3', '4', '5'],
            ['6', '7', '8'],
            ['0', '3', '6'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['0', '4', '8'],
            ['2', '4', '6'],
        ]
        for (let index = 0; index < winLines.length; index++) {
            const [a, b, c] = winLines[index]
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(player)
                setPopUp(true)
            }
        }
    }

    const handleClick = (index:number) => {
        if (board[index] === null && !winner) {
            let newBoard = board
            newBoard[index] = player
            setBoard(newBoard)
            setPlayer(player === 'X' ? 'O' : 'X')
            checkWinner()
        }
    }

    const renderBox = (index:number) => {
        return (
            <div className="box body body-writing" onClick={() => handleClick(index)}>
                {board[index]}
            </div>
        )
    }

    //reset game
    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setPlayer('X')
        setWinner(null)
        setPopUp(false)
    }

    
  return (
    <>
        <div className="board">
            <div className="row">
                {renderBox(0)}
                {renderBox(1)}
                {renderBox(2)}
            </div>
            <div className="row">
                {renderBox(3)}
                {renderBox(4)}
                {renderBox(5)}
            </div>
            <div className="row">
                {renderBox(6)}
                {renderBox(7)}
                {renderBox(8)}
            </div>

           {popUp && 
                <div className="winner-game">
                    <h2 className='headline headline-game'>You won ! <br /> 
                        Congrats player {winner}</h2>
                    <button className='reset-btn body body-reset' onClick={() => resetGame()}>Replay</button>
                </div>
            }  
        </div>
    </>
  )
}
