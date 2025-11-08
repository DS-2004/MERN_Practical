import React from "react";
import { Card, CardContent, Avatar, Typography } from "@mui/material";

function ProfileCard({ name, email, avatar }) {
  return (
    <Card sx={{ maxWidth: 300, margin: "auto" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Avatar src={avatar} sx={{ width: 56, height: 56, margin: "auto" }} />
        <Typography variant="h6" sx={{ mt: 2 }}>{name}</Typography>
        <Typography color="text.secondary">{email}</Typography>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;