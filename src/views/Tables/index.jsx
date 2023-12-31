import { Card } from "antd";
import { orderData, userData } from "../../views/Tables/data";
import {
  Demographic,
  Designation,
  DetailSection,
  Follow,
  Name,
  OrderStyles,
  Profile,
  Status,
  TableWrap,
  UserStyles,
} from "../../styles/Dashboard/TableAnalytics";
import { CardWrap } from "../../styles/Dashboard/TableAnalytics";

const TableAnalytics = () => {
  return (
    <TableWrap>
      <Card title="New Users" style={UserStyles}>
        <CardWrap>
          {userData.map((item) => (
            <Profile key={item.key}>
              <DetailSection>
                <img src={item.img} alt="profile" />
                <Demographic>
                  <Name>{item.name}</Name>
                  <Designation>{item.designation}</Designation>
                </Demographic>
              </DetailSection>
              <Follow>Follow</Follow>
            </Profile>
          ))}
        </CardWrap>
      </Card>
      <Card title="Orders" style={OrderStyles}>
        <CardWrap>
          {orderData.map((item) => (
            <Profile key={item.key}>
              <DetailSection>
                <Demographic>
                  <Name>{item.order}</Name>
                  <Designation>
                    {item.orderCode} | {item.date}{" "}
                  </Designation>
                </Demographic>
              </DetailSection>
              <Status isUnpaid={item.isUnpaid}>
                {item.isUnpaid ? "Unpaid" : "Paid"}
              </Status>
            </Profile>
          ))}
        </CardWrap>
      </Card>
    </TableWrap>
  );
};
export default TableAnalytics;
