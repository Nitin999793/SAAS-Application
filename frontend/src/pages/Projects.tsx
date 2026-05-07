import { useEffect, useState } from "react";
import api from "../api/axios";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    api
      .get("/projects", {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
      .then((res) => setProjects(res.data));
  }, []);

  return (
    <div>
      <h1>Projects</h1>

      {projects.map((project) => (
        <ProjectCard key={project._id} title={project.title} />
      ))}
    </div>
  );
}