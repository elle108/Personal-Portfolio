import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// About Me component displaying education, experience, skills, and hobbies
function About() {
  return (
    <div className="min-h-screen px-6 py-16 flex justify-center">
      <div className="w-full max-w-3xl space-y-8">

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">☁︎ About Me ☁︎</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Hi! I’m Elle! A computer science student who enjoys learning,
              problem solving, and furthering my coding capabilities. I like working
              through challenges and turning ideas into things that actually
              work.
            </p>
            <p>
              I'm currently pursuing my B.S. in Computer Science and starting 
              my M.S. in Data Science and Analytics next fall. I have experience in 
              cloud computing, backend development, and data analysis. I'm excited to 
              keep building my skills as I continue my education. Stay tuned!
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">☁︎ Education ☁︎</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-semibold">Grand Valley State University</p>
              <p>
                B.S. in Computer Science <br />
                Minor in Mathematics <br />
                Frederik Meijer Honors College
              </p>
            </div>
            <p>
              GPA: 3.84 / 4.0 <br /> Dean’s List (2023–2025)
            </p>
            <p>
              M.S. in Data Science & Analytics (starting Fall 2026)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">☁︎ Experience ☁︎</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold">Digital Platforms Intern — Twisthink</p>
              <p className="text-sm">May 2025 – August 2025 </p>
              <p>
                <br />At Twisthink, I worked on client and internal projects using
                Python, C#, Azure, and AWS. I contributed to backend APIs, cloud
                services, and internal tooling while working in an agile,
                cross functional team. <br /> <br />
                This experience helped me grow my skills as a developer and as a professional, 
                from participating in sprint planning and demos to being a part of 
                CultureLab and contributing to company culture.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
        <CardHeader>
            <CardTitle className="text-xl">☁︎ Skills ☁︎</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
            <div>
            <p className="font-semibold">Programming Languages</p>
            <p className="font-semibold text-sm">
                Python, C, C#, Java, R, SQL
            </p>
            <p>
                I have experience working across multiple programming languages through
                coursework, projects, and internships, with a strong focus on
                writing clean, readable, and maintainable code.
            </p>
            </div>

            <div>
            <p className="font-semibold">Tools & Technologies</p>
            <p className="font-semibold text-sm">
                Git, GitHub, AWS, Azure, Linux, Postman
            </p>
            <p>
                I am comfortable working in collaborative development environments using
                version control, cloud platforms, and developer tools to build, test, and
                deploy applications.
            </p>
            </div>

            <div>
            <p className="font-semibold">Data & Analytics</p>
            <p className="font-semibold text-sm">
                Data cleaning, visualization, analysis
            </p>
            <p>
                Through coursework and projects, I have worked with data to extract
                meaningful insights, create visualizations, and support data driven
                decision making.
            </p>
            </div>

            <div>
            <h2 className="font-semibold">Professional Skills</h2>
            <p className="font-semibold text-sm">
                Agile development, teamwork, communication, management
            </p>
            <p>
                I value collaboration and clear communication, and I have experience
                working in agile teams through sprint planning, stand-ups, demos, and
                cross functional collaboration.
            </p>
            </div>
        </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">☁︎ Outside of Code ☁︎</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Outside of school and work, I love creative and cozy hobbies. I enjoy
              snowboarding, making jewelry, building LEGO sets, and playing games like
              Animal Crossing, Pokémon, and Stardew Valley. I'm also a big Sanrio fan, 
              which inspired the theme of this site.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

export default About
