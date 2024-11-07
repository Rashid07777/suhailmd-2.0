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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_28_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgODksXG4gICAgICAgIDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDksXG4gICAgICAgIDEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDY3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MixcbiAgICAgICAgMTU3LFxuICAgICAgICA0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjExLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDk4LFxuICAgICAgICA3MixcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ3LFxuICAgICAgICA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNixcbiAgICAgICAgODksXG4gICAgICAgIDE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg1LFxuICAgICAgICA2NSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTExLFxuICAgICAgICA1NixcbiAgICAgICAgMjI2LFxuICAgICAgICA1MSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxaUdteWVTNjY1YkJLWFArcU1hUXFoN0szZjlsSGhwR3ZOQ2NKQ20vUU1JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjMkZrSlZ1R1FSaVFwbE12X0VNOElnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE3YmQ1NzlmLTUyMGMtNGU1MS04MTE3LTYyNWU0N2ZmMmNhOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDUzLFxuICAgICAgMTA4LFxuICAgICAgMjIsXG4gICAgICAyMzEsXG4gICAgICAxNjcsXG4gICAgICAxNzIsXG4gICAgICAxODMsXG4gICAgICAyNDMsXG4gICAgICAxMjcsXG4gICAgICA5OSxcbiAgICAgIDI2LFxuICAgICAgMTIyLFxuICAgICAgMzAsXG4gICAgICAxMTgsXG4gICAgICAxMzAsXG4gICAgICA3MSxcbiAgICAgIDI0NixcbiAgICAgIDc4LFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMjI3LFxuICAgICAgMTQ3LFxuICAgICAgMTUxLFxuICAgICAgMSxcbiAgICAgIDE1NSxcbiAgICAgIDY2LFxuICAgICAgNDUsXG4gICAgICAxODAsXG4gICAgICA0NixcbiAgICAgIDE2MyxcbiAgICAgIDIxNyxcbiAgICAgIDg5LFxuICAgICAgMTE4LFxuICAgICAgMTU0LFxuICAgICAgMTYzLFxuICAgICAgMjQyLFxuICAgICAgMjM0LFxuICAgICAgNjgsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUSzhLVjZTNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTEwNjM3MjE3OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQW1tYXIgS2hhblwiLFxuICAgIFwibGlkXCI6IFwiODg1OTcxNTU4NTY0NjU6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjNVMExNREVMeklzcmtHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQdVkxaS9jNS92bzJXay96a3AyMFNtZzk5RjdCWHpOWm9PbUxxSVU2aENVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdSNTVCY3RMYUFtQitGUUZQTnVoaHkvdEdBWGpwbTEwK2ZvR1dBOTRJeUtseWhDMkV0VlV3TjBTRkZralRFeWZ5YmxuOFpxb2c0NEhua1BWWnNDK0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9qRE0rMTVlclRURG40SlN5RzljTkx6U254SWppdWNqb1dBbEM2N2UwQ1Z1bGZlYUExWE5tUWg3dzdQazhYblNUcHBuZWh3MEhPeEJPUVFhRllWYUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzExMDYzNzIxNzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA5Nzg4ODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNWUVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1ZRS5qc29uIjogIntcImtleURhdGFcIjpcIjRnK1VKNDRBdjdIbklyUW5mN3Y3SkFXdkhmdjF4SGxGVVp5dzZmdlRCTzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTEzNTgyNjgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI4ODU2NTk3OTYzXCJ9Igp9" ;


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
