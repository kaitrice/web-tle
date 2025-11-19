import { handleArticles } from "./articles";
import { handleArtist } from "./artist";
import { handleMembers } from "./members";
import { handleProducts } from "./products";
import { handleShows } from "./shows";

enum Methods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

export const routes = [
    {
        endpoint: "artist",
        methods: [ Methods.GET ],
        handler: handleArtist
    },
    {
        endpoint: "shows",
        methods: [ Methods.GET ],
        handler: handleShows
    },
    {
        endpoint: "articles",
        methods: [ Methods.GET ],
        handler: handleArticles
    },
    {
        endpoint: "members",
        methods: [ Methods.GET ],
        handler: handleMembers
    },
    {
        endpoint: "products",
        methods: [ Methods.GET ],
        handler: handleProducts
    }
]