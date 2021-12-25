import { Box, Divider, Flex, Heading, Text } from "theme-ui";

import Card from "../../components/Card/Card";
import PageLayout from "../../components/PageLayout";
import logo from "../../logo.svg";
import { useTodos } from "../../services/todos-service";

const OverviewPage = () => {
  const { isLoading, data } = useTodos();

  return (
    <PageLayout>
      {isLoading ? (
        <>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>...loading</h1>
        </>
      ) : (
        <Flex
          as={"ul"}
          sx={{
            flexDirection: "column",
            gap: 2,
            listStyle: "none",
            padding: 0,
          }}
        >
          {data?.map((todo) => (
            <Box as={"li"} key={todo.id} paddingBottom={3}>
              <Card aria-expanded={false} variant="primary" as={"button"}>
                <Flex
                  sx={{
                    userSelect: "text",
                    justifyContent: "space-between",
                    alignItems: ["flex-end", "center"],
                  }}
                >
                  <Heading>{todo.category}</Heading>
                  <Flex
                    as={"span"}
                    sx={{
                      flexDirection: ["column", "row"],
                      flexShrink: 0,
                      gap: [0, 2],
                      alignSelf: "flex-start",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text>Created </Text>
                    <Text>{new Date(todo.createdAt).toLocaleDateString()}</Text>
                  </Flex>
                </Flex>
                <Divider />
              </Card>
            </Box>
          ))}
        </Flex>
      )}
    </PageLayout>
  );
};

export default OverviewPage;
