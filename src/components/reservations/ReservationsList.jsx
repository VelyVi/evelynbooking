import React from 'react'
import ReservationCard from './ReservationCard'

function ReservationsList({reservations}) {
  return (
    <div>{reservations.map(reservation=>(
      <ReservationCard 
        key={reservation.id} 
        reservation={reservation}
        />
    ))}
    {reservations.length===0&&(
      <p>
      No reservation found.
    </p>)}
    
    </div>
  )
}

export default ReservationsList