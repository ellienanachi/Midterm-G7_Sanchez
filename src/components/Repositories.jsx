import RepoCard from "./RepoCard";

function Repositories(){
    return(
        <main className="grid grid-cols-3 gap-8 px-20 pt-8">
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <RepoCard onClick={handleStarPortfolio} starCount={portfolioStars} />
        </div>
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <RepoCard onClick={handleStarTodo} starCount={todoStars} />
        </div>
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <RepoCard onClick={handleStarDotfiles} starCount={dotfilesStars}  />
        </div>
      </main>
    );
}

export default Repositories;