import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tours) => {
          return (
            <Tour key={tours.id} {...tours} removeTour={removeTour}></Tour>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
