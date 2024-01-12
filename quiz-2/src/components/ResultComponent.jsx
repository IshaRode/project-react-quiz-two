import { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
        <div className='all'>
      <div className='total'>
        <div className='res'>
            <h1>Result</h1>
        </div>
        <div className='practice'>
            <h2 className='need'>You need more practice!</h2>
            <h1 className='twenty'>Your score is 20%</h1>
            <div>
                <div className='Ques'>
                   <div> <p className='para'>Total number of questions</p> </div>
                   <div><p className='para'>15</p></div>
                </div>
                <div className='Ques'>
                   <div> <p className='para'>Number of attempted questions</p> </div>
                   <div><p className='para'>9</p></div>
                </div>
                <div className='Ques'>
                   <div> <p className='para'>Number of correct answers</p> </div>
                   <div><p className='para'>3</p></div>
                </div>
                <div className='Ques'>
                   <div> <p className='para'>Number of wrong answers</p> </div>
                   <div><p className='para'>6</p></div>
                </div>
            </div>
            
        </div>
        <div className='last-buttons'>
                <button className='play-again'>Play Again</button>
                <button className='back-to-home'>Back to home</button>
            </div>
      </div>
      </div>
    )
  }
}
