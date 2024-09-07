import { useEffect, useState } from "react";
import FavouriteSingleCard from "../../components/Favourites/FavouriteSingleCard";

function Favourite() {
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [noData, setNoData] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getFavouriteItems = JSON.parse(localStorage.getItem("favourites"));

    if (getFavouriteItems) {
      setFavouriteItems(getFavouriteItems);

      const totalPrice = getFavouriteItems.reduce(
        (prevValue, currentValue) => prevValue + currentValue.price,
        0
      );
      setPrice(totalPrice);
    } else {
      setNoData("No Data Found!");
    }
  }, []);

  const handleDeleteFavItem = () => {
    localStorage.clear();
    setFavouriteItems([]);
    setNoData("No Data Found!");
    setPrice(0);
  };

  return (
    <div className="pt-5 pb-10">
      <div className="grid grid-cols-3 justify-between py-10">
        <h3 className="text-2xl font-bold">Favourite items</h3>
        <p className="text-center text-xl">Price: ${price}</p>
        <div className="text-right">
          {favouriteItems.length > 0 && (
            <button
              onClick={handleDeleteFavItem}
              className="btn bg-red-500 text-white"
            >
              Delete all
            </button>
          )}
        </div>
      </div>

      {noData ? (
        <p className="flex items-center justify-center text-3xl h-[70vh]">
          {noData}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {isShow
            ? favouriteItems?.map((data) => (
                <FavouriteSingleCard
                  key={data.id}
                  data={data}
                ></FavouriteSingleCard>
              ))
            : favouriteItems
                ?.slice(0, 3)
                .map((data) => (
                  <FavouriteSingleCard
                    key={data.id}
                    data={data}
                  ></FavouriteSingleCard>
                ))}
        </div>
      )}

      {favouriteItems.length > 2 && (
        <div className="text-center my-10">
          <button onClick={() => setIsShow(!isShow)} className="btn">
            {isShow ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Favourite;
