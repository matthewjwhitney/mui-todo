import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Header from "./Header";
import NewTodoCard from "./NewTodoCard";
import { ContextProvider } from "./Context";
import TodoList from "./TodoList";
import { createTheme, ThemeProvider } from "@mui/material";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "dark"
    }
  });

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header />
          <Box sx={{ ml: 2, mt: 2 }}>
            <Masonry
              columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
              spacing={2}
            >
              <NewTodoCard />
              <TodoList />
            </Masonry>
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </ContextProvider>
  );
}
