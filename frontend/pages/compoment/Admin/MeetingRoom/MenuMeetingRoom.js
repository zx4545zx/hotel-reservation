import Link from "next/link";

const MenuMeetingRoom = () => {
  return (
    <div className="tabs">
      <ul>
        <li className="is-active">
          <Link href="/admin/meetingroom" passHref>
            <a>Meeting Rooms</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/meetingroom/equipments" passHref>
            <a>Equipments</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/meetingroom/service" passHref>
            <a>Service</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMeetingRoom;
