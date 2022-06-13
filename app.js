var OS="Unknown";
if (navigator.userAgent.indexOf("Win")!=-1) OS="Windows";
if (navigator.userAgent.indexOf("Mac")!=-1) OS="MacOS";
if (navigator.userAgent.indexOf("X11")!=-1) OS="Unix";
if (navigator.userAgent.indexOf("Linux")!=-1) OS="Linux";
document.getElementById('download').innerHTML = 'Download For ' + OS;
