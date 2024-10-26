import React from "react";
import TextField from "../../../components/TextField";

export default function FullName() {
  return (
    <>
      <TextField
        placeholder="Full name"
        width={80}
        height={15}
        required={true}
      />
    </>
  );
}
