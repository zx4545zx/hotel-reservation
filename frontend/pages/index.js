import Image from "next/image";
import hotel from "./public/cover.jpeg";
import Content from "./compoment/Content";
import Layout from "./compoment/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="pt-5">
        <div className="block">
          <div className="card-image">
            <Image src={hotel} alt="hotel" />
          </div>
        </div>

        <main className="container is-max-widescreen">
          <section className="block card hero is-primary">
            <div className="hero-body">
              <h2 className="text-transform: uppercase;">MUT Hotel Group Co.,LTD</h2>
              <p className="ng-binding">Our accommodations are excellent for a trip with friends, family or as a couple</p>
            </div>
          </section>
          <Content />
        </main>
      </div>
    </Layout>
  );
}
