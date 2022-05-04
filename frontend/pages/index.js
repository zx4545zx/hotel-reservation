import Image from "next/image";
import hotel from "./public/me2.jpeg";
import Mock from "./compoment/Mock";

export default function Home() {
  return (
    <div>
      <div class="card">
        <div class="card-image">
          <Image src={hotel} alt="hotel" />
        </div>
      </div>

      <section class="block card hero is-primary">
        <div class="hero-body">
          <p class="title">Hello World</p>
          <p class="subtitle">Second level</p>
        </div>
      </section>

      <Mock />
    </div>
  );
}
