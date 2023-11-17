import CardComponent from "../Complete Album Card Component/CardComponent";
const TopAlbum = ({ config }) => {
  return (
    <>
      <CardComponent
        details={{
          endpoint: config,
          category: "Top Albums",
        }}
      />{" "}
    </>
  );
};

export default TopAlbum;
