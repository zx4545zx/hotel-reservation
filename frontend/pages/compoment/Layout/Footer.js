import Image from "next/image";
import MB2 from "../../public/MB2.jpg";

const Footer = () => {
  return (
    <footer className="footer p-3">
      <div className="content has-text-centered">
        <h1 className="is-size-4">FACILITIES AND SERVICES</h1>
        <p>
          Hotel Souvenir Shop: The one-stop location for gifts for friends and
          family, and other sundry items. Located in the hotel lobby.
        </p>
        <p>
          Resort Style Garden: Beautiful Foliage and manicured lawns – the
          perfect spot for picnics
        </p>
        <p>
          Petra Garden Ballroom: The magnificent Petra Garden Ballroom, a truly
          magical location for a wedding
        </p>
        <p>High Speed Wifi: Complimentary throughout the resort</p>
        <p>
          24-Hour Concierge Service: We don’t sleep so you can! From restaurant
          reservations, tickets to VIP events, arranging tours to recommending
          theatre and nightlife hotspots, we can assist you
        </p>
      </div>
      <div className="footer has-text-centered">
        <figure>
          <Image src={MB2} />
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
