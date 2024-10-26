import React from "react";
import TextField from "../../../components/TextField";

export default function Email() {
  return (
    <>
      <TextField placeholder="Email" width={80} height={15} required={true} />
    </>
  );
}
