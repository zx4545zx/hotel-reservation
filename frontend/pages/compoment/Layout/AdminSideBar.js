import Link from "next/link";

const AdminSideBar = () => {
  return (
    <>
      <aside className="menu pt-3 mt-3 admin-sidebar">
        <Link href="/admin/booking" passHref>
          <a className="button is-primary is-flex is-justify-content-center">
            <strong>BOOK NOW</strong>
          </a>
        </Link>

        <p className="menu-label">General</p>
        <ul className="menu-list">
          <Link href="/admin/reservations" passHref>
            <a>Reservations</a>
          </Link>
          <li>
            <Link href="/admin/quotation" passHref>
            <a className="list-quotation">Quotations</a>
            </Link>
            <ul>
            <Link href="/admin/quotation/petition" passHref>
            <a>Petition</a>
            </Link>
            <Link href="/admin/quotation/statu" passHref>
            <a>Quotations Status</a>
            </Link>
            </ul>
          </li>
          <li>
            <Link href="/admin/customer" passHref>
              <a className="list-customer">Customers</a>
            </Link>
            <ul>
              <Link href="/admin/customer/booking_status" passHref>
                <a>Booking Status</a>
              </Link>
              <Link href="/admin/customer/payment_slip" passHref>
                <a>Payment Slip</a>
              </Link>
            </ul>
          </li>
          <Link href="/admin/bills" passHref>
            <a>Bills</a>
          </Link>
        </ul>
        <p className="menu-label">Management</p>
        <ul className="menu-list">
          <li>
            <Link href="/admin/meetingroom" passHref>
              <a className="list-meeting-room">Meeting Rooms</a>
            </Link>
            <ul>
              <Link href="/admin/meetingroom/equipments" passHref>
                <a>Equipments</a>
              </Link>
              <Link href="/admin/meetingroom/service" passHref>
                <a>Service</a>
              </Link>
              <Link href="/admin/meetingroom/status" passHref>
                <a>Status</a>
              </Link>
            </ul>
          </li>
          <li>
          <Link href="/admin/room" passHref>
          <a className="list-room">Rooms</a>
          </Link>
          <ul>
          <Link href="/admin/room/roomtype" passHref>
                <a>Roomtype</a>
              </Link>
              <Link href="/admin/room/bedtype" passHref>
                <a>Bedtype</a>
              </Link>
              <Link href="/admin/room/equipments" passHref>
                <a>Equipments</a>
              </Link>
              <Link href="/admin/room/service" passHref>
                <a>Service</a>
              </Link>
              <Link href="/admin/room/addonservice" passHref>
                <a>Add-on Service</a>
              </Link>
            </ul>
          </li>

          <Link href="/admin/package" passHref>
            <a>Packages</a>
          </Link>
        </ul>

        <p className="menu-label">Others</p>
        <ul className="menu-list">
          <li>
            <Link href="/admin/staff" passHref>
              <a>Staff</a>
            </Link>
            <ul>
              <Link href="/admin/staff/department" passHref>
                <a>Department</a>
              </Link>
              <Link href="/admin/staff/position" passHref>
                <a>Position</a>
              </Link>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default AdminSideBar;
