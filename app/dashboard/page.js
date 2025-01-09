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
            <NavItem label="Engagement Metrics" icon="fas fa-chart-line" />
            <NavItem label="Audience Insights" icon="fas fa-users" />
            <NavItem label="Content Performance" icon="fas fa-clipboard" />
            <NavItem label="Trend Analysis" icon="fas fa-fire" />
            <NavItem label="Reach and Impressions" icon="fas fa-eye" />
            <NavItem label="Follower Growth" icon="fas fa-user-plus" />
            <NavItem label="Sentiment Analysis" icon="fas fa-smile" />
            <NavItem label="Recommendations" icon="fas fa-lightbulb" />
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
