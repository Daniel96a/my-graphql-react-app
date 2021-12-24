import { Box, Heading } from "theme-ui";

import PageLayout from "../../components/PageLayout";
import logo from "../../logo.svg";
import { useUser } from "../../services/user-service";

const OverviewPage = () => {
  const { data: user, isLoading } = useUser(199604221234);

  return (
    <PageLayout>
      {isLoading ? (
        <>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>...loading</h1>
        </>
      ) : (
        <Box>
          <Heading variant="h1">
            Name: {user?.firstName} {user?.lastName}
          </Heading>
        </Box>
      )}
    </PageLayout>
  );
};

export default OverviewPage;
