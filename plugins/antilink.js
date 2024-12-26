const {
  cmd
} = require("../command");
const config = require("../config");
cmd({
  'on': "body"
}, async (_0x1e3e3a, _0x25d685, _0x3022c8, {
  from: _0xc2d0ee,
  body: _0x196c17,
  isGroup: _0x502c09,
  isAdmins: _0x1f90ba,
  isBotAdmins: _0x5799ff,
  reply: _0x4e92cf,
  sender: _0x260e26
}) => {
  try {
    const _0x328ff2 = ['wtf', 'mia', "xxx", "fuck", "sex", "huththa", "pakaya", 'ponnaya', 'hutto', 'lol'];
    if (!_0x502c09 || _0x1f90ba || !_0x5799ff) {
      return;
    }
    const _0x2189ce = _0x196c17.toLowerCase();
    const _0x4ed910 = _0x328ff2.some(_0x2319bd => _0x2189ce.includes(_0x2319bd));
    if (_0x4ed910 && config.ANTI_BAD === 'true') {
      await _0x1e3e3a.sendMessage(_0xc2d0ee, {
        'delete': _0x25d685.key
      }, {
        'quoted': _0x25d685
      });
      await _0x1e3e3a.sendMessage(_0xc2d0ee, {
        'text': "*🚫 ⚠️BAD WORDS NOT ALLOWED⚠️ 🚫*",
        'contextInfo': {
          'mentionedJid': ["94779062397@s.whatsapp.net"],
          'groupMentions': [],
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363192254044294@newsletter",
            'newsletterName': "Tworld-ᴍᴅ ✻",
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
        'quoted': _0x25d685
      });
    }
  } catch (_0x780810) {
    console.error(_0x780810);
    _0x4e92cf("An error occurred while processing the message.");
  }
});
const linkPatterns = [/https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi, /^https?:\/\/(www\.)?whatsapp\.com\/channel\/([a-zA-Z0-9_-]+)$/];
cmd({
  'on': "body"
}, async (_0x1a7f98, _0x1c28e8, _0x3938f0, {
  from: _0x250c21,
  body: _0x1111de,
  sender: _0x6247af,
  isGroup: _0x565415,
  isAdmins: _0x4b28b2,
  isBotAdmins: _0x30fc2c,
  reply: _0xe3e70f
}) => {
  try {
    if (!_0x565415 || _0x4b28b2 || !_0x30fc2c) {
      return;
    }
    const _0x463151 = linkPatterns.some(_0x29ba42 => _0x29ba42.test(_0x1111de));
    if (_0x463151 && config.ANTI_LINK === 'true') {
      await _0x1a7f98.sendMessage(_0x250c21, {
        'delete': _0x1c28e8.key
      }, {
        'quoted': _0x1c28e8
      });
      await _0x1a7f98.sendMessage(_0x250c21, {
        'text': "*⚠️ Links are not allowed in this group*\n@" + _0x6247af.split('@')[0x0] + " has been removed. 🚫",
        'mentions': [_0x6247af],
        'contextInfo': {
          'mentionedJid': ['94779062397@s.whatsapp.net'],
          'groupMentions': [],
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': '120363192254044294@newsletter',
            'newsletterName': "TWORLD-ᴍᴅ ✻",
            'serverMessageId': 0x3e7
          },
          'externalAdReply': {
            'title': "TWORLD MD",
            'body': "ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ",
            'mediaType': 0x1,
            'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
            'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
            'renderLargerThumbnail': false,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x1c28e8
      });
    }
  } catch (_0x2f5fde) {
    console.error(_0x2f5fde);
    _0xe3e70f("An error occurred while processing the message.");
  }
});
