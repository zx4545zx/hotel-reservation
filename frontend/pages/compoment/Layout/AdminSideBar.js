import Link from "next/link";

const AdminSideBar = () => {
  return (
    <>
      <aside className="menu pt-3 mt-3 admin-sidebar box">
        <a className="button is-primary is-flex is-justify-content-center">
          <strong>BOOK NOW</strong>
        </a>

        <p className="menu-label">General</p>
        <ul className="menu-list">
          <Link href="/admin" passHref>
            <a>Reservations</a>
          </Link>
          <Link href="/admin/quotation" passHref>
            <a>Quotations</a>
          </Link>
          <Link href="/admin/customer" passHref>
            <a>Customers</a>
          </Link>
          <Link href="/admin/bills" passHref>
            <a>Bills</a>
          </Link>
        </ul>

        <p className="menu-label">Management</p>
        <ul className="menu-list">
          <Link href="/admin/meetingroom" passHref>
            <a>Meeting Rooms</a>
          </Link>
          <Link href="/admin/room" passHref>
            <a>Rooms</a>
          </Link>
          <Link href="/admin/package" passHref>
            <a>Packages</a>
          </Link>
        </ul>

        <p className="menu-label">Others</p>
        <ul className="menu-list">
          <Link href="/admin/role" passHref>
            <a>Role Acsses</a>
          </Link>
          <Link href="/admin/staff" passHref>
            <a>Staff</a>
          </Link>

          <Link href="/admin/setting" passHref>
            <a>Setting</a>
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default AdminSideBar;
