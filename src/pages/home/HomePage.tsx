import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { incrementNavigationCount } from "../../store/navCount";
import { AppState } from "../../store";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navCount = useSelector((state: AppState) => state.navCount);

  const handleClick = () => {
    dispatch(incrementNavigationCount());
    navigate("/about");
  };

  return (
    <div>
      <>
        <Button onClick={handleClick}>About page</Button>
        <div data-testid="counter">{navCount} navigation events</div>
      </>
    </div>
  );
}
