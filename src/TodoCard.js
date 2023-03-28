import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxOutlineIcon from "@mui/icons-material/CheckBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Context from "./Context";

export default function TodoCard({ todo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState(todo);
  const { handleUpdateTodo, handleToggleDone, handleDeleteTodo } = useContext(
    Context
  );

  const handleChangeFormData = (event) =>
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));

  const handleSaveFormData = () => {
    handleUpdateTodo(formData);
    setIsEdit(false);
  };

  const handleChangePriority = (event) =>
    handleUpdateTodo({
      ...todo,
      priority: event.target.value
    });

  return (
    <Card>
      <CardHeader
        action={
          <IconButton
            aria-label="checkbox"
            onClick={() => handleToggleDone(todo.id)}
          >
            {todo.done ? <CheckBoxOutlineIcon /> : <CheckBoxOutlineBlankIcon />}
          </IconButton>
        }
        title={
          isEdit ? (
            <TextField
              variant="standard"
              name="title"
              value={formData.title}
              onChange={handleChangeFormData}
              aria-label="title"
              fullWidth
            />
          ) : (
            <Typography sx={{ textDecoration: todo.done && "line-through" }}>
              {todo.title}
            </Typography>
          )
        }
      />
      <CardContent>
        {isEdit ? (
          <TextField
            name="description"
            multiline
            value={formData.description}
            variant="standard"
            onChange={handleChangeFormData}
            fullWidth
            aria-label="description"
          />
        ) : (
          <Typography
            color="text.secondary"
            sx={{ textDecoration: todo.done && "line-through" }}
          >
            {todo.description}
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <TextField
          name="priority"
          select
          value={todo.priority}
          onChange={handleChangePriority}
          sx={{ width: 100, mb: 1, ml: 1 }}
          variant="standard"
          disabled={todo.done}
          aria-label="priority"
        >
          <MenuItem value="" disabled>
            Priority
          </MenuItem>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </TextField>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          aria-label="delete"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
        {isEdit ? (
          <IconButton aria-label="save" onClick={() => handleSaveFormData()}>
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="edit"
            onClick={() => setIsEdit((prevIsEdit) => true)}
            disabled={todo.done}
          >
            <EditIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
