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
          <RepoCard 
            name="portfolio" 
            description="My personal page built with React." 
            language="JavaScript" 
            commits="48" 
            onClick={handleStarPortfolio} 
            starCount={portfolioStars} 
          />
          <RepoCard 
            name="todo-api" 
            description="A small REST API for a to-do list." 
            language="Java" 
            commits="31" 
            onClick={handleStarTodo} 
            starCount={todoStars} 
          />
          <RepoCard
            name="dotfiles"
            description="My terminal and editor settings."
            language="Shell"
            commits="12"
            onClick={handleStarDotfiles}
            starCount={dotfilesStars}
          />
      </main>
    );
}

export default Repositories;