import React from 'react'

const Result = ({userans,resetquiz,question}) => {

    const correctans = userans.filter((ans) => ans).length

  return (
    <div>
        <h2>Results</h2>
        <p>you answered {correctans} out of {question.length} quesitons</p>
        <span onClick={resetquiz}>click here to retry</span>
     
    </div>
  )
}

export default Result