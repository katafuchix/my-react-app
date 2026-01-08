const Content = (props) => {
  const { id, title, description } = props;
  return (
    <>
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
    </>
  );
};

export default Content;
