import dotenv from "dotenv"
import { normalize_data } from "./normalize"

dotenv.config()

async function main() {
    const data = await normalize_data()
    console.log(JSON.stringify(data, null, 2))
}

main()