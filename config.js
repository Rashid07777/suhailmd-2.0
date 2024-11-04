const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*0)  === 0 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_08_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDY4LFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMyLFxuICAgICAgICA0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDEwLFxuICAgICAgICA4MixcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU4LFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4LFxuICAgICAgICAxODksXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIzLFxuICAgICAgICAzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA5MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICAxNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWi9QWnNKK0sxelRuRGRSY1BvdDlyeGlSRkN2b1lZM29Cak1BajduMWtPMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVXpHS3pyMzNUd09jMkhnU3FJS1ZIZ1wiLFxuICBcInBob25lSWRcIjogXCJlM2I3MDFjNy1jOWQzLTQ3MzQtOGYyNi1mYjBmODlmNzAwNGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAxNDMsXG4gICAgICAxNTIsXG4gICAgICAyMjMsXG4gICAgICAxNDgsXG4gICAgICAyMTMsXG4gICAgICAxLFxuICAgICAgMTQxLFxuICAgICAgMjQ5LFxuICAgICAgMzIsXG4gICAgICA3MixcbiAgICAgIDg5LFxuICAgICAgNzEsXG4gICAgICAyNSxcbiAgICAgIDEwLFxuICAgICAgMTEyLFxuICAgICAgMTEsXG4gICAgICAxMjIsXG4gICAgICA5MyxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDIzNSxcbiAgICAgIDc4LFxuICAgICAgMjQxLFxuICAgICAgNjEsXG4gICAgICAzNyxcbiAgICAgIDE0MixcbiAgICAgIDIwMixcbiAgICAgIDEyLFxuICAgICAgMTU0LFxuICAgICAgMjQ0LFxuICAgICAgMTY5LFxuICAgICAgMjA0LFxuICAgICAgMTc5LFxuICAgICAgMTIyLFxuICAgICAgMTYwLFxuICAgICAgMjI0LFxuICAgICAgMTc4LFxuICAgICAgMTM4LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjhSTUtLTENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIzOTk1NjQ3Njo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjEwNDY2ODE5MzI2MTY2Ojg3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xhLzFONEhFTE9wbXJrR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOVo5enF3cEp6dFRPbzdoSjFaUi91TlBEcTdwdWk5U1pIbkxzbFJjZ3FIUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5OXZhaWVmLzNDKy9MTWxJeGdIMXVtYWdCV0dXU0k2Q0JLTHZ1SlZFdHhhaHN3SlBKblhLUEkvUFlxSWdnbWRweXJseS95d1RlRU9ORzdZODQva2JEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSRTB3cnNhLzIvWXB5bVlYbHY2U053aEk0NzBwZUlueEhkYnVZS0VPZ2wxRmU0ZjlWWWwyMjBjUTlFL2pYdGZwV2hTY0V6ajdqNnZRV0dWUVFyUVVCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMzk5NTY0NzY6ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA1ODE2ODdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
