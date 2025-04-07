import React from 'react'

const Question = ({question,onanswerclick}) => {

    

  return (
    <div className='border min-w-[700px] p-5 flex flex-col items-center justify-center my-10'>
        <h2 className='my-4 text-4xl font-semibold'>{question.questions}</h2>
       
        <ul className='grid grid-cols-2 flex-col my-4 w-full gap-5'>
            {question.answeroptions.map((option) => {
               return (
                <li key={option.text}>
                <button onClick={() => onanswerclick(option.iscorrect)} className='bg-teal-400 w-full py-2 hover:bg-teal-500 cursor-pointer'>
                    {option.text}
                </button>
                </li>
               )
            })}
        </ul>
    </div>
  )
}

export default Question