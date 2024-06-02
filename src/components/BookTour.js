import React, { useState } from 'react';

const BookTour = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [booking, setBooking] = useState({
    touristId: 1,
    service: 'Hotel Room',
    date: '2024-05-12',
    time: '14:00',
    duration: '2 nights',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission logic
    console.log('Booking submitted:', booking);
  };

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="container-fluid p-0" style={{ minHeight: '100vh' }}>
      {/* Jumbotron */}
      <div
        className="container-fluid p-0"
        style={{
          backgroundImage: `url(${'https://c4.wallpaperflare.com/wallpaper/172/921/248/nature-water-sea-travel-wallpaper-preview.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div className="jumbotron" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}>
          <h1 className="display-4">Welcome to Our Tourism Website!</h1>
          <p className="lead">Discover the best tours and experiences curated just for you.</p>
          <hr className="my-4" />
          <p>Explore now and make unforgettable memories.</p>
        </div>
      </div>

    

      {/* Tour Cards */}
      <div className="container mt-5">
        <div className="row justify-content-around">
          {/* Tour Card 1 */}
          <div className="col-md-3 mb-2">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Tour 1" />
              <div className="card-body">
                <h5 className="card-title">Maldives</h5>
                <p className="card-text">Description of Tour 1 goes here.</p>
                <button onClick={handleBookNow} className="btn btn-primary btn-block">Book Now</button>
              </div>
            </div>
          </div>
          {/* Tour Card 2 */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <img src="https://pxwall.com/wp-content/uploads/2018/06/Wallpaper%20Infinity%20Pool,%208k,%204k%20wallpaper,%20La%20Digue,%20Praslin,%20Seychelles,%20palms,%20travel,%20tourism,%20Travel%20552288117-1024x576.jpg" className="card-img-top" alt="Tour 2" />
              <div className="card-body">
                <h5 className="card-title">Resort</h5>
                <p className="card-text">Description of Tour 2 goes here.</p>
                <button onClick={handleBookNow} className="btn btn-primary btn-block">Book Now</button>
              </div>
            </div>
          </div>
          {/* Tour Card 3 */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <img src="https://wallpapercrafter.com/desktop/42181-Maldives-Water-Villa-Best-Hotels-of-2015-tourism-travel-resort-vacation-Lux-bed-blue-booking.jpg" className="card-img-top" alt="Tour 3" />
              <div className="card-body">
                <h5 className="card-title">Dubai Villas</h5>
                <p className="card-text">Description of Tour 3 goes here.</p>
                <button onClick={handleBookNow} className="btn btn-primary btn-block">Book Now</button>
              </div>
            </div>
          </div>
          {/* Tour Card 4 */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <img src="https://c4.wallpaperflare.com/wallpaper/156/586/511/tower-city-tourist-attraction-tower-block-wallpaper-preview.jpg" className="card-img-top" alt="Tour 4" />
              <div className="card-body">
                <h5 className="card-title">UAE</h5>
                <p className="card-text">Description of Tour 4 goes here.</p>
                <button onClick={handleBookNow} className="btn btn-primary btn-block">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      {showBookingForm && (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center">Book a Tour</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Service</label>
                      <input
                        type="text"
                        className="form-control"
                        name="service"
                        value={booking.service}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={booking.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Time</label>
                      <input
                        type="time"
                        className="form-control"
                        name="time"
                        value={booking.time}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Duration</label>
                      <input
                        type="text"
                        className="form-control"
                        name="duration"
                        value={booking.duration}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Book Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTour;
