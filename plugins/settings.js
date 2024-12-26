const {
  cmd,
  commands
} = require("../command");
const config = require("../config");
cmd({
  'pattern': "settings",
  'alias': "setting",
  'desc': "To download songs.",
  'react': '⚙️',
  'category': "download",
  'filename': __filename
}, async (_0x21a96d, _0x32ff4c, _0x42d636, {
  from: _0x225c0d,
  isOwner: _0x7d85f4,
  reply: _0x55b613,
  q: _0x1fdd6f
}) => {
  try {
    if (!_0x7d85f4) {
      return _0x55b613("*❌ You are not the owner!*");
    }
    let _0x413a1a = "\n┏━┫*⚬TWORLD-ᴍᴅ-ꜱᴇᴛᴛɪɴɢꜱ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*ᴍᴏᴅᴇ ➭* _" + config.MODE + "_\n*ᴄʜᴀᴛ_ʀᴇᴘʟʏ ➭* _" + config.AUTO_REPLY + "_\n*ᴠᴏɪᴄᴇ_ʀᴇᴘʟʏ ➭* _" + config.AUTO_VOICE + "_\n*ꜱᴛɪᴄᴋᴇʀ_ʀᴇᴘʟʏ ➭* _" + config.AUTO_STICKER + "_\n*ᴀᴜᴛᴏ_ʀᴇᴀᴅ_ꜱᴛᴀᴛᴜꜱ ➭* _" + config.AUTO_READ_STATUS + "_\n*ᴀᴜᴛᴏ_ʀᴇᴀᴄᴛ ➭* _" + config.AUTO_REACT + "_\n*ᴀɴᴛɪ_ʙᴀᴅ_ᴡᴏʀᴅ ➭* _" + config.ANTI_BAD + "_\n*ᴀɴᴛɪ_ʟɪɴᴋ ➭* _" + config.ANTI_LINK + "_\n*ᴀᴜᴛᴏ_ʀᴇᴀᴅ_ᴍꜱɢ ➭* _" + config.READ_MESSAGE + "_\n*ꜰᴀᴋᴇ_ʀᴇᴄᴏʀᴅɪɴɢ ➭* _" + config.FAKE_RECORDING + "_\n\n> TWORLD-ᴍᴅ ✻\n";
    return await _0x21a96d.sendMessage(_0x225c0d, {
      'image': {
        'url': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/daenerys%20targaryen.jpeg"
      },
      'caption': _0x413a1a,
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
          'sourceUrl': 'https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt',
          'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x32ff4c
    });
  } catch (_0x35bc16) {
    console.log(_0x35bc16);
    _0x55b613('' + _0x35bc16);
  }
});
