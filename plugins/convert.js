const axios = require("axios");
const {
  cmd,
  commands
} = require("../command");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const googleTTS = require('google-tts-api');
const {
  getRandom
} = require("../lib/functions");
cmd({
  'pattern': "sticker",
  'react': "🤹‍♀️",
  'alias': ['s', "stic"],
  'desc': "ɪᴛ ᴄᴏɴᴠᴇʀᴛs ʏᴏᴜʀ ʀᴇᴘʟɪᴇᴅ ᴘʜᴏᴛᴏ ᴛᴏ sᴛɪᴄᴋᴇʀ.",
  'category': "convert",
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0x1823ba, _0x8f2b68, _0x575892, {
  from: _0x3377c4,
  reply: _0x4090f3,
  isCmd: _0x5a0ab5,
  command: _0x56cb52,
  args: _0x1f47cb,
  q: _0x15f82c,
  isGroup: _0x5e4832,
  pushname: _0x12c345
}) => {
  try {
    const _0x4b64d0 = _0x575892.quoted && (_0x575892.quoted.type === "imageMessage" || _0x575892.quoted.type === "viewOnceMessage" && _0x575892.quoted.msg.type === "imageMessage");
    const _0x55f551 = _0x575892.quoted && _0x575892.quoted.type === 'stickerMessage';
    if (_0x575892.type === 'imageMessage' || _0x4b64d0) {
      const _0x10e222 = getRandom(".jpg");
      const _0x62b828 = _0x4b64d0 ? await _0x575892.quoted.download() : await _0x575892.download();
      await require('fs').promises.writeFile(_0x10e222, _0x62b828);
      let _0xac7701 = new Sticker(_0x10e222, {
        'pack': _0x12c345,
        'author': "Sadeesha Coder",
        'type': _0x15f82c.includes("--crop") || _0x15f82c.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x45dab2 = await _0xac7701.toBuffer();
      return _0x1823ba.sendMessage(_0x3377c4, {
        'sticker': _0x45dab2
      }, {
        'quoted': _0x8f2b68
      });
    } else {
      if (_0x55f551) {
        const _0x3021e1 = getRandom(".webp");
        const _0x4ab3e7 = await _0x575892.quoted.download();
        await require('fs').promises.writeFile(_0x3021e1, _0x4ab3e7);
        let _0x32609c = new Sticker(_0x3021e1, {
          'pack': _0x12c345,
          'author': "Sadeesha Coder",
          'type': _0x15f82c.includes("--crop") || _0x15f82c.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0x496fd7 = await _0x32609c.toBuffer();
        return _0x1823ba.sendMessage(_0x3377c4, {
          'sticker': _0x496fd7
        }, {
          'quoted': _0x8f2b68
        });
      } else {
        return await _0x4090f3("ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴘʜᴏᴛᴏ ғᴏʀ sᴛɪᴄᴋᴇʀ!");
      }
    }
  } catch (_0x55dd7b) {
    _0x4090f3("Error !!");
    console.error(_0x55dd7b);
  }
});
cmd({
  'pattern': "tts",
  'desc': "download songs",
  'category': "download",
  'react': '👧',
  'filename': __filename
}, async (_0xc05495, _0xe82eb6, _0x305980, {
  from: _0x2e9a43,
  quoted: _0x30f791,
  body: _0x49a393,
  isCmd: _0x384963,
  command: _0xdc7358,
  args: _0x3e4eec,
  q: _0x4e3c0e,
  isGroup: _0x465fc4,
  sender: _0x13863d,
  senderNumber: _0x13f1aa,
  botNumber2: _0x3c364f,
  botNumber: _0x6a95e,
  pushname: _0x3e425a,
  isMe: _0x31b9a9,
  isOwner: _0x1408a9,
  groupMetadata: _0x3dc04b,
  groupName: _0x20edd2,
  participants: _0x32400c,
  groupAdmins: _0x199f09,
  isBotAdmins: _0x121d9c,
  isAdmins: _0x15a8a2,
  reply: _0xbf02f0
}) => {
  try {
    if (!_0x4e3c0e) {
      return _0xbf02f0("Need some text.");
    }
    const _0x2d4c08 = googleTTS.getAudioUrl(_0x4e3c0e, {
      'lang': "hi-IN",
      'slow': false,
      'host': "https://translate.google.com"
    });
    await _0xc05495.sendMessage(_0x2e9a43, {
      'audio': {
        'url': _0x2d4c08
      },
      'mimetype': "audio/mpeg",
      'ptt': true
    }, {
      'quoted': _0xe82eb6
    });
  } catch (_0x2c9a1f) {
    _0xbf02f0('' + _0x2c9a1f);
  }
});
cmd({
  'pattern': "trt",
  'alias': ['translate'],
  'desc': "🌍 Translate text between languages",
  'react': '⚡',
  'category': "other",
  'filename': __filename
}, async (_0x264fc0, _0x5d6dbe, _0x44cff1, {
  from: _0x4c9114,
  q: _0x3284e2,
  reply: _0x2c3a4f
}) => {
  try {
    const _0x6491d1 = _0x3284e2.split(" ");
    if (_0x6491d1.length < 0x2) {
      return _0x2c3a4f("❗ Please provide a language code and text. Usage: .translate [language code] [text]");
    }
    const _0x44ecb8 = _0x6491d1[0x0];
    const _0x201af2 = _0x6491d1.slice(0x1).join(" ");
    const _0x17e95e = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x201af2) + "&langpair=en|" + _0x44ecb8;
    const _0x126ca7 = await axios.get(_0x17e95e);
    const _0x2e88c2 = _0x126ca7.data.responseData.translatedText;
    const _0x409528 = "\n🌍 *TWORLD-MD TRANSLATION* 🌍\n\n🔤 *Original*: " + _0x201af2 + "\n\n🔠 *Translated*: " + _0x2e88c2 + "\n\n🌐 *Language*: " + _0x44ecb8.toUpperCase() + "\n\n> *created by Techno WOrld*";
    return _0x2c3a4f(_0x409528);
  } catch (_0x5ef155) {
    console.log(_0x5ef155);
    return _0x2c3a4f("⚠️ An error occurred data while translating the your text. Please try again later🤕");
  }
});
