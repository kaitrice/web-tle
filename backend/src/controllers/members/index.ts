import { fetch_members } from "../../services/members";
import { Member } from "../../types";

export default function normalize_data(): Member[] {
    const members: Member[] = fetch_members()
    return members;
}
