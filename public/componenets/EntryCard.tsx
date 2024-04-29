import Link from "next/link";
const EntryCard = ({ entry }) => {
  const journalRef = `/journal/${entry.title}`;
  return (
    <div className="overflow-hidden shadow-xl border border-black rounded-lg bg-white backdrop-blur-md relative hover:scale-105 transition-transform duration-200 hover:shadow-2xl">
      <div className="flex justify-center"></div>
      <Link href={journalRef} key={entry.id}>
        <img src={entry.imageUrl} className="rounded-lg"></img>
        <div className="px-4 py-5 ">Year: {entry.title}</div>
        <div className="px-4 py-5 ">{entry.description}</div>
      </Link>
    </div>
  );
};

export default EntryCard;
