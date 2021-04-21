import React from "react";
import "./StatusPill.css";
import Text from "../../components/Text/Text";
import Colors from "../../assets/colors/Colors";

const StatusPill = ({ status }) => {
  return (
    <div
      className="pill"
      style={{
        backgroundColor: `${
          status == "Completed"
            ? Colors["pea-green"]
            : status == "Pending"
            ? Colors.primary
            : Colors.cancele
        }`,
      }}
    >
      <Text fontSize="10px" fontWeight="500">
        {status}
      </Text>
    </div>
  );
};

export default StatusPill;
