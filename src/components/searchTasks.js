import React from "react";
import Database from "../Database/Taskdatabase";
import BasicCard from "./cards";
import Input from "@mui/joy/Input";
import { setSearchInput,setFilteredData } from "../redux/searchRe";
import { useSelector,useDispatch } from "react-redux";

function SearchCompletedTask(){
      const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.search.searchInput);
  const filteredData = useSelector((state) => state.search.filteredData);
                const handlechange = (e) => {
    const input = e.target.value;
    dispatch(setSearchInput(input));

    const filteredData = Database.filter((i) =>
      i.description.toLowerCase().includes(input.toLowerCase())
    );
    dispatch(setFilteredData(filteredData));
    }
    return (
      <div>
        <div style={{ margin: "10%", alignItems: "center" }}>
          <Input
            placeholder="Looks like I'm focused but no"
            sx={{ "--Input-focused": 1, width: 256 }}
            onChange={handlechange}
            value={searchInput}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Ensure filtereddata is an array and map over it */}
          {Array.isArray(filteredData) &&
            filteredData.map((card, index) => (
              <BasicCard key={index} cardData={card} />
            ))}
        </div>
      </div>
    );
}
export default SearchCompletedTask;