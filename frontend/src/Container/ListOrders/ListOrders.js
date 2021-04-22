import React from "react";
import StatusPill from "../../components/StatusPill/StatusPill";
import DropdownMenuItem from "../../Container/DropdownMenuItem/DropdownMenuItem";
import Text from "../../components/Text/Text";
import ColorBtn from "../../components/ColorBtn/ColorBtn";
import Colors from "../../assets/colors/Colors";
import "./ListOrders.css";
import { useSelector, useDispatch } from "react-redux";
import * as OrderStates from "../../states/order/states";
import * as OrderActions from "../../states/order/action";

const Actions = ({ index, completed, canceled }) => {
  return (
    <div
      className="actionsCon"
      style={{ right: "4%", top: `${32.5 + 6.2 * index}%` }}
    >
      <div
        className="actionsItem"
        onClick={() => completed(index)}
        style={{ paddingLeft: "2%" }}
      >
        <ColorBtn color={Colors["pea-green"]} size="10px" />
        <Text color="charcoal-grey" fontSize="14px" fontWeight="500">
          Mark as Completed
        </Text>
      </div>
      <div className="actionsItem" onClick={() => canceled(index)}>
        <ColorBtn color={Colors.cancele} size="10px" />
        <Text color="charcoal-grey" fontSize="14px" fontWeight="500">
          Mark as Canceled
        </Text>
      </div>
    </div>
  );
};

const ListOrders = ({ page }) => {
  const [action, setAction] = React.useState([]);
  const dispatch = useDispatch();
  const [firsttime, setFirsttime] = React.useState(true);
  const orders = useSelector(OrderStates.getOrders);
  const isFetching = useSelector(OrderStates.getIsFetching);
  const openActions = (index) => {
    setAction((prev) => {
      let newArr = [...prev];
      for (let i = 0; i < orders.length; ++i) {
        if (i === index) {
          if (newArr[i] == undefined) newArr[i] = true;
          else newArr[i] = !newArr[i];
        } else newArr[i] = false;
      }
      return newArr;
    });
  };
  const handleCompleted = (index) => {
    dispatch(OrderActions.updateStatus(index, orders[index]._id, "Completed"));
    openActions(index);
  };
  const handleCanceled = (index) => {
    dispatch(OrderActions.updateStatus(index, orders[index]._id, "Canceled"));
    openActions(index);
  };
  React.useEffect(() => {
    dispatch(OrderActions.fetchOrders(page));
  }, [page]);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        className="orderRow"
        style={{ borderBottom: "1px solid #ededed", height: "64px" }}
      >
        <div className="orderId">
          <Text color="greyish" fontSize="12px" fontWeight="bold">
            ORDER ID
          </Text>
        </div>
        <div className="orderDate">
          <Text color="greyish" fontSize="12px" fontWeight="bold">
            ORDERED DATE
          </Text>
        </div>
        <div className="orderDetail">
          <Text color="greyish" fontSize="12px" fontWeight="bold">
            DETAIL
          </Text>
        </div>
        <div className="orderTotal">
          <Text color="greyish" fontSize="12px" fontWeight="bold">
            TOTAL ($)
          </Text>
        </div>
        <div className="orderStatus">
          <Text color="greyish" fontSize="12px" fontWeight="bold">
            STATUS
          </Text>
        </div>
        <div className="orderAction"></div>
      </div>
      {!isFetching &&
        orders.map((row, i) => (
          <div
            key={i}
            className="orderRow"
            style={{
              backgroundColor: `${i % 2 !== 0 ? Colors["white-two"] : ""}`,
            }}
          >
            <div className="orderId">
              <Text color="charcoal-grey" fontSize="14px" fontWeight="500">
                {row._id
                  .substring(row._id.length - 7, row._id.length)
                  .toUpperCase()}
              </Text>
            </div>
            <div className="orderDate">
              <Text color="charcoal-grey" fontSize="14px" fontWeight="500">
                {row.date}
              </Text>
            </div>
            <div className="orderDetail">
              <Text color="charcoal-grey" fontSize="14px" fontWeight="500">
                {`${row.name} (${row.size}) x ${row.quantity}`}
              </Text>
            </div>
            <div className="orderTotal">
              <Text color="charcoal-grey" fontSize="14px" fontWeight="500">
                {row.price}
              </Text>
            </div>
            <div className="orderStatus">
              <Text color="charcoal-grey" fontSize="14px" fontWeight="500">
                <StatusPill status={row.status} />
              </Text>
            </div>
            <div className="orderAction">
              <div className="actionOption" onClick={() => openActions(i)}>
                <div style={{ paddingTop: "3.2px" }}>
                  <Text fontWeight="500" color="charcoal-grey">
                    Actions
                  </Text>
                </div>
                <div className="iconCon" onClick={() => openActions(i)}>
                  <span className="icon-downArrow"></span>
                </div>
              </div>
              {action[i] && orders[i].status == "Pending" && (
                <Actions
                  completed={handleCompleted}
                  canceled={handleCanceled}
                  index={i}
                />
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListOrders;
