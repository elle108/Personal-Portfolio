import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function ProjectCard({ title, description, tech, link }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm">{description}</p>

        <p className="text-sm">
          Tech Stack: <span>{tech}</span>
        </p>

        {link && (
          <Button onClick={() => window.open(link, "_blank")}>
            View Project
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

function Projects() {
  return (
    <div className="min-h-screen px-6 py-16 flex justify-center">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-3xl font-bold text-center">☁︎ Projects ☁︎</h1>

        <div className="w-full max-w-3xl space-y-8">

          <ProjectCard
            title="Math-eroids"
            description="An educational game inspired by Asteroids, designed to help players practice basic math through gameplay. I served as project manager and helped implement core game mechanics."
            tech="Lua, LÖVE2D"
            link="https://github.com/elle108/gvsu-cis350-team1.git"
          />

          <ProjectCard
            title="FTP Client"
            description="A fully functional FTP client built from scratch following RFC-959 standards, including file transfers, directory navigation, and concurrent connections."
            tech="Python, Sockets, Multithreading"
            link="https://github.com/elle108/CIS-457-Simple-FTP-Client.git"
          />

           <ProjectCard
            title="Income and Inflation Analysis"
            description="A data analysis project examining income trends and inflation rates in Michigan over the past decade using R libraries for data manipulation and visualization."
            tech="R, ggplot2, dplyr"
            link="https://github.com/elle108/STA418-FinalProject.git"
          />

           <ProjectCard
            title="TBOT"
            description="An internal time and project tracking tool built during my internship at Twisthink. I worked on backend services, APIs, and cloud based features as part of an agile team."
            tech="C#, Azure, REST APIs"
          />

           <ProjectCard
            title="Client Web App"
            description="A client web application built during my internship at Twisthink. I worked on backend features, user authentication, and cloud hosting, presenting my work to stakeholders."
            tech="Python, AWS"
          />

        </div>
      </div>
    </div>
  )
}

export default Projects
