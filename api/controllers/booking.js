import  {db} from "../db.js";

export const buyTicket = (req, res) => {
    const tickets = req.body.tickets;

    const query = "INSERT INTO bookings (`session_id`, `user_id`, `seat_number`) VALUES ?";
    const values = tickets.map((ticket) => [
        parseInt(ticket.session_id),
        parseInt(ticket.user_id),
        parseInt(ticket.seat_number),
    ]);

    db.query(query, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("biletler alindi");
    });
};

    export const getTicket = (req, res) => {
        const query = "SELECT * FROM bookings"
        db.query(query, (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        })
    }

    export const myTicket = (req, res) => {
        const Id=req.params.id;
        const query = "SELECT * FROM myticket where user_id=?"
        db.query(query,Id, (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        })
    }


    export const deleteTicket =(req,res)=>{
        const ticketId=req.params.id;
        const q="DELETE FROM bookings where booking_id=?"
        db.query(q,[ticketId], (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        })}

    export const occSeat = (req, res) => {
        const Id=req.params.id;
        const query = "SELECT seat_number FROM bookings where session_id= ?"
        db.query(query, [Id],(err, data) => {
                if (err) return res.json(err);
                return res.json(data);
            })
        }