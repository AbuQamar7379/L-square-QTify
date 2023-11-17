import CardComponent from "../Complete Album Card Component/CardComponent";
const NewAlbum = ({ config }) => {
  return (
    <>
      <CardComponent
        details={{
          endpoint: config,
          category: "New Albums",
        }}
      />{" "}
    </>
  );
};

export default NewAlbum;
