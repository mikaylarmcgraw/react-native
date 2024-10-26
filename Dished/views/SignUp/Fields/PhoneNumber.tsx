import React from "react";
import TextField from "../../../components/TextField";

export default function PhoneNumber() {
  return (
    <>
      <TextField
        placeholder="Phone Number"
        width={80}
        height={15}
        required={true}
      />
    </>
  );
}
