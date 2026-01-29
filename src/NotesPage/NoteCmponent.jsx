const NoteCmponent = ({
  Notes,
  Deletenotes,
  Editnotes,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="md:w-1/2 w-full">
      <div className="h-[600px]  w-full md:w-full bg-blue-200 shadow-lg shadow-black/30 p-4 flex flex-col gap-4 rounded-xl overflow-y-auto">
        <input
          className=" w-full  bg-gray-50 p-4 outline-none rounded-xl text-lg"
          type="text"
          placeholder="🔍 Search notes by title or content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="md:grid h-full  w-full md:h-full  md:grid-cols-1 grid grid-col-2 md:overflow-y-auto  gap-2 place-items-center ">
          {Notes.length === 0 ? (
            <h1 className="text-2xl font-mono text-black/50">No Notes Added</h1>
          ) : (
            Notes.map((note, idx) => {
              return note.heading === "" && note.content === "" ? (
                <div
                  key={idx}
                  className="h-[200px] relative  w-full bg-blue-400 p-4  rounded-xl flex flex-col gap-4 justify-center items-center"
                >
                  <button
                    className="absolute bg-black p-1 rounded-full animate-pulse top-2 right-3"
                    onClick={() => {
                      Deletenotes(idx);
                    }}
                  >
                    ❌
                  </button>
                  <h1 className="text-white" key={idx}>
                    Notes are Empty
                  </h1>
                </div>
              ) : (
                <div
                  key={idx}
                  className=" overflow-scroll scroll-smooth relative bg-blue-400 h-[500px] p-4 rounded-xl flex flex-col gap-4 w-full "
                >
                  <button
                    className="absolute top-2 bg-black p-1 rounded-full animate-pulse right-3"
                    onClick={() => {
                      Deletenotes(idx);
                    }}
                  >
                    ❌
                  </button>
                  <button
                    className="absolute bottom-2 bg-black p-1 rounded-full animate-pulse right-3"
                    onClick={() => {
                      Editnotes(idx);
                    }}
                  >
                    ✏️
                  </button>
                  <h1 className="text-2xl font-bold">Notes Title : </h1>
                  <h1 className="text-white bg-blue-950 w-fit px-3 py-2 rounded-xl">
                    {note.heading.toUpperCase()}
                  </h1>
                  <h1 className="text-2xl font-bold">Notes Content : </h1>
                  <div className="overflow-scroll p-3 rounded-2xl bg-blue-800">
                    <h1 className="text-white">{note.content}</h1>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteCmponent;
