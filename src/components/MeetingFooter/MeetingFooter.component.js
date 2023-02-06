import React, { useEffect, useState  } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faVideo,
  // faDesktop,
  faVideoSlash,
  faMicrophoneSlash,
  faPhoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import "./MeetingFooter.css";
const MeetingFooter = (props) => {
  const [streamState, setStreamState] = useState({
    mic: true,
    video: false,
    screen: false,
  });
  const micClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        mic: !currentState.mic,
      };
    });
  };

  const onVideoClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        video: !currentState.video,
      };
    });
  };
  // const peerConnectionRef = useRef(null);

  // useEffect(() => {
  //   const pc = new RTCPeerConnection();
  //   peerConnectionRef.current = pc;
  // }, []);

  // const hangup = () => {
  //   peerConnectionRef.current.close();
  //   console.log("Closed clicked")
  // };
  const hangup = () => {
    // const peerConnection = new RTCPeerConnection(); // get reference to the peer connection object
    // peerConnection.close();
    setStreamState('ended');

    // firebase.database().ref('call/status').set('ended');
    
  };

  // const onScreenClick = () => {
  //   props.onScreenClick(setScreenState);
  // };

  // const setScreenState = (isEnabled) => {
  //   setStreamState((currentState) => {
  //     return {
  //       ...currentState,
  //       screen: isEnabled,
  //     };
  //   });
  // };
  useEffect(() => {
    props.onMicClick(streamState.mic);
  }, [streamState.mic]);
  useEffect(() => {
    props.onVideoClick(streamState.video);
  }, [streamState.video]);

  return (
    <div className="meeting-footer">
      <div
        className={"meeting-icons " + (!streamState.mic ? "active" : "")}
        data-tip={streamState.mic ? "Mute Audio" : "Unmute Audio"}
        onClick={micClick}
      >
        <FontAwesomeIcon
          icon={!streamState.mic ? faMicrophoneSlash : faMicrophone}
          title="Mute"
        />
      </div>
      <div
        className={"meeting-icons " + (!streamState.video ? "active" : "")}
        data-tip={streamState.video ? "Hide Video" : "Show Video"}
        onClick={onVideoClick}
      >
        <FontAwesomeIcon icon={!streamState.video ? faVideoSlash : faVideo} />
      </div>
      <div
        className="meeting-icons active"
        data-tip="End Call"
        onClick={hangup}
      >
        
        <FontAwesomeIcon icon={faPhoneSlash} />
      </div>
      <ReactTooltip />
    </div>
  );
};

export default MeetingFooter;
