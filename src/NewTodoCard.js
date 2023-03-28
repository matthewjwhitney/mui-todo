import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import Context from "./Context";

export default function NewTodoCard() {
  const { handleCreateTodo } = useContext(Context);

  const initialFormData = {
    title: "",
    description: "",
    priority: ""
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChangeFormData = (event) =>
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));

  const handleSaveFormData = () => {
    if (!formData.title) {
      alert("You must provide a title");
      return;
    }
    handleCreateTodo(formData);
    setFormData(initialFormData);
  };

  return (
    <Card>
      <CardHeader
        title={
          <TextField
            id="title-input"
            variant="standard"
            name="title"
            value={formData.title}
            onChange={handleChangeFormData}
            placeholder="New Todo"
            fullWidth
          />
        }
      />
      <CardContent>
        <TextField
          id="description-input"
          name="description"
          multiline
          value={formData.description}
          variant="standard"
          onChange={handleChangeFormData}
          fullWidth
          placeholder="Description"
        />
      </CardContent>
      <CardActions>
        <Box sx={{ pb: 1, pl: 1 }}>
          <TextField
            id="priority-select"
            name="priority"
            select
            value={formData.priority}
            onChange={handleChangeFormData}
            sx={{ width: 100 }}
            variant="standard"
          >
            <MenuItem value="" disabled>
              Priority
            </MenuItem>
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </TextField>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton aria-label="save" onClick={() => handleSaveFormData()}>
          <SaveIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
