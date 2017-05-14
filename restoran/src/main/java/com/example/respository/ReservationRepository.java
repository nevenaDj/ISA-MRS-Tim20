
package com.example.respository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domain.Guest;
import com.example.domain.Reservation;
import com.example.domain.TableReservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

	@Query("SELECT Object(r) FROM Reservation r WHERE r.restaurant.id = ?1")
	public Collection<Reservation> getAllReservationOfRestaurant(Long id);

	@Query("SELECT Object(t) FROM Reservation r, TableReservation t WHERE t.reservation.id = r.id AND r.restaurant.id = ?1 AND "
			+ "((r.startTime>=?2 AND r.startTime < ?3) OR (r.endTime > ?2 AND r.endTime <= ?3))")
	public Collection<TableReservation> getAllReservationTable(Long id, String dateStart, String dateEnd);

	@Query("SELECT Object(r) FROM Reservation r, GuestReservation g WHERE r.id = g.reservation.id AND g.guest.id = ?1")
	public Collection<Reservation> getVisitedRestaurant(Long id);

	@Query("SELECT Object(r) FROM Reservation r, GuestReservation g WHERE r.id = g.reservation.id AND g.id = ?1")
	public Reservation getReservationGuest(Long id);

	@Query("SELECT Object(g) FROM Reservation r, GuestReservation gr, Guest g WHERE r.id = gr.reservation.id AND g.id = gr.guest.id"
			+ " AND g.id != ?2 AND r.id = ?1")
	public Collection<Guest> getGuestOfReservation(Long id, Long idGuest);

	@Query("SELECT Object(g) FROM GuestReservation gr, Guest g WHERE g.id = gr.guest.id" + " AND gr.id = ?1")
	public Guest getGuestO(Long id);

}
