import Emptylist from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import { fetchFavourites } from "@/utils/actions";

const FavouritesPage = async () => {
  const favourites = await fetchFavourites();

  if (favourites.length === 0) {
    return <Emptylist />;
  }

  return <PropertiesList properties={favourites} />;
};
export default FavouritesPage;
