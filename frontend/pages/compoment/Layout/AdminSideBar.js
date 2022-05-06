const AdminSideBar = () => {
  return (
    <>
      <aside className="menu pt-5 admin-sidebar">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Role Acsses</a>
          </li>
        </ul>
        <p className="menu-label">Management</p>
        <ul className="menu-list">
          <li>
            <a>Meeting Rooms</a>
            <ul>
              <li>
                <a>Equipments</a>
              </li>
              <li>
                <a>Services</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Rooms</a>
            <ul>
              <li>
                <a>Equipments</a>
              </li>
              <li>
                <a>Services</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Packages</a>
          </li>
          <li>
            <a>Customers</a>
          </li>
          <li>
            <a>Reservations</a>
          </li>
          <li>
            <a>Quotations</a>
          </li>
        </ul>
        <p className="menu-label">Others</p>
        <ul className="menu-list">
          <li>
            <a>Bills Check</a>
          </li>
          <li>
            <a>Facilities</a>
          </li>
          <li>
            <a>Setting</a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default AdminSideBar;
