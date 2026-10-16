    import { useState } from "react";
import RepoCard from "./RepoCard";

function Repositories(){
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  const handleStarPortfolio = () => setPortfolioStars((stars) => stars + 1);
  const handleStarTodo = () => setTodoStars((stars) => stars + 1);
  const handleStarDotfiles = () => setDotfilesStars((stars) => stars + 1);

    return(
        <main className="grid grid-cols-3 gap-8 px-20 pt-8">
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <RepoCard 
            name="portfolio" 
            description="My personal page built with React." 
            language="JavaScript" 
            commits="48" 
            onClick={handleStarPortfolio} 
            starCount={portfolioStars} 
          />
        </div>
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <RepoCard 
            name="todo-api" 
            description="A small REST API for a to-do list." 
            language="Java" 
            commits="31" 
            onClick={handleStarTodo} 
            starCount={todoStars} 
          />
        </div>
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <RepoCard onClick={handleStarDotfiles} starCount={dotfilesStars}  />
        </div>
      </main>
    );
}

export default Repositories;