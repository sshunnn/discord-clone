import { auth, db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import useCollection from "../../hooks/useCollection";

import "./Sidebar.scss";
import SidebarChannel from "./SidebarChannel";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { addDoc, collection } from "firebase/firestore";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  const { documents: channels } = useCollection("channels");

  const addChannel =async () => {
    let channelName = prompt("新しいチャンネルの作成");

    if (channelName) {
      await addDoc(collection(db, "channels"), {
        channelName: channelName,
      }); 
    }
  };

  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>華麗なる居酒屋</h4>
            </div>
            <AddIcon className="sidebarAddIcon" onClick={() => addChannel()} />
          </div>

          <div className="sidebarChannelList">
            {channels.map(({ id, channel }) => (
              <SidebarChannel
                key={id}
                id={id}
                channel={channel}
              />
            ))}
          </div>
        </div>

        <div className="sidebarFooter">
          <div className="sidebarAccount">
            <img
              src={user?.photoUrl ? user?.photoUrl : "./discordIcon.png"}
              alt=""
              onClick={() => auth.signOut()}
            />
            <div className="accountName">
              <h4>{user?.displayName}</h4>
              <span>#{user?.uid.slice(0, 4)}</span>
            </div>
          </div>
          <div className="sidebarVoice">
            <MicIcon />
            <HeadphonesIcon />
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
