import React from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  Typography,
  Grid,
} from "@mui/material";
import "./SideNavbar.css";
import profile from "../Profile/profile.png";
import toggle from "../Profile/icon/toggle.png";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const SideNavbar = () => {
  return (
    <>
      <Grid className="Gridmain">
        <div>
          <Typography className="textHead">SaaS Kit</Typography>
        </div>

        <div className="avtar">
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            className="avtar"
            src={profile}
          />
          <div className="textmain">
            <Typography className="textTitle">Sierra Ferguson</Typography>
            <Typography className="textmail">s.ferguson@gmail.com</Typography>
          </div>
        </div>
        <ButtonGroup className="btngroup">
          <Button className="item ">
            <DashboardOutlinedIcon className="icon activee" />
            <Typography className="text activee">Dashboard</Typography>
          </Button>
          <Button className="item">
            <SplitscreenOutlinedIcon className="icon" />
            <Typography className="text">Tasks</Typography>
          </Button>
          <Button className="item">
            <MailOutlineOutlinedIcon className="icon" />
            <Typography className="text">Email</Typography>
          </Button>
          <Button className="item">
            <PermIdentityOutlinedIcon className="icon" />
            <Typography className="text">Contacts</Typography>
          </Button>
          <Button className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <Typography className="text">Chat</Typography>
          </Button>
          <Button className="item">
            <ViewWeekOutlinedIcon className="icon" />
            <Typography className="text">Deals</Typography>
          </Button>
        </ButtonGroup>
        <Divider className="Dividersecond" />
        <div>
          <ButtonGroup className="btngroup">
            <Button className="btn_buttom">
              <MoreHorizIcon className="icon" />
              <Typography className="text">Setting</Typography>
            </Button>
          </ButtonGroup>
        </div>
      </Grid>
      <Button className=" item ">
        <img src={toggle} className="icon" />
        <Typography className="text">Toggle sidebar</Typography>
      </Button>
    </>
  );
};

export default SideNavbar;
