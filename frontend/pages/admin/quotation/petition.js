import AdminLayout from "../../compoment/Layout/AdminLayout";

const Petition = () => {
  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Petition
      </div>
      <hr />
      <div>
        <div className="block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper
          diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat
          tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo
          sit amet vehicula eleifend, nunc dui porta orci, quis semper odio
          felis ut quam.
        </div>
        <div className="block">
          Suspendisse varius ligula in molestie lacinia. Maecenas varius eget
          ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus,
          augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.
          Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit
          amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget
          varius ligula, at volutpat tortor.
        </div>
        <div className="block">
          Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus
          erat, vitae congue lectus dolor consequat libero. Donec leo ligula,
          maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc
          ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non
          semper leo.
        </div>
      </div>
    </AdminLayout>
  );
};

export default Petition;
