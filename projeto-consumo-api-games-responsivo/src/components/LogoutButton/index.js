import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <li onClick={handleLogout}>
      <a href="#">Logout</a>
    </li>
  );
};

export default LogoutButton;
