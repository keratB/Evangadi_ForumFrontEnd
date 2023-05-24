import React, { useEffect, useState } from 'react'
import "./QuestionDetail.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AnswerQuestion from '../../Components/AnswerQuestion/AnswerQuestion'
import Answer from '../../Components/Answer/Answer'
const SingleQuestion = () => {
    let params = useParams();
    const [question, setQuestion] = useState();
    const [answers, setAnswers] = useState([]);
    const questionByPostId = async () => {
        try {
            const question = await axios.get(
              `${process.env.REACT_APP_base_url}/api/questions/${params.id}`
            );
            setQuestion(question.data.data);
        } catch (err) {
            console.log("problem", err);
        }
    }
    const answersByQuestionId = async () => {
        try {
            const answersRes = await axios.get(
              `${process.env.REACT_APP_base_url}/api/answer/${question?.question_id}`
            );
            setAnswers(answersRes.data.data);
        } catch (err) {
            console.log("problem", err);
        }
    }
    useEffect(() => {
        questionByPostId();
        answersByQuestionId();
    }, [question?.question_id]);
    return (
        <div className="container my-5">
            <div>
                <h3>Question</h3>
                <h5>
                    {question?.question}
                </h5>
                <p>
                    {question?.question_description}
                </p>
            </div>
            <hr />
            <div>
                {answers.length > 0 && <h3>Answer From The Community</h3>}
            </div>
            {answers.map(answer =>
                <div key={answer.answer_id}>
                    <Answer
                        answer={answer.answer}
                        userName={answer.user_name}
                    />
                </div>
            )}

            <AnswerQuestion
                questionId={question?.question_id}               
            />
        </div>
    )
}

export default SingleQuestion