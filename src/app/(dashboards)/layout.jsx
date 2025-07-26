const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 min-h-screen text-gray-800">
      {/* Sidebar */}
      <aside className="col-span-3 bg-gray-100 p-4 space-y-2">
        <ul className="space-y-2">
          <li className="font-semibold">Home</li>
          <li className="font-semibold">About</li>
          <li className="font-semibold">Service</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="col-span-9 p-6 bg-white">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
