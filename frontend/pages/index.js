import Image from "next/image";
import hotel from "./public/cover.jpeg";
import Content from "./compoment/Content";

export default function Home() {
  return (








    <div className="pt-5">
      <div className="block">
        <div className="card-image">
          <Image src={hotel} alt="hotel" />
        </div>
      </div>

      <main className="container is-max-widescreen">
        <section className="block card hero is-primary">
          <div className="hero-body">
            <p className="title">Hello World</p>
            <p className="subtitle">Second level</p>
          </div>
        </section>

        <Content />
      </main>
    </div>
  );
}
