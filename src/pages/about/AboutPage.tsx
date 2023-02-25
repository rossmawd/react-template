import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { incrementNavigationCount } from "../../store/navCount";

export default function AboutPage() {
  const dispatch = useDispatch();
  const navCount = useSelector((state: AppState) => state.navCount);

  const handleClick = () => {
    dispatch(incrementNavigationCount());
    navigate("/");
  };

  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={handleClick}>Home Page</Button>
      <div data-testid="counter">{navCount} navigation events</div>
    </div>
  );
}
