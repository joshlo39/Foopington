const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-slate-50">
      <div className="group h-96 w-96 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl translation-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={imageUrl}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black px-12 text-center text-slate-200">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
