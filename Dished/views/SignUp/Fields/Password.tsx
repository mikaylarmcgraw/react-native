import React from "react";
import TextField from "../../../components/TextField";

export default function Password() {
  return (
    <>
      <TextField
        placeholder="Password"
        width={80}
        height={15}
        required={true}
      />
      <TextField
        placeholder="Confirm Password"
        width={80}
        height={15}
        required={true}
      />
    </>
  );
}
