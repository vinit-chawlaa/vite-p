import React, { useState } from 'react'
import {question} from './constants/question.jsx'
import Question from './components/Question'
import Result from './components/Result.jsx'

const Quiz = () => {

    const [currenques,setCurrentques] = useState(0)
    const [userans,setUserans] = useState([])

    const handlenextquestion = (iscorrect) =>{
        setCurrentques(currenques + 1)
        setUserans([...userans , iscorrect])
    }

    const resetquiz = () => {
        setCurrentques(0)
        setUserans([])
    }

    
  return (
    <div className='flex items-center justify-center flex-col py-5'>
        <h1 className='text-center font-bold text-5xl'>World Quiz</h1>
        {
            currenques < question.length && (
                <Question question={question[currenques]} onanswerclick={handlenextquestion}/>
            )
        }

        {currenques === question.length && (<Result userans={userans} question={question} resetquiz={resetquiz}/>)}
    </div>
  )
}

export default Quiz