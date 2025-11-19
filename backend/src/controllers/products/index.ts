import { fetch_products } from "../../services/products";
import { Product } from "../../types";

export default function normalize_data(): Product[] {
    const products: Product[] = fetch_products()
    return products;
}
