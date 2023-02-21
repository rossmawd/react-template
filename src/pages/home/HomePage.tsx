import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/about")}>About page</Button>
    </div>
  );
}
