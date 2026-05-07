import Project from "../models/Project";

export const getProjects = async (req: any, res: any) => {
  const projects = await Project.find({ userId: req.user.id });
  res.json(projects);
};

export const createProject = async (req: any, res: any) => {
  const project = await Project.create({
    title: req.body.title,
    description: req.body.description,
    userId: req.user.id
  });

  res.json(project);
};