import AdminSideBar from "../compoment/Layout/AdminSideBar";

const Dashboard = () => {
  return (
    <main className="container pt-5">
      <section className="block card hero is-success">
        <div className="hero-body">
          <p className="title">Admin</p>
          <p className="subtitle">Admin</p>
        </div>
      </section>

      <div className="tile is-ancestor pt-5">
        <AdminSideBar />

        <div className="tile is-parent px-6">
          <div className="tile is-child block">
            <p className="title">Admin</p>
            <p className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta
              orci, quis semper odio felis ut quam.
            </p>
            <p className="block">
              Suspendisse varius ligula in molestie lacinia. Maecenas varius
              eget ligula a sagittis. Pellentesque interdum, nisl nec interdum
              maximus, augue diam porttitor lorem, et sollicitudin felis neque
              sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus
              felis hendrerit sit amet. Aenean vitae gravida diam, finibus
              dignissim turpis. Sed eget varius ligula, at volutpat tortor.
            </p>
            <p className="block">
              Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus
              erat, vitae congue lectus dolor consequat libero. Donec leo
              ligula, maximus et pellentesque sed, gravida a metus. Cras
              ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis
              faucibus libero. Quisque non semper leo.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
