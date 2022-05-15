import AdminLayout from "../../compoment/Layout/AdminLayout";

const Position = () => {
  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Position
      </div>

      {/* <Modal modal={modal} setModal={setModal} /> */}

      <div className="is-flex is-justify-content-space-between is-align-items-flex-end">
        <h1 className="is-size-4">List</h1>
        <button
          className="button is-success mb-1 js-modal-trigger"
          onClick={() => setModal(true)}
        >
          Add New Staff
        </button>
      </div>

      <hr className="mb-3 mt-2" />

      {/* <ListTable /> */}
    </AdminLayout>
  );
};

export default Position;
