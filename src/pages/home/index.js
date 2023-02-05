import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UsersTable from "../../components/UserdataTable";
import { getData } from "../../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const handleAddForm = () => {
    navigate("/add-form");
  };

  return (
    <div className="App">
      <Box
        sx={{
          padding: "0 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Users Data Table</h2>
        <Button variant="contained" onClick={handleAddForm}>
          Add Form
        </Button>
      </Box>
      <UsersTable users={userData || []} />
    </div>
  );
};

export default Home;
