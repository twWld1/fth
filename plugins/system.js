const {
  cmd,
  commands
} = require("../command");
const os = require('os');
const {
  runtime
} = require("../lib/functions");
cmd({
  'pattern': "system",
  'desc': "Check bot online or no.",
  'category': "main",
  'react': '📟',
  'filename': __filename
}, async (_0x30b4ee, _0x33e339, _0x35da83, {
  from: _0x2f3e3e,
  quoted: _0x2fcad6,
  body: _0x44e602,
  isCmd: _0x137900,
  command: _0x534c47,
  args: _0x3f6eed,
  q: _0x320e19,
  isGroup: _0x5d969d,
  sender: _0x1ce133,
  senderNumber: _0x4d83ca,
  botNumber2: _0x1e8f85,
  botNumber: _0x44c303,
  pushname: _0x3079ac,
  isMe: _0x5c616c,
  isOwner: _0x514fa5,
  groupMetadata: _0x557479,
  groupName: _0x537db8,
  participants: _0x7088e8,
  groupAdmins: _0x46fac4,
  isBotAdmins: _0x487a08,
  isAdmins: _0x3ed2e5,
  reply: _0x5b8978
}) => {
  try {
    let _0xcef2c5 = "\n───────────────────\n_*⚙️ TWORLD Ｓｙｓｔｅｍ  Ｉｎｆｏ ⚙️*_\n───────────────────\n\n┌────────────────\n│❖ *ᴜᴘᴛɪᴍᴇ :* _" + runtime(process.uptime()) + "_\n│❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _" + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB_\n│❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _" + os.hostname() + "_\n│❖ *ᴏᴡɴᴇʀ :* _Techno World_\n└────────────────\n\n> ᴄʀᴇᴀᴛᴇᴅ ʙʏ Techno world    \n";
    await _0x30b4ee.sendMessage(_0x2f3e3e, {
      'image': {
        'url': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/daenerys%20targaryen.jpeg"
      },
      'caption': _0xcef2c5,
      'contextInfo': {
        'mentionedJid': ["94779062397@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363192254044294@newsletter",
          'newsletterName': "TWORLD-ᴍᴅ ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TWORLD MD",
          'body': "Techno WORld",
          'mediaType': 0x1,
          'sourceUrl': 'https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt',
          'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x33e339
    });
  } catch (_0x5e3312) {
    console.log(_0x5e3312);
    _0x5b8978('' + _0x5e3312);
  }
});
cmd({
  'pattern': "ping",
  'desc': "Check bot online or no.",
  'category': "main",
  'react': '🚀',
  'filename': __filename
}, async (_0x4c41e4, _0x2e0d63, _0x170d08, {
  from: _0x6fea3c,
  quoted: _0xf8a709,
  body: _0x8e15b4,
  isCmd: _0x1524d1,
  command: _0x370ea4,
  args: _0x4bccfe,
  q: _0x4a6e5a,
  isGroup: _0x3d1127,
  sender: _0x54e1a7,
  senderNumber: _0x17b193,
  botNumber2: _0x25c914,
  botNumber: _0x43d521,
  pushname: _0x5710bd,
  isMe: _0x1045dd,
  isOwner: _0x3f2249,
  groupMetadata: _0x346624,
  groupName: _0x32c239,
  participants: _0x2e9256,
  groupAdmins: _0x4b243e,
  isBotAdmins: _0x28f2c8,
  isAdmins: _0x1c4d22,
  reply: _0x5acd92
}) => {
  try {
    const _0x4617ef = Date.now();
    const _0x15c1ce = Date.now();
    const _0x29cb9f = _0x15c1ce - _0x4617ef;
    await _0x4c41e4.sendMessage(_0x6fea3c, {
      'text': "*⚬TWORLD-ᴍᴅ ꜱᴘᴇᴇᴅ : " + _0x29cb9f + "ms*",
      'contextInfo': {
        'mentionedJid': ["94779062397@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363192254044294@newsletter",
          'newsletterName': "TWORLD-ᴍᴅ ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TWORLD MD",
          'body': "Techno World",
          'mediaType': 0x1,
          'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
          'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x2e0d63
    });
  } catch (_0x3857c6) {
    console.log(_0x3857c6);
    _0x5acd92('' + _0x3857c6);
  }
});
cmd({
  'pattern': "owner",
  'desc': "cmd",
  'category': 'system',
  'filename': __filename
}, async (_0x5be0b3, _0x53f964, _0x5d5bc1, {
  from: _0x4ec5f7,
  quoted: _0x76e9a9,
  body: _0x415591,
  isCmd: _0x2ba4e7,
  command: _0x37fdaa,
  args: _0x40d145,
  q: _0x595876,
  isGroup: _0x22b7ed,
  sender: _0x4dfbf0,
  senderNumber: _0x1c1d1b,
  botNumber2: _0x39bdb9,
  botNumber: _0x2b7c20,
  pushname: _0x2aa3a3,
  isMe: _0x59562e,
  isOwner: _0x265232,
  groupMetadata: _0x4bb09e,
  groupName: _0x3a1445,
  participants: _0x56dadb,
  groupAdmins: _0x4b7277,
  isBotAdmins: _0x1eef29,
  isAdmins: _0x5a2033,
  reply: _0x13200e
}) => {
  try {
    return await _0x5be0b3.sendMessage(_0x4ec5f7, {
      'image': {
        'url': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/daenerys%20targaryen.jpeg"
      },
      'caption': "\n┏━┫*⚬TWORLD-ᴍᴅ⚬*┣━✾\n┃\n┣━━━━━━━━━━━━━━━\n- T 💗⃤\n        404\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n- ECH 💗⃤\n        405\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n- NO 💗⃤\n        406\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n- WOR 💗⃤\n        407\n╰━━━━━━━━━━━━━━━\n\n> TWORLD-ᴍᴅ\n",
      'contextInfo': {
        'mentionedJid': ['94779062397@s.whatsapp.net'],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363192254044294@newsletter",
          'newsletterName': "TWORLD-ᴍᴅ ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TWORLD MD",
          'body': "Techno World",
          'mediaType': 0x1,
          'sourceUrl': 'https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt',
          'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x53f964
    });
  } catch (_0x28272e) {
    console.log(_0x28272e);
    _0x13200e('' + _0x28272e);
  }
});
cmd({
  'pattern': "restart",
  'desc': "restart the bot",
  'category': 'owner',
  'filename': __filename
}, async (_0x1e691e, _0x11c7ad, _0xebf9c6, {
  from: _0x12331f,
  isOwner: _0x1ce8f4,
  reply: _0x4f0815,
  q: _0x4455e7
}) => {
  try {
    if (!_0x1ce8f4) {
      return _0x4f0815("*❌ You are not the owner!*");
    }
    const {
      exec: _0x221540
    } = require('child_process');
    _0x4f0815("*restarting...*");
    await sleep(0x5dc);
    _0x221540("pm2 restart all");
  } catch (_0x388be9) {
    console.log(_0x388be9);
    _0x4f0815('' + _0x388be9);
  }
});
