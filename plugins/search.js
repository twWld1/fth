const {
  cmd,
  commands
} = require("../command");
const axios = require("axios");
const {
  Buffer
} = require("buffer");
cmd({
  'pattern': 'yts',
  'alias': ["ytsearch"],
  'use': ".yts sameer kutti",
  'react': '🔎',
  'desc': "Search and get details from youtube.",
  'category': "search",
  'filename': __filename
}, async (_0x41b899, _0x42de61, _0x45d1a7, {
  from: _0x55e1d8,
  l: _0x286975,
  quoted: _0x5c4ca0,
  body: _0x36d69b,
  isCmd: _0x167b5f,
  umarmd: _0x185134,
  args: _0x2601a2,
  q: _0x31d6fe,
  isGroup: _0x4e71ba,
  sender: _0x3f7265,
  senderNumber: _0x5548e1,
  botNumber2: _0x431ace,
  botNumber: _0x703604,
  pushname: _0x4adc64,
  isMe: _0xafff6e,
  isOwner: _0x2b05ca,
  groupMetadata: _0x243d71,
  groupName: _0x4a3c22,
  participants: _0x3db0d1,
  groupAdmins: _0x5ded27,
  isBotAdmins: _0x165155,
  isAdmins: _0x222185,
  reply: _0x5e6524
}) => {
  try {
    if (!_0x31d6fe) {
      return _0x5e6524("*Please give me words to search*");
    }
    try {
      let _0x797a9f = require("yt-search");
      var _0x1fe0bd = await _0x797a9f(_0x31d6fe);
    } catch (_0x432a53) {
      _0x286975(_0x432a53);
      return await _0x41b899.sendMessage(_0x55e1d8, {
        'text': "*Error !!*"
      }, {
        'quoted': _0x42de61
      });
    }
    var _0x5c58c5 = '';
    _0x1fe0bd.all.map(_0x393158 => {
      _0x5c58c5 += " *🌸" + _0x393158.title + "*\n🔗 " + _0x393158.url + "\n\n";
    });
    await _0x41b899.sendMessage(_0x55e1d8, {
      'text': _0x5c58c5
    }, {
      'quoted': _0x42de61
    });
  } catch (_0x40286c) {
    _0x286975(_0x40286c);
    _0x5e6524("*Error !!*");
  }
});
cmd({
  'pattern': "img",
  'alias': ["image"],
  'desc': "Search and send images from Google.",
  'react': "🖼️",
  'category': "media",
  'filename': __filename
}, async (_0x309d11, _0x59556b, _0x433371, {
  from: _0x4e3bbd,
  quoted: _0x36cc2b,
  body: _0x42cb0f,
  isCmd: _0x2eac7f,
  command: _0x5d1d97,
  args: _0x2e9f64,
  q: _0x255c9d,
  isGroup: _0x36309e,
  sender: _0x501b77,
  senderNumber: _0x3ccbe7,
  botNumber2: _0x5cc9cb,
  botNumber: _0x2a7d3a,
  pushname: _0x282a37,
  isMe: _0x448434,
  isOwner: _0x2c5901,
  groupMetadata: _0x3cb457,
  groupName: _0x331c8e,
  participants: _0x2ec406,
  groupAdmins: _0x5c34ae,
  isBotAdmins: _0x5ea51b,
  isAdmins: _0x52447,
  reply: _0x503f28
}) => {
  try {
    if (!_0x255c9d) {
      return _0x503f28("Please provide a search query for the image.");
    }
    const _0x4298fc = encodeURIComponent(_0x255c9d);
    const _0xd2ba89 = "https://www.googleapis.com/customsearch/v1?q=" + _0x4298fc + "&cx=" + "45b94c5cef39940d1" + "&key=" + "AIzaSyDebFT-uY_f82_An6bnE9WvVcgVbzwDKgU" + "&searchType=image&num=5";
    const _0xecc590 = await axios.get(_0xd2ba89);
    const _0x23c504 = _0xecc590.data;
    if (!_0x23c504.items || _0x23c504.items.length === 0x0) {
      return _0x503f28("No images found for your query.");
    }
    for (let _0x134be7 = 0x0; _0x134be7 < _0x23c504.items.length; _0x134be7++) {
      const _0x497912 = _0x23c504.items[_0x134be7].link;
      const _0x632d6 = await axios.get(_0x497912, {
        'responseType': "arraybuffer"
      });
      const _0x49e49e = Buffer.from(_0x632d6.data, "binary");
      await _0x309d11.sendMessage(_0x4e3bbd, {
        'image': _0x49e49e,
        'caption': "\n*💗Image " + (_0x134be7 + 0x1) + " from your search!💗*\n\n *Enjoy these images! 👾*\n\n> Lααɾα-ᴍᴅ"
      }, {
        'quoted': _0x59556b
      });
    }
  } catch (_0x4b45cc) {
    console.error(_0x4b45cc);
    _0x503f28("Error: " + _0x4b45cc.message);
  }
});
cmd({
  'pattern': 'githubstalk',
  'alias': ["github"],
  'desc': "Fetch detailed GitHub user profile including profile picture.",
  'category': "other",
  'react': '📚',
  'filename': __filename
}, async (_0x1b989f, _0x85a140, _0x1458a0, {
  from: _0x1062e9,
  quoted: _0x1ea738,
  body: _0x28675d,
  isCmd: _0x2a60bd,
  command: _0x13bd0b,
  args: _0x31a75b,
  q: _0x571d23,
  isGroup: _0x3ffe15,
  sender: _0x5b2721,
  senderNumber: _0x31cbec,
  botNumber2: _0x95315e,
  botNumber: _0x3e300d,
  pushname: _0x4a35da,
  isMe: _0x3986d2,
  isOwner: _0x532de3,
  groupMetadata: _0xd2667e,
  groupName: _0xe3e1a0,
  participants: _0x26878b,
  groupAdmins: _0x1f16da,
  isBotAdmins: _0x4d2d86,
  isAdmins: _0x5b5e88,
  reply: _0x190d2b
}) => {
  try {
    const _0x133ceb = _0x31a75b[0x0];
    if (!_0x133ceb) {
      return _0x190d2b("Please provide a GitHub username.");
    }
    const _0xfb5610 = "https://api.github.com/users/" + _0x133ceb;
    const _0x2f6dfa = await axios.get(_0xfb5610);
    const _0x28c86d = _0x2f6dfa.data;
    let _0x43c60d = "👨‍💻*TWORLD-ᴍᴅ GITSTALK*👨‍💻\n        \n👤 *ᴜꜱᴇʀ ɴᴀᴍᴇ*: " + (_0x28c86d.name || _0x28c86d.login) + "\n\n🔗 *ɢɪᴛʜᴜʙ ᴜʀʟ*:(" + _0x28c86d.html_url + ")\n\n📝 *ʙɪᴏ*: " + (_0x28c86d.bio || "Not available") + "\n\n🏙️ *ʟᴏᴄᴀᴛɪᴏɴ*: " + (_0x28c86d.location || 'Unknown') + "\n\n📊 *ᴘᴜʙʟɪᴄ ʀᴇᴘᴏ*: " + _0x28c86d.public_repos + "\n\n👥 *ꜰᴏʟʟᴏᴡᴇʀꜱ*: " + _0x28c86d.followers + " | Following: " + _0x28c86d.following + "\n\n📅 *ᴄʀᴇᴀᴛʀᴅ ᴅᴀᴛᴇ*: " + new Date(_0x28c86d.created_at).toDateString() + "\n\n🔭 *ᴘᴜʙʟɪᴄ ɢɪꜱᴛꜱ*: " + _0x28c86d.public_gists + "\n\n> TWORLD-ᴍᴅ\n";
    await _0x1b989f.sendMessage(_0x1062e9, {
      'image': {
        'url': _0x28c86d.avatar_url
      },
      'caption': _0x43c60d
    }, {
      'quoted': _0x85a140
    });
  } catch (_0x34283a) {
    console.log(_0x34283a);
    _0x190d2b("Error fetching data🤕: " + (_0x34283a.response ? _0x34283a.response.data.message : _0x34283a.message));
  }
});
cmd({
  'pattern': "weather",
  'alias': ["wether"],
  'desc': "🌤 Get weather information for a location",
  'react': '🌤',
  'category': 'other',
  'filename': __filename
}, async (_0x648e0e, _0x344290, _0x598e11, {
  from: _0x1e9340,
  q: _0xa1d0ce,
  reply: _0x41a1ab
}) => {
  try {
    if (!_0xa1d0ce) {
      return _0x41a1ab("❗ Please provide a city name. Usage: .weather [city name]");
    }
    const _0x24137a = "http://api.openweathermap.org/data/2.5/weather?q=" + _0xa1d0ce + "&appid=" + "2d61a72574c11c4f36173b627f8cb177" + "&units=metric";
    const _0x4e7b2c = await axios.get(_0x24137a);
    const _0x596ea4 = _0x4e7b2c.data;
    const _0x574e44 = "\n🌍 *Weather Information for " + _0x596ea4.name + ", " + _0x596ea4.sys.country + "* 🌍\n🌡️ *Temperature*: " + _0x596ea4.main.temp + "°C\n🌡️ *Feels Like*: " + _0x596ea4.main.feels_like + "°C\n🌡️ *Min Temp*: " + _0x596ea4.main.temp_min + "°C\n🌡️ *Max Temp*: " + _0x596ea4.main.temp_max + "°C\n💧 *Humidity*: " + _0x596ea4.main.humidity + "%\n☁️ *Weather*: " + _0x596ea4.weather[0x0].main + "\n🌫️ *Description*: " + _0x596ea4.weather[0x0].description + "\n💨 *Wind Speed*: " + _0x596ea4.wind.speed + " m/s\n🔽 *Pressure*: " + _0x596ea4.main.pressure + " hPa\n\n> TWORLD-ᴍᴅ\n";
    return _0x41a1ab(_0x574e44);
  } catch (_0x193b79) {
    console.log(_0x193b79);
    if (_0x193b79.response && _0x193b79.response.status === 0x194) {
      return _0x41a1ab("🚫 City not found. Please check the spelling and try again.");
    }
    return _0x41a1ab("⚠️ An error occurred while fetching the weather information. Please try again later.");
  }
});
