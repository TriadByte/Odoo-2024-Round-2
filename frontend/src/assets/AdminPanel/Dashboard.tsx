import AdminNav from "./AdminNav";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <>
      <AdminNav />
      <div className="container mt-5">
        <div className="d-flex justify-content-between aling-items-center w-100">
                <DashboardCard   totalBorrowedBooks={22} cardHead={"Total Requested Book"} />
                <DashboardCard  totalBorrowedBooks={22} cardHead={"Total Requested Book"} />
                <DashboardCard  totalBorrowedBooks={22} cardHead={"Total Requested Book"} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
