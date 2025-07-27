import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Welcome to TaxiBooking — your reliable, affordable ride companion.
          We connect customers with top-quality drivers and ensure safe journeys!
        </p>
      </div>
    </>
  );
};

export default About;
