import Image from "next/image";
import A from "../public/deluxe_room.jpg";
import B from "../public/premier_suites.jpg";
import C from "../public/divalux_jacuzzi.jpg";
import D from "../public/service1.jpg";
import E from "../public/G.png";
import F from "../public/BB.jpg";

const Content = () => {
  return (
    <div className="content">
      <h1 className="has-text-centered">MUT HOTEL</h1>
      <p>
        Renowned for consistent quality and prime locations in the Bangkok
        Metropolitan surrounded by popular provincial top destinations, MUT
        Hotel Rama 8 has to offer. With standardized facilities across with high
        level of cleanliness, professional service from friendly staff, free
        high-speed internet, Digital TV, amenities, air conditioning,
        comfortable bed and great shower to ensure a peaceful and relax stay
        while in Bangkok.
      </p>
      <h2 className="has-text-centered">ACCOMMODATION</h2>
      <h5>Deluxe Room</h5>
      <p>
        With a rustic charm and natural hues, the Deluxe Rooms at the Divalux
        Resort & Spa provides the perfect contrast to Bangkok’s bustling charm.
        Enjoy your favourite book at the window seats, or rejuvenate after
      </p>
      <figure>
        <Image src={A} />
        <figcaption>Deluxe Room</figcaption>
      </figure>
      <h5>Premier Suites</h5>
      <p>
        Witness the manifestation of luxury and exclusivity with the Premier
        Suites – there are only four! Experience top-
      </p>
      <figure>
        <Image src={B} />
        <figcaption>Premier Suites</figcaption>
      </figure>
      <h5>Divalux Jacuzzi Suite</h5>
      <p>
        Satisfy your side with the Divalux Suite, an oasis in the middle of the
        bustling city – it’s the only one at the Divalux Resort & Spa! Get
        enchanted with the contemporary interiors, combined with its large size
        and
      </p>
      <figure>
        <Image src={C} />
        <figcaption>Divalux Jacuzzi Suite</figcaption>
      </figure>
      <h2 className="has-text-centered">EVENT ROOM</h2>
      <p>
        Our private and fully equipped meeting and function rooms provide a high
        class, modern business environment to meet all your business needs. meet
        your partner or meet your business in our meeting room with facilities
        in a prime location
      </p>
      <figure>
        <Image src={F} />
        <figcaption>EVENT ROOM</figcaption>
      </figure>
      <h2 className="has-text-centered">SERVICE US</h2>
      <p>
        Guests can also enjoy the delicacy of many local street foods at Indy
        Night Market or Maharaj Pier to savor local specialties or go to the
        night walking street at the famous Khaosan road. Come and enjoy superior
        modem hotel at great connectivity with local touch.
      </p>
      <figure>
        <div class="columns">
          <div class="column">
            <Image src={D} />
          </div>
          <div class="column"><Image src={E} /></div>
        </div>
        <figcaption>SERVICE US</figcaption>
      </figure>
    </div>
  );
};

export default Content;
