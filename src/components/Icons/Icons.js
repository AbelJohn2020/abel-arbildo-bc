import { FaEllipsisV, FaShoppingCart } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { IoIosWallet, IoIosPaperPlane, IoMdContacts } from "react-icons/io";
import { ImArrowDown } from "react-icons/im";

const iconSet = {
  dashBoard: BsFillGrid3X3GapFill,
  ellipsis: FaEllipsisV,
  coin: BsCoin,
  wallet: IoIosWallet,
  paperPlane: IoIosPaperPlane,
  contacts: IoMdContacts,
  receive: ImArrowDown,
  shop: FaShoppingCart,
};

const Icons = ({ type, size, color }) => {
  const ComponentToRender = iconSet[type];
  return (
    <div>
      { type &&
        <ComponentToRender
            size={size} 
            color={color}
        />
      }
    </div>
   
  );
};

export default Icons;