import { fetch_articles } from "../../services/articles";
import { Article } from "../../types";

export default function normalize_data(): Article[] {
    const articles: Article[] = fetch_articles()
    return articles;
}
