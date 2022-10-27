import React from 'react'

export default function About(props) {
    const myStyle = {
        color: props.mode==='light'?'black':'white',
        backgroundColor: props.mode==='light'?'white':'black'
    };
  return (
    <div className='container my-3' style={myStyle}>
    <h1>About Us</h1>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Analyze your Text
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          TextUtils gives you a way to analyze your text quickly and effectively, be it word count, character count or converting to different cases etc.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Free to Use
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
         Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. textUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Browser Compatible
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          This word counter works in any web browser such as Chrome, Edge, Safari, Firefox, Internet Explorer, Opera.
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
