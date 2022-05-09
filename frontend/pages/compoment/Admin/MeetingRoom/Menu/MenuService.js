import Link from "next/link";

const MenuService = () => {
  return (
    <div className="tabs is-fullwidth">
      <ul>
        <li>
          <Link href="/admin/meetingroom" passHref>
            <a>Meeting Rooms</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/meetingroom/equipments" passHref>
            <a>Equipments</a>
          </Link>
        </li>
        <li className="is-active">
          <Link href="/admin/meetingroom/service" passHref>
            <a>Service</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuService;
