import React from "react";
import "./Containtbar.css";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography, Divider, Card, CardActionArea } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Select from "@mui/material/Select";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Containtbar = () => {
  return (
    <div>
      <div className="Containt_main">
        <Input
          className="Search_bar"
          id="input-with-icon-adornment"
          placeholder="Global search"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon className="search_icon" />
            </InputAdornment>
          }
        ></Input>
        <IconButton
          className="Iconbutton"
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge
            variant="dot"
            overlap="circular"
            badgeContent=" "
            color="warning"
          >
            <NotificationsNoneOutlinedIcon className="notification_icon" />
          </Badge>
        </IconButton>
      </div>
      <Divider className="divider_third" />
      <Box className="box1">
        <Box className="box2">
          <div className="dropdown">
            <Typography className="typo_task">
              8 task completed out of 10
            </Typography>
            <Typography className="typo_show">
              Show: <em>This week </em>
              <Select className="select"></Select>
            </Typography>
          </div>
          <div>
            <LinearProgress
              variant="determinate"
              className="progress_bar"
              value={70}
            />
          </div>
          <div className="typo_date">
            <Typography className="typo_date_1">23 December, Sunday</Typography>
          </div>
          <div>
            <Box className="dateday">
              <Typography className="typo_day">Sun</Typography>
              <Typography className="typo_diffrent">Mon</Typography>
              <Typography className="typo_day">Tue</Typography>
              <Typography className="typo_day">Wed</Typography>
              <Typography className="typo_day">Thu</Typography>
              <Typography className="typo_day">Fri</Typography>
              <Typography className="typo_day">Sat</Typography>
            </Box>
            <Box className="date">
              <Typography className="typo_diffrent_2"> 23</Typography>
              <Typography className="typo_diffrent"> 24</Typography>
              <Typography className="typo_date_2"> 25</Typography>
              <Typography className="typo_date_2"> 26</Typography>
              <Typography className="typo_date_2"> 27</Typography>
              <Typography className="typo_date_2"> 28</Typography>
              <Typography className="typo_date_2"> 29</Typography>
            </Box>
            <Divider />
          </div>
          <Card sx={{ maxWidth: "92%", maxHeight: 150 }} className="card_1">
            <CardActionArea>
              <CardContent className="card_content_1">
                <Typography
                  gutterBottom
                  component="div"
                  className="typo_card_heading"
                >
                  Send benefit review by Sunday
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  className="typo_card_left_head"
                >
                  Reminder
                </Typography>
              </CardContent>
              <Typography variant="body2" className="typo_card_date">
                <em>Due date: </em>December 23, 2018
              </Typography>
              {/* <CardMedia
                component="img"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              /> */}
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default Containtbar;
