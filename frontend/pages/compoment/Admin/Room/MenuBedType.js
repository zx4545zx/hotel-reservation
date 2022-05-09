import Link from "next/link";

const MenuBedType = () => {
  return (
    <div className="tabs is-fullwidth">
      <ul>
        <li>
          <Link href="/admin/room" passHref>
            <a>Rooms</a>
          </Link>
        </li>
        <li className="is-active">
          <Link href="/admin/room/bedtype" passHref>
            <a>Bed Type</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/room/equipments" passHref>
            <a>Equipments</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/room/service" passHref>
            <a>Service</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBedType;
