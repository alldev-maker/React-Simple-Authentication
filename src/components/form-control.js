export const FormInput = (props) => {
  const { type = 'text', ...others } = props;
  return (
    <div>
      <input className="form-control" type={type} {...others} />
    </div>
  );
};
