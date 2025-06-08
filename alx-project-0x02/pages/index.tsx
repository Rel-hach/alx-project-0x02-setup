export default function Home() {
  return <h1>Welcome to the ALX Project</h1>;
}

export interface CardProps {
  title: string;
  content: string;
  className?: string;
}