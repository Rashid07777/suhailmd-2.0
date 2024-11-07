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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923239956476";
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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923239950046,923239956476";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923239956476";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_28_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxODksXG4gICAgICAgIDExMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDU5LFxuICAgICAgICA4MyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDMwLFxuICAgICAgICA2MixcbiAgICAgICAgNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDgwLFxuICAgICAgICAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgODQsXG4gICAgICAgIDI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDksXG4gICAgICAgIDQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDkzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICA1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgMTk0LFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvVHpYSkpFZ3FUTkQ0NEZnNC9vVUsxZjkyR2Z5YjRIbzJzUHUzNy94Y1pjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxYlo3cDVselNSYU5pakdrd05FMkFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVlZmM4YTY5LTdkMTktNGRlOC1hZGNhLWM5MjZhZjhiYWI3NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDYsXG4gICAgICAxNDIsXG4gICAgICAxNjksXG4gICAgICAxMDcsXG4gICAgICAxOSxcbiAgICAgIDc5LFxuICAgICAgMTU2LFxuICAgICAgNSxcbiAgICAgIDI2LFxuICAgICAgMTI0LFxuICAgICAgMTQwLFxuICAgICAgMTE1LFxuICAgICAgNjgsXG4gICAgICA3MCxcbiAgICAgIDIxOSxcbiAgICAgIDEyNixcbiAgICAgIDg0LFxuICAgICAgMjI4LFxuICAgICAgMjQ5LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICA4NSxcbiAgICAgIDE1NyxcbiAgICAgIDIxNSxcbiAgICAgIDMwLFxuICAgICAgMjQwLFxuICAgICAgMTEsXG4gICAgICAxNjMsXG4gICAgICAyOSxcbiAgICAgIDE1NyxcbiAgICAgIDIwMCxcbiAgICAgIDIxNCxcbiAgICAgIDEzOCxcbiAgICAgIDQxLFxuICAgICAgMjI0LFxuICAgICAgMjI5LFxuICAgICAgMjIyLFxuICAgICAgNCxcbiAgICAgIDcwLFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg2REREMkc5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNjE0ODI4OTM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmYjwnZmnIPCdmZXwnZmW8J2ZnvCdmYkg8J2ZgvCdmarwnZmf8J2Zn/CdmZbwnZmnXCIsXG4gICAgXCJsaWRcIjogXCIxNDc3MjE3MDkxODcxNTY6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVFB2STBFRUtTc3Nya0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhVRThPVWtFRXlQYUZVWlc1eVpNdkxDanVPbyt2d0RyQXdySmdoVHBoVFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMFlmamZnUG9sZEp0cDVsMk5Wbko2MVRhck85N0ZyaEV4clhOVXJ5L2QwNWh4eFM0eHFnMDdzdUxFQlhYNVJhMHhGa0FZaTdEZk1XRnBrY3lWN1daQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZE9pWjFrbExhdWRweEpFWThTZmMxUno2OEd4YkZ6YzJ5c2ZsZWorS1ZwZ2lQSDRyTHAvQ2pLNVBObmRvdHhuWnhBdWZJc3REK2tpUnY3VGdYenlFQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjYxNDgyODkzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA5NzUyNzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFTW1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVNbS5qc29uIjogIntcImtleURhdGFcIjpcIlNBSEhMUXBkWlV4MHhEa1V4MzVDWldveEZyM01Ba3NqTDdXdEpOQ2JmTjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwMTk5ODAwNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwODA1MTkxNTk3XCJ9Igp9"  // PUT your SESSION_ID 


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
