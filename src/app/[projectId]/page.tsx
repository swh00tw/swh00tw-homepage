import projects from "@/app/[projectId]/projects";

export async function generateStaticParams() {
  const paths = Object.keys(projects).map((id) => ({
    projectId: id,
  }));
  return paths;
}

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function Page(props: ProjectPageProps) {
  const { params } = props;
  const { projectId } = params;
  const project = projects[projectId];
  return <div className="h-[100svh] flex justify-center items-center">123</div>;
}
