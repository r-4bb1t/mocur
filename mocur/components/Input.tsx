import { Dispatch, SetStateAction } from "react";
import { SearchIcon } from "./Icons";

export default function Input({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="shadow-shadow bg-white w-2/3 max-w-2xl rounded flex items-center p-4 gap-4 hov focus-within:bg-opacity-100">
      <SearchIcon color="black" />
      <input
        className="w-full bg-transparent outline-none placeholder:opacity-80"
        placeholder="커리큘럼이나 분야"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            /*  router.push(`/search?q=${search}`); */
          }
        }}
      />
    </div>
  );
}
