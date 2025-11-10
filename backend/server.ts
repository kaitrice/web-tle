import dotenv from "dotenv"
import { normalize_data } from "./normalize.ts"

dotenv.config()

async function main() {
    normalize_data()
}

main()