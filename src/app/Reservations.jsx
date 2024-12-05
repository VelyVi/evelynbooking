import { useEffect } from "react";
import useApiFetch from "../hooks/useApiFetch";
import ReservationsList from "../components/reservations/ReservationsList";

function Reservations() {
const [reservations,fetchReservations]=useApiFetch()

useEffect(()=>{
	fetchReservations({
		url:'/bookings'
	})
},[])

	return <div>
		<ReservationsList reservations={reservations}/>
		<pre>
			{JSON.stringify(reservations,null,2)}
			</pre>
			</div>;
}


export { Reservations };
