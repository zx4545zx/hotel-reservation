import { useState } from "react";
import Layout from "../compoment/Layout/Layout";

const PaymentSlip = () => {
  const [Bank, setBank] = useState("");
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  return (
    <Layout>
      <div className="title m-3 has-text-centered notification is-light">
        Payment Slip
      </div>

      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <div className="box">
            <div className="mt-6">
              <label className="label">Mobile Banking</label>
            </div>
            <div className="select is-danger is-fullwidth">
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
              <strong>Send Slip</strong>
              <div className="file has-name is-right is-fullwidth">
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    name="resume"
                    onChange={(e) => setName(e.target.files[0].name)}
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">Choose a file…</span>
                  </span>
                  <span className="file-name">{name}</span>
                </label>
              </div>
              <div className="column p-0 has-text-centered mt-6">
                <button
                  className="button is-success "
                  onClick={() => setModal(true)}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </Layout>
  );
};

export default PaymentSlip;
