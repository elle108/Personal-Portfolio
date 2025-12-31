import cinnamoroll from "../assets/cinnamorollBackground.jpg";

function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={cinnamoroll}
        alt="Cinnamoroll"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 flex flex-col h-screen text-left space-y-20 px-4">
        <h1 className="text-6xl font-bold" style={{ color: "#A29488" }}>
          ⋆. ☁︎ Hi! I'm Elle ☁︎˚⋆
        </h1>
        <h2 className="text-4xl font-semibold" style={{ color: "#A29488" }}>
          ☁︎ Computer Science Student <br />
          ☁︎ Experienced Cloud Developer <br />
          ☁︎ Women in Tech Advocate <br />
          ☁︎ Lifelong Learner <br /> <br />
          Welcome to my portfolio!
          
        </h2>
      </div>
    </div>
  );
}

export default Home;








