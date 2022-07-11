export const ButtonPurple = (props) => {
  const { children, ...others } = props;

  return (
    <button className="btn btn-purple" {...others}>
      {children}
    </button>
  );
};
