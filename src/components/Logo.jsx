import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`flex items-center shrink-0 ${className}`}>
<img src={logo} alt="DS Communication" className="h-20 w-auto sm:h-24 mt-3" />  </Link>
  );
}