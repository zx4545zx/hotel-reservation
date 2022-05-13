import { useState } from "react";
import AdminLayout from "../../compoment/Layout/AdminLayout";

const quotationStatus = () => {
  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Quotation Status
      </div>
    </AdminLayout>
  );
};

export default quotationStatus;
