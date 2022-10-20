import React from 'react'

import '../styles/About.css'

const About = () => {
  return (
    <div className='aboutPage'>
      <div className='Entrance'>
      <h1>About</h1>
      <p>Some text about how cool we are</p>
      </div>
      <div className='Content'>
      <div className='Topic'>
        <h1>Who are we?</h1>
      </div>
      <div className='textstuff'>
        <div>
        <p>
        TexttexttextTexttexttextTexttexttextTexttexttextTexttexttextTexttexttext
        TexttexttextTexttexttextTexttexttextTexttexttextTexttexttextTexttexttext
        TexttexttextTexttexttextTexttexttextTexttexttextTexttexttextTexttexttext
        TexttexttextTexttexttextTexttexttextTexttexttextTexttexttextTexttexttext
        </p>
        </div>
      </div>
      </div>

      <div className='ContentRev'>
      <div className='textstuffRev'>
        <div>
        <p>
        TexttexttextTexttexttextTexttexttextTexttexttextTexttexttextTexttexttext
        TexttexttextTexttexttextTexttexttextTexttexttextTexttexttextTexttexttext
        TexttexttextTexttexttextTexttexttextTexttexttextTexttexttextTexttexttext
        TexttexttextTexttexttextTexttexttextTexttexttextTexttexttextTexttexttext
        </p>
        </div>
      </div>
      <div className='TopicRev'>
        <h1>What do we do?</h1>
      </div>
      </div>

    </div>
  )
}

export default About