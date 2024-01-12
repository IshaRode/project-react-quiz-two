import  { Component } from 'react'
import PropTypes from 'prop-types';

class QuizComponent extends Component {
  
 render() {
  const {
    currentQuestionIndex,
    onNext,
    onPrevious,
    questions
  } = this.props;

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>No questions available</div>;
  }

    return (
    <div className='container'>
      <div className='quiz'>
        <h2 className='question'>Question</h2>
        <div className='fifteen'>
        <p >{currentQuestionIndex + 1} of 15</p>
        </div>
        <p className='mammal'>{currentQuestion.question}</p>
        <div className='options'>
        
            <button className='opt'>{currentQuestion.optionA}</button>
            <button className='opt'>{currentQuestion.optionB}</button>
            <button className='opt'>{currentQuestion.optionC}</button>
            <button className='opt'>{currentQuestion.optionD}</button>
        
        </div>
        <div className='next-buttons'>
          <button className='previous' onClick={onPrevious}>Previous</button>
          <button className='next' onClick={onNext}>Next</button>
          <button className='quit' onClick={this.props.onQuit}>Quit</button>
        </div>

      </div>
      
    </div>
    )
  }
}

  
QuizComponent.propTypes = {
  currentQuestionIndex: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onQuit: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
}

export default QuizComponent