function RepoCard({
  name,
  description,
  language,
  commits,
  dotfilesStars = 0,
  onClick,
  starCount = 0,
  handleStarTodo,
  todoStars = 0,
  handleStarDotfiles,
}) {
    return (
      <>        
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{name}</h3>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={onClick}
            >
              ★ {starCount}
            </button>
          </div>
          <p className="mt-2 text-xl">{description}</p>
          <div className="mt-6 flex items-center gap-4 text-lg">
            <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
              {language}
            </span>
            <span>{commits} commits</span>
          </div>
        </div>
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">todo-api</h3>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarTodo}
            >
              ★ {todoStars}
            </button>
          </div>
          <p className="mt-2 text-xl">A small REST API for a to-do list.</p>
          <div className="mt-6 flex items-center gap-4 text-lg">
            <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
              Java
            </span>
            <span>31 commits</span>
          </div>
        </div>
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">dotfiles</h3>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarDotfiles}
            >
              ★ {dotfilesStars}
            </button>
          </div>
          <p className="mt-2 text-xl">My terminal and editor settings.</p>
          <div className="mt-6 flex items-center gap-4 text-lg">
            <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
              Shell
            </span>
            <span>12 commits</span>
          </div>
        </div>
        </>
    );
}

export default RepoCard;                    