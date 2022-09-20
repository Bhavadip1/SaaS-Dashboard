import React from "react";
import "./Containtbar.css";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Typography,
  Divider,
  Card,
  CardActionArea,
  Button,
  Grid,
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Select from "@mui/material/Select";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import image3 from "../Profile/image3.png";
import image2 from "../Profile/image2.png";
import image from "../Profile/image.png";
import EllipseG from "../Profile/icon/EllipseG.jpg";
import EllipseY from "../Profile/icon/EllipseY.png";
import Ellipse2 from "../Profile/icon/Ellipse2.png";
import EllipseRed from "../Profile/icon/EllipseRed.png";
import EllipseGreen from "../Profile/icon/EllipseGreen.png";
import EllipseYellow from "../Profile/icon/EllipseYellow.png";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(CategoryScale, ArcElement, Tooltip, Legend);

const data = {
  labels: ["1 Dec", "8 Dec", "16 Dec", "31 Dec"],
  datasets: [
    {
      data: [50, 100, 90, 160, 60, 160, 150, 200],
      fill: true,
      backgroundColor: "rgba(16, 156, 241, 0.1)",
      borderColor: "rgba(16, 156, 241, 1)",
      tension: 0.4,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    xAxes: {
      min: 0,
      max: 4,
      grid: {
        display: false,
        color: "black",
      },
    },
    y: {
      min: 0,
      max: 200,
      ticks: {
        stepSize: 50,
      },
      grid: {
        borderDash: [12, 12],
        color: "#C2CFE0",
        drawTicks: false,
        drawBorder: false,
      },
    },
  },
};

const data2 = {
  datasets: [
    {
      data: [10, 60, 30],

      borderColor: ["rgba(255,206,86,0.2)"],
      backgroundColor: [
        "rgba(247, 104, 91, 1)",
        "rgba(46, 212, 122, 1)",
        "rgba(255, 185, 70, 1)",
      ],
      pointBackgroundColor: "rgba(255,206,86,0.2)",
    },
  ],
};

const options2 = {
  responsive: true,
  aspectRatio: 1.2,
  cutout: 115,
  layout: {
    padding: {
      right: 10,
    },
  },
};

const Containtbar = () => {
  return (
    <>
      <div className="">
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
        <Divider className="dividersecond" />
      </div>
      <Box className="box1">
        <Box className="box1_1">
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
              <CardMedia className="Card_media ">
                <div className="media_containt_img">
                  <img src={image3} className="image3" alt="image3" />
                  <Typography className="typo_img_name">
                    George Fields
                  </Typography>
                </div>
                <Button variant="contained" className="card_button">
                  Completed
                </Button>
              </CardMedia>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "92%", maxHeight: 150 }} className="card_2">
            <CardActionArea>
              <CardContent className="card_content_1">
                <Typography
                  gutterBottom
                  component="div"
                  className="typo_card_heading"
                >
                  Invite to office meet-up
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  className="typo_card_left_head"
                >
                  Call
                </Typography>
              </CardContent>
              <Typography variant="body2" className="typo_card_date">
                <em>Due date: </em>December 23, 2018
              </Typography>
              <CardMedia className="Card_media ">
                <div className="media_containt_img">
                  <img src={image2} className="image3" alt="Image2" />
                  <Typography className="typo_img_name">
                    Rebecca Moore
                  </Typography>
                </div>
                <div className="card_icon_buttom">
                  <img
                    className="EllipseyY"
                    src={EllipseY}
                    alt="ElipseyGreen"
                  />
                  <img
                    className="EllipseyG"
                    src={EllipseG}
                    alt="ElipseyGreen"
                  />
                  <i className="edit_icon">
                    <ModeEditIcon />
                  </i>
                  <i className="delete_icon">
                    <DeleteIcon />
                  </i>
                  <Button
                    variant="contained"
                    className="card_button_second_card"
                  >
                    Ended
                  </Button>
                </div>
              </CardMedia>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "92%", maxHeight: 150 }} className="card_1">
            <CardActionArea>
              <CardContent className="card_content_1">
                <Typography
                  gutterBottom
                  component="div"
                  className="typo_card_heading"
                >
                  Office meet-up
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  className="typo_card_left_head"
                >
                  Event
                </Typography>
              </CardContent>
              <Typography variant="body2" className="typo_card_date">
                <em>Due date: </em>December 23, 2018
              </Typography>
              <CardMedia className="Card_media ">
                <div className="media_containt_img">
                  <img src={image} className="image3" alt="image" />
                  <Typography className="typo_img_name">
                    Lindsey Stroud
                  </Typography>
                </div>
                <Button variant="contained" className="card_button">
                  Completed
                </Button>
              </CardMedia>
            </CardActionArea>
          </Card>
          <Typography className="typo_buttom_show_more">Show More</Typography>
        </Box>
        <Box className="box1_2">
          <div className="box1_2_1">
            <div className="dropdown2">
              <Typography className="typo_deals">Deals </Typography>
              <Typography className="typo_show">
                Show: <em>Monthly </em>
                <Select className="select"></Select>
              </Typography>
            </div>
            <Divider variant="fullwidth" />
            <div className="graph_ellipse">
              <img src={Ellipse2} alt="Ellipse2" />
              <Typography className="typo_graph_ellipse">
                Closed deals
              </Typography>
            </div>
            <div className="line_graph">
              <Line data={data} options={options} />
            </div>
          </div>
          <div className="box1_2_2">
            <div className="dropdown2">
              <Typography className="typo_deals">Tasks </Typography>
              <Typography className="typo_show">
                Show: <em>This month </em>
                <Select className="select"></Select>
              </Typography>
            </div>
            <Divider variant="fullwidth" />

            <div className="doughnut_graph">
              <Grid container>
                <Grid item xs={8}>
                  <Doughnut data={data2} options={options2} />
                </Grid>
                <Grid className="doughnutlabelgrid" item xs={4}>
                  <div className="label">
                    <img
                      src={EllipseYellow}
                      alt="Ellipse2"
                      className="doughnutlabelgrid_image"
                    />
                    <Typography className="doughnutlabelgrid_typo">
                      Active
                    </Typography>
                  </div>
                  <div className="label">
                    <img
                      src={EllipseGreen}
                      alt="Ellipse2"
                      className="doughnutlabelgrid_image"
                    />
                    <Typography className="doughnutlabelgrid_typo">
                      Completed
                    </Typography>
                  </div>
                  <div className="label">
                    <img
                      src={EllipseRed}
                      alt="Ellipse2"
                      className="doughnutlabelgrid_image"
                    />
                    <Typography className="doughnutlabelgrid_typo">
                      Ended
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Containtbar;
