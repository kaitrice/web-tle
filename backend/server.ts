import dotenv from "dotenv"
import { normalize_data } from "./normalize"

dotenv.config()

async function main() {
    normalize_data()
}

main()