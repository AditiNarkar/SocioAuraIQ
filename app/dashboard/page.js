import { Header } from "@/components/Header";
import NavItem from "@/components/NavItem";

export default function Dashboard({ children }) {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <div className="w-[250px] bg-gray-800 bg-opacity-50 text-white p-4 fixed h-full backdrop-blur-lg shadow-lg">
          <ul>
            <NavItem label="Overview" icon="fas fa-home" />
            <NavItem label="Analytics" icon="fas fa-chart-bar" />
            <NavItem label="Settings" icon="fas fa-cog" />
            <NavItem label="Profile" icon="fas fa-user" />
            <NavItem label="Logout" icon="fas fa-sign-out-alt" />
          </ul>
        </div>
      </div>

      <div className="ml-1/4 w-3/4 p-4 overflow-y-auto">
        {children}
      </div>

    </>
  );
}
