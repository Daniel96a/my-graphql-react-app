import { AnimatePresence } from "framer-motion";
import request, { gql } from "graphql-request";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Label,
  Select,
  Textarea,
} from "theme-ui";

import { Card, PageLayout } from "../../components";
import logo from "../../logo.svg";
import { useTodos } from "../../services/todos-service";
import { TodoCard, TodoListItemAnimation } from "./components";

type TAddTodoData = Pick<ITodo, "summary" | "description" | "category">;

const TodosPage = () => {
  const { isLoading, data } = useTodos();
  const { control, handleSubmit, reset } = useForm<TAddTodoData>();
  const queryClient = useQueryClient();
  const addTodoMutation = useMutation<
    {
      addTodo: ITodo;
    },
    null,
    TAddTodoData
  >(
    "AddTodo",
    async (todo) => {
      return await request(
        "/graphql",
        gql`
          mutation AddNewTodo(
            $summary: String!
            $description: String!
            $category: String!
          ) {
            addTodo(
              summary: $summary
              description: $description
              category: $category
            ) {
              id
              summary
              description
              category
              createdAt
              updatedAt
            }
          }
        `,
        todo,
      );
    },

    {
      onSuccess: (responseData) => {
        if (data) {
          queryClient.setQueryData("todos", [...data, responseData.addTodo]);
          reset();
        }
      },
    },
  );

  const deleteTodoMutation = useMutation<
    { deleteTodo: ITodo },
    null,
    { id: number }
  >(
    "AddTodo",
    async ({ id }) => {
      return await request(
        "/graphql",
        gql`
          mutation DeleteTodo($id: ID!) {
            deleteTodo(id: $id) {
              id
            }
          }
        `,
        { id: id },
      );
    },

    {
      onSuccess: (_, variables) => {
        if (data) {
          queryClient.setQueryData(
            "todos",
            data.filter((todo) => todo.id !== variables.id),
          );
          reset();
        }
      },
    },
  );

  return (
    <PageLayout>
      {isLoading ? (
        <img src={logo} className="App-logo" alt="logo" />
      ) : (
        <Flex
          as={"ul"}
          sx={{
            flexDirection: "column",
            listStyle: "none",
            padding: 0,
          }}
        >
          <AnimatePresence initial={false}>
            {data?.map((todo) => (
              <TodoListItemAnimation key={todo.id}>
                <Box paddingBottom={4}>
                  <TodoCard
                    todo={todo}
                    handleDelete={() => {
                      deleteTodoMutation.mutate({ id: todo.id });
                    }}
                  />
                </Box>
              </TodoListItemAnimation>
            ))}
          </AnimatePresence>

          <Card>
            <Heading mb={4}>Add a todo</Heading>
            <form
              onSubmit={handleSubmit((data) => {
                addTodoMutation.mutate(data);
              })}
            >
              <Flex sx={{ flexDirection: "column", gap: 4 }}>
                <Label sx={{ flexDirection: "column" }}>
                  Summary
                  <Input
                    {...control.register("summary")}
                    placeholder={"Todo summary"}
                  />
                </Label>
                <Label sx={{ flexDirection: "column" }}>
                  Description
                  <Textarea
                    rows={8}
                    {...control.register("description")}
                    placeholder={"Todo description"}
                  />
                </Label>
                <Select
                  {...control.register("category")}
                  placeholder="Select category"
                  mb={5}
                >
                  <option value={"Groceries"}>Groceries</option>
                  <option value={"School"}>School</option>
                  <option value={"Other"}>Other</option>
                </Select>
              </Flex>
              <Button>Add Todo</Button>
            </form>
          </Card>
        </Flex>
      )}
    </PageLayout>
  );
};

export default TodosPage;
