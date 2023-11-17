import CardComponent from "../Complete Album Card Component/CardComponent";
const Songs = ({ config }) => {
  return (
    <>
      <CardComponent
        details={{
          endpoint: config,
          category: "Songs",
        }}
      />
    </>
  );
};

export default Songs;
