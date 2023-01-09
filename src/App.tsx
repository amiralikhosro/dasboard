import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";

const App = () => {
  const activeMenu = false;
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4 z-[1000]">
        <TooltipComponent content="Settings" position="TopRight">
          <button
            type="button"
            className="text-white text-3xl p-3 rounded-full hover:drop-shadow-xl hover:bg-light-gray"
            style={{ background: "blue" }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className="w-72 fixed sidebar bg-white dark:bg-secondary-dark-bg">
          Sidebar
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg"> Sidebar</div>
      )}
      <div
        className={`min-h-screen w-full bg-main-bg dark:bg-main-bg ${
          activeMenu ? "md:ml-72" : "flex-2"
        }`}
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          Navbar
        </div>
      </div>
      <div className="">
        <Routes>
          {/* Dashboard */}
          <Route path="/" element="ECommerce" />
          <Route path="/ecommerce" element="ECommerce" />

          {/* Pages */}
          <Route path="/orders" element="Orders" />
          <Route path="/employees" element="Employees" />
          <Route path="/customers" element="Customers" />

          {/* Apps */}
          <Route path="/kanban" element="Kanban" />
          <Route path="/editor" element="Editor" />
          <Route path="/calendar" element="Calendar" />
          <Route path="/color-picker" element="ColorPicker" />

          {/* Charts */}
          <Route path="/line" element="Line" />
          <Route path="/area" element="Area" />
          <Route path="/bar" element="Bar" />
          <Route path="/pie" element="Pie" />
          <Route path="/financial" element="Financial" />
          <Route path="/color-mapping" element="ColorMapping" />
          <Route path="/pyramid" element="Pyramid" />
          <Route path="/stacked" element="Stacked" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
