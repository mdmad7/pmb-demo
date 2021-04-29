import { Tabs } from "antd";
import { Switch, useHistory, useRouteMatch } from "react-router-dom";
import Account from "../pages/Account";
import ManageAccounts from "../pages/ManageAccounts";
import WelcomeMessage from "../pages/WelcomeMessage";

const TabPane = Tabs.TabPane;

const Settings = () => {
  const history = useHistory();
  const match: { params: { tab: string } } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Tabs
          type="card"
          activeKey={match.params.tab}
          onChange={(key) => {
            history.push(`/settings/${key}`);
          }}
        >
          <TabPane tab="Welcome Message" key="welcome-message">
            <WelcomeMessage />
          </TabPane>
          <TabPane tab="Manage Accounts" key="manage-accounts">
            <ManageAccounts />
          </TabPane>
          <TabPane tab="Account" key="my-account">
            <Account />
          </TabPane>
        </Tabs>
      </Switch>
    </div>
  );
};

export default Settings;
