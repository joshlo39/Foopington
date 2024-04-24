import EntryCard from "../../../public/componenets/EntryCard";
import {entries,Entry} from  "../../../public/models/Entry"

const journalPage = () => {
    return (
        <div className="p-10">
            <div className="p-4 grid grid-cols-3 gap-10">
                {entries.map((entry) => (
                    <EntryCard entry={entry} key={ entry.id} />
                ))}
            </div>
        </div>
    )
}
export default journalPage;
