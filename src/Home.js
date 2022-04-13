import { Button } from "@mui/material";

export function Home() {
  return (
    <div className="Home-cont">
      <h3>Hi,</h3>
      <img src="https://media2.giphy.com/media/ujrj9aoOdNvXO/giphy.gif?cid=ecf05e478a2jrz2j1o9lf1jy7f5got2l65axwbxwzd1yu3j8&rid=giphy.gif&ct=s.gif" alt="hellow" width="200" height="100"></img>

      <h1>My name is Prasheek Buddheshwar Mankar</h1>
      <h2>I am a Full-Stack Developer</h2>
      <Button
        href="https://docs.google.com/document/d/1JsCGPnz0BkxXQO4w4iIVI4RFYXb0Z91AGdJTVyEbRBs/edit#"
        color="warning"
        variant="contained"
        target="_blank"
      >
        Resume
      </Button>
    </div>
  );
}
