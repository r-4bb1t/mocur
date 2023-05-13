export default function Sidebar() {
  return (
    <div className="w-1/5 bg-white h-full rounded-tr-lg shadow-shadow p-8 shrink-0 z-10">
      <input
        className="font-bold text-xl input input-bordered w-full input-sm"
        placeholder="커리큘럼 제목"
      />
      <textarea
        className="mt-2 h-32 text-sm textarea textarea-bordered w-full input-sm resize-none"
        placeholder="커리큘럼 설명"
      />
    </div>
  );
}
