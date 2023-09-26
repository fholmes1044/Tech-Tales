import React, { useState } from "react";
import { SearchBox } from "@fluentui/react";
import { initializeIcons } from "@uifabric/icons";

function EventsSearch({ onSearch }) {
  initializeIcons();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "inline-flex", alignItems: "center" }}
      >
        <SearchBox
          placeholder="Search Events..."
          styles={{
            root: { width: 200 },
            field: { borderRadius: 4 },
            icon: { color: "#0078d4" },
          }}
          onChange={handleSearchChange}
          value={searchValue}
          disableAnimation
          clearButtonProps={{ style: { display: "none" } }}
        />
        <button type="submit" style={{ marginLeft: "8px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default EventsSearch;
