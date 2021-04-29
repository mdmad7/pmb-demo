import { Tabs } from "antd";
import { Switch, useHistory, useRouteMatch } from "react-router-dom";
import ManageGroups from "../pages/ManageGroups";
import ManageLeads from "../pages/ManageLeads";
import ManageUsers from "../pages/ManageUsers";

const TabPane = Tabs.TabPane;

const Manage = () => {
  const history = useHistory();
  const match: { params: { tab: string } } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Tabs
          type="card"
          defaultActiveKey={match.params.tab}
          onChange={(key) => {
            history.push(`/manage/${key}`);
          }}
        >
          <TabPane tab="Manage Leads" key="leads">
            <ManageLeads />
          </TabPane>
          <TabPane tab="Manage Groups" key="groups">
            <ManageGroups />
          </TabPane>
          <TabPane tab="Manage Users" key="users">
            <ManageUsers />
          </TabPane>
        </Tabs>
      </Switch>
    </div>
  );
};

export default Manage;
