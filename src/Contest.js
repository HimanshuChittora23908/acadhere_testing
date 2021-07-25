import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Contest = () => {
  const [contest, setContest] = useState(null)

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    axios.get("https://backend-clg-app.herokuapp.com/cp_reminder/")
    .then((data) => {
          setContest(data.data)
        })
}

  return (
    <div>
      {contest ? contest.map((item,ind) => 
      <div key={ind}>
        <h2>{item.event_name}</h2>
        <h4>{new Date(`${item.start_time}`).toTimeString()}</h4>
        <h4>{new Date(0).setSeconds(`${item.duration}`).toISOString().substr(11,8)}</h4>
        </div>
      ) : null}
    </div>
  )
}

export default Contest;

