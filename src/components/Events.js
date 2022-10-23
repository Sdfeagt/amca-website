import React, {useEffect} from 'react'

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>Events</div>
  )
}

export default Events