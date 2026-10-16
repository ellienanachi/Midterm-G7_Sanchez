import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";


function App() {
  const [followers, setFollowers] = useState(0);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  function handleFollow() {
    setFollowers((currentFollowers) => currentFollowers + 1);
  }

  function handleStarPortfolio() {

    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1]">
      <Navbar />

      <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
        <Profile followers={followers} onFollow={handleFollow} />
      </div>

      <Repositories
        portfolioStars={portfolioStars}
        onStarPortfolio={handleStarPortfolio}
        todoStars={todoStars}
        onStarTodo={handleStarTodo}
        dotfilesStars={dotfilesStars}
        onStarDotfiles={handleStarDotfiles}
      />

      <Footer />
    </div>
  );
}

export default App;
