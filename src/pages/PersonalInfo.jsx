
import { useState } from "react";
import { useLocation } from "react-router-dom";

const PersonalInfo = () => {

  const location = useLocation();

  const totalprice = Number(location.state?.totalPrice ?? 0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: ""
  });

  const [method, setMethod] = useState("Delivery");

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (method === "Delivery") {
      alert("Order is on the way");
    } else {
      alert("You can take your order after 15 min");
    }
  };

  return (
    <section className="page-section narrow-section">

      <div className="page-heading left-heading">
        <span className="eyebrow">ONE LAST THING</span>

        <h1>
          Let's make it <em>yours.</em>
        </h1>

        <p>Tell us where to bring your order.</p>
      </div>

      <div className="checkout-layout">

        <form className="form-card" onSubmit={submit}>

          <h2>Your details</h2>

          <label>
            Full name

            <input
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Phone number

            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={update}
              placeholder="+961 ..."
              required
            />
          </label>

          <div className="form-label">
            How would you like your order?
          </div>

          <div className="choice-row">

            <input
              type="radio"
              id="del"
              name="order-type"
              value="Delivery"
              checked={method === "Delivery"}
              onChange={(e) => setMethod(e.target.value)}
            />

            <label htmlFor="del">Delivery</label>

            <input
              type="radio"
              id="take"
              name="order-type"
              value="Take Away"
              checked={method === "Take Away"}
              onChange={(e) => setMethod(e.target.value)}
            />

            <label htmlFor="take">Take away</label>

          </div>

          {method === "Delivery" && (
            <label>
              Delivery address

              <textarea
                name="address"
                value={form.address}
                onChange={update}
                placeholder="Street, area, building..."
                rows="3"
                required
              />
            </label>
          )}

          <label>
            Order note <span className="optional">(optional)</span>

            <textarea
              name="notes"
              value={form.notes}
              onChange={update}
              placeholder="Anything we should know?"
              rows="2"
            />
          </label>

          <button
            type="submit"
            className="button button-dark full-button"
          >
            Confirm {method} order ↗
          </button>

        </form>

        <aside className="order-summary">

          <span className="eyebrow">YOUR ORDER</span>

          <div className="summary-total">
            <span>Total</span>
            <b>${totalprice.toFixed(2)}</b>
          </div>

          <p className="small-note">
            Payment is arranged when your order arrives
          </p>

        </aside>

      </div>

    </section>
  );
};

export default PersonalInfo;
