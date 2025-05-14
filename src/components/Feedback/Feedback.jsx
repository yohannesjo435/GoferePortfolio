import React from 'react'
export default function Feedback() {
  return (
    <div className='feedback-wrapper' id='talkToAnExpert'>
      <h6>FeedBack</h6>
      <h1>
        Seeking personailezed <br />
        support? <span>Request a call <br />
        from our team
        </span>
      </h1>
      <form action={""}>
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input name="name" type="text" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="phoneNumber">Phone number</label>
          <input name="phoneNumber" type="text" />
        </div>
        <button className='feedback-submit'>Send a request</button>
      </form>
    </div>
  )
}
