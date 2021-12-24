import { Heading } from "theme-ui";

import PageLayout from "../../components/PageLayout";

const PathNotFoundPage = () => {
  return (
    <PageLayout>
      <Heading>Could not find page</Heading>
      <Heading variant={"h2"} sx={{ fontSize: "1.25rem" }}>
        SDFA
      </Heading>
    </PageLayout>
  );
};

export default PathNotFoundPage;
