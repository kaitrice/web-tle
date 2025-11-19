import { fetchArticles } from "./articles";
import { fetchArtist } from "./artist";
import { fetchMembers } from "./members";
import { fetchProducts } from "./products";
import { fetchShows } from "./shows";

export const routes = [
    {
        endpoint: "artist",
        handler: fetchArtist
    },
    {
        endpoint: "shows",
        handler: fetchShows
    },
    {
        endpoint: "articles",
        handler: fetchArticles
    },
    {
        endpoint: "members",
        handler: fetchMembers
    },
    {
        endpoint: "products",
        handler: fetchProducts
    }
]