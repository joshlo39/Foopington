import EntryCard from "./EntryCard"
import { Entry } from "../models/Entry"
const Collage = ({entries}) => {
    return (
        <div className = "w-full h-full relative grid grid-cols-4">
            {entries.map((entry)=>(
                <img src = {entry.imageUrl}></img>
            ))}
        </div>  
    )
}
export default Collage 

