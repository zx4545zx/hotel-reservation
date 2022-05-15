import { useState } from "react";
import AdminLayout from "../../compoment/Layout/AdminLayout";

const PaymentSlip = () => {
  const [Bank, setBank] = useState("");
  const [modal, setModal] = useState(false);

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Payment Slip
      </div>

      <h1 className="is-size-4">Payment Method</h1>
      <div className="mt-6">
        <label class="label">Mobile Banking</label>
      </div>
      <div class="select is-danger">
        <select value={Bank} onChange={(e) => setBank(e.target.value)}>
          <option>Select Banking</option>
          <option value={"s"}>SCB</option>
          <option value={"k"}>KBank</option>
        </select>
      </div>

      {Bank === "s" ? (
        <div className="Scb mt-6">
          <h2>เลขที่บัญชี : 111 111 1111</h2>
          <p>ชื่อบัญชี : กกกกกกกกกกก กกกกกกกกกกก</p>
        </div>
      ) : Bank === "k" ? (
        <div className="Kbank mt-6">
          <h2>เลขที่บัญชี : 222 222 2222</h2>
          <p>ชื่อบัญชี : กกกกกกกกกกก กกกกกกกกกกก</p>
        </div>
      ) : (
        ""
      )}

      <div className="mt-6">
        <h2>ส่งหลักฐานการโอนเงิน</h2>
        <div class="file has-name is-right is-fullwidth">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">Choose a file…</span>
            </span>
            <span class="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
        </div>
        <div class="column p-0 has-text-centered mt-6">
          <button
            class="button is-success is-rounded "
            onClick={() => setModal(true)}
          >
            ยืนยัน
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PaymentSlip;
