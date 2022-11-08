import React, { FC, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Paragraph,
  Text,
} from "theme-ui";

import { Card } from "../../../components";
import { TodoMenu } from "./TodoMenu";

interface ITodoCard {
  todo: ITodo;
  handleDelete(): void;
}

export const TodoCard: FC<ITodoCard> = ({ todo, handleDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);

  return (
    <Card
      aria-expanded={false}
      variant="primary"
      sx={{ position: "relative" }}
      tabIndex={0}
    >
      <IconButton
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        sx={{
          position: "absolute",
          right: 3,
          top: 2,
        }}
        ref={setReferenceElement}
      >
        <BiDotsHorizontalRounded style={{ width: "100%", height: "100%" }} />
      </IconButton>

      <TodoMenu
        isOpen={isMenuOpen}
        referenceElement={referenceElement}
        onClose={() => setIsMenuOpen(!isMenuOpen)}
        handleDeleteTodo={() => {
          handleDelete();
          setIsMenuOpen(false);
        }}
        handleEditTodo={() => {
          return;
        }}
      />

      <Heading>{todo.category}</Heading>
      <Flex
        sx={{
          userSelect: "text",
          justifyContent: "space-between",
          alignItems: ["flex-end", "center"],
        }}
      >
        <Heading>{todo.summary}</Heading>
        <Flex
          as={"span"}
          sx={{
            flexDirection: "column",
            flexShrink: 0,
            gap: [0, 2],
            alignSelf: "flex-start",
            alignItems: "flex-end",
          }}
        >
          <Text>Created</Text>
          <Text>{todo.createdAt}</Text>
        </Flex>
      </Flex>
      <Divider />
      <Box paddingTop={2}>
        <Paragraph sx={{ textAlign: "left" }}>{todo.description}</Paragraph>
      </Box>
    </Card>
  );
};
