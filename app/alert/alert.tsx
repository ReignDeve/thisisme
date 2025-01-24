import { Alert } from "@heroui/alert";

interface AppProps {
  title: string; 
  description: string; 
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  hideIcon?: boolean;
}

export default function App({ title, description, color, hideIcon }: AppProps) {
  return (
    <div className="flex items-center justify-center w-full z-50">
      <Alert description={description} title={title} color={color} hideIcon={hideIcon}/>
    </div>
  );
}