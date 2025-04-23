import "./Form.scss";

export default function Form() {
  return (
    <form className="form-container">
      <div className="form-content">
        <div className="input-group">
          <input placeholder="Name" />
          <input placeholder="Email" />
        </div>
        <input placeholder="Phone" />
        <input placeholder="Address" />
        <textarea placeholder="Message" />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
