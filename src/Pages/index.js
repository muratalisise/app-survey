import { hover } from '@testing-library/user-event/dist/hover';
import { isCursorAtStart } from '@testing-library/user-event/dist/utils';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from './Header';
import "./index.css";
import { Email, LineAxisOutlined } from '@mui/icons-material';
import { text } from '@fortawesome/fontawesome-svg-core';
import { appdata } from '../data/appdata';


const Index = () => {

    const [answers, setAnswers] = useState([]);

    useEffect(() => {

        const questions = appdata.sections.map(x => {
            return x.questions.map(x => {
                return x;
            });
        });
        // const a = {id:3}; // ilkel tiler value types belleğin stack bölümünde tutulurlar
        // a.id = "3"; // referans tipler belleğin heap. 
        // a = b ;
        // // a  121123   a.prop  121124 -- ilkel tip
        // //

        var mergedQuestions = [].concat.apply([], questions);

        setAnswers([...mergedQuestions.map(x => {
            return { id: x.question_id, value: "" };
        })]);

    }, [])


    const handleChange = (event, id) => {


        const obj = answers.find(x => x.id == id);

        obj.value = event.target.value;
        setAnswers([...answers]);



    }

    const handleSubmit = () => {
        console.log(answers);

    }
    console.log("Render edildi.", answers);
    return (

        <div className='body'>
            <div className="container" style={{ display: "flex", justifyContent: "center", marginLeft: "20px" }}>
                <div style={{ width: "400px", backgroundColor: "", height: "auto" }}>
                    <Header data={{ title: appdata.title, text: appdata.description }} />


                    <div className='mt-4' style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className="einput">
                            <i className="fa-solid fa-envelope"></i>
                            <input className='form-control inpt-eleman' type="email" name='email' id='email' placeholder='Email Giriniz' />
                        </div>
                        <div className='einput'>
                            <i className="fa-solid fa-user"></i>
                            <input className='form-control inpt-eleman' type="text" name='text' id='text' placeholder='Adınızı Giriniz' />
                        </div>
                    </div>




                    <div className='sectionbox'>
                        {appdata.sections.map((x) => {
                            return (
                                <>
                                    <h1 className='mt-4'>{x.title}</h1>
                                    <div className='questionsbox'>
                                        {x.questions.map((x, index) => {
                                            return (<>
                                                <div className='questionbox'>
                                                    {x.type == 'radio' &&
                                                        (
                                                            <>
                                                                <div className='question'>
                                                                    <span> Soru {index + 1} </span>
                                                                    <samp> {x.question} </samp>
                                                                </div>

                                                                <div className='ratingitems'>
                                                                    <div className='text text-end'>Katılmıyorum</div>
                                                                    <div className="items" onChange={(e) => handleChange(e, x.question_id)}>
                                                                        <input value={1} name={"radioeleman" + index} type="radio" />
                                                                        <span>1</span>
                                                                        <input value={2} name={"radioeleman" + index} type="radio" />
                                                                        <span>2</span>
                                                                        <input value={3} name={"radioeleman" + index} type="radio" />
                                                                        <span>3</span>
                                                                        <input value={4} name={"radioeleman" + index} type="radio" />
                                                                        <span>4</span>
                                                                        <input value={5} name={"radioeleman" + index} type="radio" />
                                                                        <span>5</span>
                                                                    </div>

                                                                    <div className='text'>Katılıyorum</div>
                                                                </div>
                                                                <div className='line'></div>
                                                            </>
                                                        )
                                                    }
                                                    {
                                                        x.type == 'text' &&
                                                        (<>
                                                            <textarea onChange={(e) => handleChange(e, x.question_id)} className='mt-4 mb-5' placeholder='Görüş ve önerileriniz' style=
                                                                {{
                                                                    width: "100%",
                                                                    height: "120px",
                                                                    borderRadius: "15px",
                                                                    float: "left",
                                                                    margin: "2px",
                                                                    padding: "15px",
                                                                }}
                                                            ></textarea><br />
                                                        </>
                                                        )
                                                    }

                                                </div>
                                            </>);
                                        })}

                                    </div>
                                </>
                            )
                        })}











                        <div className='buttonCard mx-auto'>
                            <button onClick={handleSubmit} style={{ marginBottom: "50%" }} className='button btn mt-3' type='submit'>GÖNDER</button>
                        </div>




                    </div>






                </div>
            </div>
        </div>
    )
}

export default Index;