const FormHeader = ({ title, subtitle }) => {
  return (
    <div className="card-header">
      <img src="/logo.png" alt="Community Aid Hub logo" className="form-logo" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default FormHeader;
