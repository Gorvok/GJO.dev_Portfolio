// HeroCard.jsx
import '../assets/css/heroCard.css';

function HeroCard() {
    const projects = [
      { name: "Project 1", description: "Description for project 1" },
      { name: "Project 2", description: "Description for project 2" },
      { name: "Project 3", description: "Description for project 3" },
      // add more projects if needed
    ];
  
    return (
      <div className="hero-card p-4 rounded-md shadow-md flex flex-col items-center space-y-4">
        {projects.map((project, index) => (
          <div key={index} 
               className="project p-1 bg-gray-950 rounded-lg shadow transition-shadow duration-200 flex flex-col justify-center items-center w-full hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500">
            <div className='inner bg-gray-950 w-full h-full '>
            <h3 className="text-xl font-semibold mb-2 text-center">{project.name}</h3>
            <p className="text-gray-700 text-center">{project.description}</p>
            </div>
          </div>
        ))}
        <button className="collab-btn text-sm py-2 px-5 bg-gradient-to-r from-green-500 to-sky-500 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500 transition duration-300 ease-in-out">
          Full Portfolio
        </button>
      </div>
    );
}

export default HeroCard;
