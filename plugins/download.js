const {
  fetchJson
} = require('../lib/functions');
const {
  downloadTiktok
} = require("@mrnima/tiktok-downloader");
const {
  facebook
} = require("@mrnima/facebook-downloader");
const cheerio = require("cheerio");
const {
  igdl
} = require("ruhend-scraper");
const axios = require("axios");
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': 'tiktok',
  'alias': ['tt'],
  'react': '🎥',
  'desc': "download tt videos",
  'category': "download",
  'filename': __filename
}, async (_0x29bd6f, _0x7a8d02, _0x236587, {
  from: _0x1e41c0,
  quoted: _0x5962f0,
  body: _0x2e4298,
  isCmd: _0x2d1506,
  command: _0x485ca1,
  args: _0x26ee92,
  q: _0x45d8fe,
  isGroup: _0x5630bd,
  sender: _0xc0e8f3,
  senderNumber: _0x8d1319,
  botNumber2: _0x48d1db,
  botNumber: _0xbae04,
  pushname: _0x4c17e3,
  isMe: _0x1b9a78,
  isOwner: _0x275c02,
  groupMetadata: _0x309c5a,
  groupName: _0x3e93f9,
  participants: _0x58557b,
  groupAdmins: _0x868db8,
  isBotAdmins: _0x23e710,
  isAdmins: _0x2ea035,
  reply: _0x37b263
}) => {
  try {
    if (!_0x45d8fe && !_0x45d8fe.startsWith("https://")) {
      return _0x37b263("*`Need url`*");
    }
    _0x236587.react('⬇️');
    let _0x4118f3 = await downloadTiktok(_0x45d8fe);
    let _0x14189e = "\n┏━┫*⚬Tworld-ᴍᴅ-ᴛɪᴋᴛᴏᴋ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*ᴛɪᴛʟᴇ*:  " + _0x4118f3.result.title + "\n\n*🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n*ᴠɪᴅᴇᴏ ꜰɪʟᴇ* 🎬\n\n*1*     ┃  *ꜱᴅ Qᴜᴀʟɪᴛʏ*\n*2*     ┃  *ʜᴅ Qᴜᴀʟɪᴛʏ*\n\n*ᴀᴜᴅɪᴏ ꜰɪʟᴇ*🎧\n\n*3*     ┃  *ᴀᴜᴅɪᴏ*\n\n> TWOrld-ᴍᴅ ✻\n     ";
    const _0xcd2d03 = await _0x29bd6f.sendMessage(_0x1e41c0, {
      'image': {
        'url': _0x4118f3.result.image
      },
      'caption': _0x14189e,
      'contextInfo': {
        'mentionedJid': ['94779062397@s.whatsapp.net'],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363192254044294@newsletter",
          'newsletterName': "Tworld-ᴍᴅ ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "Tworld MD",
          'body': "Techno World",
          'mediaType': 0x1,
          'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
          'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x7a8d02
    });
    const _0x1f8f50 = _0xcd2d03.key.id;
    _0x29bd6f.ev.on("messages.upsert", async _0x3dc9b0 => {
      const _0x8c4899 = _0x3dc9b0.messages[0x0];
      if (!_0x8c4899.message) {
        return;
      }
      const _0x28fd23 = _0x8c4899.message.conversation || _0x8c4899.message.extendedTextMessage?.['text'];
      const _0xb537b = _0x8c4899.key.remoteJid;
      const _0x10addd = _0x8c4899.message.extendedTextMessage && _0x8c4899.message.extendedTextMessage.contextInfo.stanzaId === _0x1f8f50;
      if (_0x10addd) {
        await _0x29bd6f.sendMessage(_0xb537b, {
          'react': {
            'text': '⬇️',
            'key': _0x8c4899.key
          }
        });
        let _0x50617e = _0x4118f3.result;
        await _0x29bd6f.sendMessage(_0xb537b, {
          'react': {
            'text': '⬆️',
            'key': _0x8c4899.key
          }
        });
        if (_0x28fd23 === '1') {
          await _0x29bd6f.sendMessage(_0xb537b, {
            'video': {
              'url': _0x50617e.dl_link.download_mp4_1
            },
            'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Techno WOrld · · ·*",
            'contextInfo': {
              'mentionedJid': ["94779062397@s.whatsapp.net"],
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
                'body': "Techno World",
                'mediaType': 0x1,
                'sourceUrl': 'https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt',
                'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x8c4899
          });
        } else {
          if (_0x28fd23 === '2') {
            await _0x29bd6f.sendMessage(_0xb537b, {
              'video': {
                'url': _0x50617e.dl_link.download_mp4_2
              },
              'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Techno World · · ·*",
              'contextInfo': {
                'mentionedJid': ["94779062397@s.whatsapp.net"],
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
                  'body': "Techno World",
                  'mediaType': 0x1,
                  'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
                  'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x8c4899
            });
          } else if (_0x28fd23 === '3') {
            await _0x29bd6f.sendMessage(_0xb537b, {
              'audio': {
                'url': _0x50617e.dl_link.download_mp3
              },
              'mimetype': "audio/mpeg"
            }, {
              'quoted': _0x8c4899
            });
          }
        }
      }
    });
  } catch (_0x347969) {
    console.log(_0x347969);
    _0x37b263('' + _0x347969);
  }
});
cmd({
  'pattern': 'fb',
  'alias': ["facebook"],
  'desc': "Download Facebook videos",
  'category': "download",
  'filename': __filename
}, async (_0x3a191b, _0x492873, _0x4a2db5, {
  from: _0x9f3274,
  quoted: _0x527579,
  body: _0x4d4c92,
  isCmd: _0x3a3ab3,
  command: _0x264eb1,
  args: _0x544630,
  q: _0xdb06d2,
  isGroup: _0x6acfde,
  sender: _0x3a4b5c,
  senderNumber: _0x356bd8,
  botNumber2: _0x4e23b7,
  botNumber: _0x33dc06,
  pushname: _0x3e0bfb,
  isMe: _0x136a11,
  isOwner: _0x25bd4e,
  groupMetadata: _0x2aa9c3,
  groupName: _0x3470da,
  participants: _0x446b8c,
  groupAdmins: _0x23dbc0,
  isBotAdmins: _0x2a640c,
  isAdmins: _0x3b238e,
  reply: _0x412d09
}) => {
  try {
    if (!_0xdb06d2 || !_0xdb06d2.startsWith("https://")) {
      return _0x3a191b.sendMessage(_0x9f3274, {
        'text': "*`Need URL`*"
      }, {
        'quoted': _0x492873
      });
    }
    await _0x3a191b.sendMessage(_0x9f3274, {
      'react': {
        'text': '⏳',
        'key': _0x492873.key
      }
    });
    const _0x593464 = await facebook(_0xdb06d2);
    const _0x5aa00c = "\n┏━┫*⚬TWORLD-ᴍᴅ-ꜰʙ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*⌛ᴅᴜʀᴀᴛɪᴏɴ* : " + _0x593464.result.duration + "\n\n*🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n*ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎬*\n\n*1.1*     ┃  *ꜱᴅ Qᴜᴀʟɪᴛʏ*\n*1.2*     ┃  *ʜᴅ Qᴜᴀʟɪᴛʏ*\n\n*ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎧*\n\n*2.1*     ┃  *ᴀᴜᴅɪᴏ*\n*2.2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n*2.3*     ┃  *ᴠᴏɪᴄᴇ*\n\n> TWORLD-ᴍᴅ ✻\n";
    const _0x2ea0ab = await _0x3a191b.sendMessage(_0x9f3274, {
      'image': {
        'url': _0x593464.result.thumbnail
      },
      'caption': _0x5aa00c,
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
          'title': "Tworld MD",
          'body': "Techno World",
          'mediaType': 0x1,
          'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
          'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x492873
    });
    const _0x3a516a = _0x2ea0ab.key.id;
    _0x3a191b.ev.on("messages.upsert", async _0x2e0760 => {
      const _0x15826f = _0x2e0760.messages[0x0];
      if (!_0x15826f.message) {
        return;
      }
      const _0x450970 = _0x15826f.message.conversation || _0x15826f.message.extendedTextMessage?.["text"];
      const _0x3d4f58 = _0x15826f.key.remoteJid;
      const _0x41cfbe = _0x15826f.message.extendedTextMessage && _0x15826f.message.extendedTextMessage.contextInfo.stanzaId === _0x3a516a;
      if (_0x41cfbe) {
        await _0x3a191b.sendMessage(_0x3d4f58, {
          'react': {
            'text': '⬇️',
            'key': _0x15826f.key
          }
        });
        let _0x367840 = _0x593464.result;
        await _0x3a191b.sendMessage(_0x3d4f58, {
          'react': {
            'text': '⬆️',
            'key': _0x15826f.key
          }
        });
        if (_0x450970 === "1.1") {
          await _0x3a191b.sendMessage(_0x3d4f58, {
            'video': {
              'url': _0x367840.links.SD
            },
            'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Techno World · · ·*",
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
            'quoted': _0x15826f
          });
        } else {
          if (_0x450970 === "1.2") {
            await _0x3a191b.sendMessage(_0x3d4f58, {
              'video': {
                'url': _0x367840.links.HD
              },
              'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Techno World · · ·*",
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
                  'title': "Tworld MD",
                  'body': "Techno World",
                  'mediaType': 0x1,
                  'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
                  'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x15826f
            });
          } else {
            if (_0x450970 === "2.1") {
              await _0x3a191b.sendMessage(_0x3d4f58, {
                'audio': {
                  'url': _0x367840.links.SD
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x15826f
              });
            } else {
              if (_0x450970 === "2.2") {
                await _0x3a191b.sendMessage(_0x3d4f58, {
                  'document': {
                    'url': _0x367840.links.SD
                  },
                  'mimetype': "audio/mpeg",
                  'fileName': "Lara-MD/FBDL.mp3",
                  'caption': "**© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Techno WOrld· · ·**",
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
                      'body': "Techno World",
                      'mediaType': 0x1,
                      'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
                      'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
                      'renderLargerThumbnail': false,
                      'showAdAttribution': true
                    }
                  }
                }, {
                  'quoted': _0x15826f
                });
              } else if (_0x450970 === "2.3") {
                await _0x3a191b.sendMessage(_0x3d4f58, {
                  'audio': {
                    'url': _0x367840.links.SD
                  },
                  'mimetype': 'audio/mp4',
                  'ptt': true
                }, {
                  'quoted': _0x15826f
                });
              }
            }
          }
        }
      }
    });
  } catch (_0x44a996) {
    console.log(_0x44a996);
    _0x412d09('' + _0x44a996);
  }
});
cmd({
  'pattern': 'twitter',
  'alias': ["tweet", "twdl"],
  'desc': "Download Twitter videos",
  'category': 'download',
  'filename': __filename
}, async (_0x2115f2, _0x2e7b7c, _0x35e75e, {
  from: _0x21fbc2,
  quoted: _0x7ed43c,
  body: _0x1074ab,
  isCmd: _0x7ac63e,
  command: _0x2632d4,
  args: _0x24a22e,
  q: _0x45e793,
  isGroup: _0x1f4ee7,
  sender: _0x3a35f3,
  senderNumber: _0x588460,
  botNumber2: _0x234f63,
  botNumber: _0x219fea,
  pushname: _0x3ef225,
  isMe: _0x48cd79,
  isOwner: _0x20dade,
  groupMetadata: _0x167f0f,
  groupName: _0x376e36,
  participants: _0x3d6c39,
  groupAdmins: _0x217551,
  isBotAdmins: _0x5985ab,
  isAdmins: _0x471d26,
  reply: _0x3e21f6
}) => {
  try {
    if (!_0x45e793 || !_0x45e793.startsWith("https://")) {
      return _0x2115f2.sendMessage(_0x21fbc2, {
        'text': "❌ Please provide a valid Twitter URL."
      }, {
        'quoted': _0x2e7b7c
      });
    }
    await _0x2115f2.sendMessage(_0x21fbc2, {
      'react': {
        'text': '⏳',
        'key': _0x2e7b7c.key
      }
    });
    const _0x1881af = await axios.get("https://www.dark-yasiya-api.site/download/twitter?url=" + _0x45e793);
    const _0x32a365 = _0x1881af.data;
    if (!_0x32a365 || !_0x32a365.status || !_0x32a365.result) {
      return _0x35e75e.reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }
    const {
      desc: _0x2506cb,
      thumb: _0x5e9601,
      video_sd: _0x1aa0aa,
      video_hd: _0x2ff751
    } = _0x32a365.result;
    const _0xecfab = await _0x2115f2.sendMessage(_0x21fbc2, {
      'image': {
        'url': _0x5e9601
      },
      'caption': "\n┏━┫*⚬TWORLD-ᴍᴅ-ᴛᴡɪᴛᴇʀ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*\n\n*ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎬*\n\n*1.1*     ┃  *ꜱᴅ Qᴜᴀʟɪᴛʏ*\n*1.2*     ┃  *ʜᴅ Qᴜᴀʟɪᴛʏ*\n\n*ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎧*\n\n*2.1*     ┃  *ᴀᴜᴅɪᴏ*\n*2.2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n*2.3*     ┃  *ᴠᴏɪᴄᴇ*\n\n> TWORLD-ᴍᴅ ✻\n",
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
          'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
          'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x2e7b7c
    });
    const _0x4176ab = _0xecfab.key.id;
    _0x2115f2.ev.on("messages.upsert", async _0x17515b => {
      const _0x340b80 = _0x17515b.messages[0x0];
      if (!_0x340b80.message) {
        return;
      }
      const _0x169212 = _0x340b80.message.conversation || _0x340b80.message.extendedTextMessage?.["text"];
      const _0x270a8c = _0x340b80.key.remoteJid;
      const _0xe869d6 = _0x340b80.message.extendedTextMessage && _0x340b80.message.extendedTextMessage.contextInfo.stanzaId === _0x4176ab;
      if (_0xe869d6) {
        await _0x2115f2.sendMessage(_0x270a8c, {
          'react': {
            'text': '⬇️',
            'key': _0x340b80.key
          }
        });
        if (_0x169212 === "1.1") {
          await _0x2115f2.sendMessage(_0x270a8c, {
            'video': {
              'url': _0x1aa0aa
            },
            'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Techno World · · ·*"
          }, {
            'quoted': _0x340b80
          });
        } else {
          if (_0x169212 === '1.2') {
            await _0x2115f2.sendMessage(_0x270a8c, {
              'video': {
                'url': _0x2ff751
              },
              'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Techno World · · ·*"
            }, {
              'quoted': _0x340b80
            });
          } else {
            if (_0x169212 === "2.1") {
              await _0x2115f2.sendMessage(_0x270a8c, {
                'audio': {
                  'url': _0x1aa0aa
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x340b80
              });
            } else {
              if (_0x169212 === "2.2") {
                await _0x2115f2.sendMessage(_0x270a8c, {
                  'document': {
                    'url': _0x1aa0aa
                  },
                  'mimetype': 'audio/mpeg',
                  'fileName': "ʟᴀʀᴀ-ᴍᴅ/TWDL.mp3",
                  'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Techno World · · ·*",
                  'contextInfo': {
                    'mentionedJid': ["94779062397@s.whatsapp.net"],
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
                      'body': "Techno World",
                      'mediaType': 0x1,
                      'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
                      'thumbnailUrl': 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg',
                      'renderLargerThumbnail': false,
                      'showAdAttribution': true
                    }
                  }
                }, {
                  'quoted': _0x340b80
                });
              } else if (_0x169212 === "2.3") {
                await _0x2115f2.sendMessage(_0x270a8c, {
                  'audio': {
                    'url': _0x1aa0aa
                  },
                  'mimetype': "audio/mp4",
                  'ptt': true
                }, {
                  'quoted': _0x340b80
                });
              }
            }
          }
        }
      }
    });
  } catch (_0x38bbba) {
    console.log(_0x38bbba);
    _0x3e21f6("An error occurred: " + _0x38bbba);
  }
});
cmd({
  'pattern': "mediafire",
  'desc': "To download MediaFire files.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x4fb709, _0x59defa, _0x151856, {
  from: _0x125094,
  quoted: _0x4dd329,
  body: _0x38a7c9,
  isCmd: _0x5036a0,
  command: _0x715ece,
  args: _0x97fbe4,
  q: _0x2da1d3,
  isGroup: _0x53341a,
  sender: _0x810150,
  senderNumber: _0x341eff,
  botNumber2: _0x386489,
  botNumber: _0x146d22,
  pushname: _0x5d55e9,
  isMe: _0x40f174,
  isOwner: _0x4147ee,
  groupMetadata: _0x3c8a81,
  groupName: _0x33d5fb,
  participants: _0x3a47b1,
  groupAdmins: _0x4bbb23,
  isBotAdmins: _0x4f5913,
  isAdmins: _0x27bfbc,
  reply: _0x4463de
}) => {
  try {
    if (!_0x2da1d3) {
      return _0x151856.reply("Please provide a valid MediaFire link.");
    }
    _0x151856.react('⬇️');
    const _0x527270 = await axios.get("https://www.dark-yasiya-api.site/download/mfire?url=" + _0x2da1d3);
    const _0x54b6a3 = _0x527270.data;
    if (!_0x54b6a3 || !_0x54b6a3.status || !_0x54b6a3.result || !_0x54b6a3.result.dl_link) {
      return _0x151856.reply("Failed to fetch MediaFire download link. Ensure the link is valid and public.");
    }
    const _0x5d9bda = _0x54b6a3.result.dl_link;
    const _0x143e71 = _0x54b6a3.result.fileName || 'mediafire_download';
    const _0x26a0dc = _0x54b6a3.result.fileType || 'application/octet-stream';
    _0x151856.react('⬆️');
    let _0x12e5f0 = "\n┏━┫*⚬TWORLD-ᴍᴅ-ᴍꜰɪʀᴇ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*ꜰɪʟᴇ ɴᴀᴍᴇ :* " + _0x143e71 + "\n\n*ꜰɪʟᴇ ᴛʏᴘᴇ :* " + _0x26a0dc + "\n\n> TWORLD-ᴍᴅ ✻\n        ";
    await _0x4fb709.sendMessage(_0x125094, {
      'document': {
        'url': _0x5d9bda
      },
      'mimetype': _0x26a0dc,
      'fileName': _0x143e71,
      'caption': _0x12e5f0,
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
      'quoted': _0x59defa
    });
  } catch (_0x3da7b2) {
    console.error(_0x3da7b2);
    _0x4463de("An error occurred: " + _0x3da7b2.message);
  }
});
cmd({
  'pattern': 'ig',
  'desc': "To download instagram videos.",
  'react': '🎥',
  'category': 'download',
  'filename': __filename
}, async (_0x45ee96, _0x3b593e, _0x357e54, {
  from: _0x224efc,
  quoted: _0x47a508,
  body: _0x3f473f,
  isCmd: _0xf8af90,
  command: _0x2d0e7a,
  args: _0xd835a5,
  q: _0xd209ae,
  isGroup: _0x47468b,
  sender: _0x2dc92b,
  senderNumber: _0x1adf48,
  botNumber2: _0x262cde,
  botNumber: _0xdc273c,
  pushname: _0x475357,
  isMe: _0x324e0d,
  isOwner: _0x59653d,
  groupMetadata: _0x445146,
  groupName: _0x31d8cd,
  participants: _0x435b4a,
  groupAdmins: _0x4d0f13,
  isBotAdmins: _0x4272d2,
  isAdmins: _0x337cd5,
  reply: _0x27ecd1
}) => {
  try {
    if (!_0xd209ae) {
      return _0x357e54.reply("Please Give Me a vaild Link...");
    }
    _0x357e54.react('⬇️');
    let _0x856d33 = await igdl(_0xd209ae);
    let _0x30dac8 = await _0x856d33.data;
    for (let _0x1b693a = 0x0; _0x1b693a < 0x14; _0x1b693a++) {
      let _0x119f1a = _0x30dac8[_0x1b693a];
      let _0x3a53f0 = _0x119f1a.url;
      _0x357e54.react('⬆️');
      await _0x45ee96.sendMessage(_0x224efc, {
        'video': {
          'url': _0x3a53f0
        },
        'mimetype': "video/mp4",
        'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ Techno World · · ·*",
        'contextInfo': {
          'mentionedJid': ["94779062397@s.whatsapp.net"],
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
            'body': "Techno World",
            'mediaType': 0x1,
            'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
            'thumbnailUrl': 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg',
            'renderLargerThumbnail': false,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x3b593e
      });
      _0x357e54.react('✅');
    }
  } catch (_0x2fba0e) {
    console.log(_0x2fba0e);
  }
});
async function xdl(_0x35ccff) {
  return new Promise((_0x478bf7, _0x740975) => {
    fetch('' + _0x35ccff, {
      'method': "get"
    }).then(_0x2b310c => _0x2b310c.text()).then(_0x589ad7 => {
      const _0x3d925d = cheerio.load(_0x589ad7, {
        'xmlMode': false
      });
      const _0x4dd266 = _0x3d925d("meta[property=\"og:title\"]").attr("content");
      const _0x3c6c9e = _0x3d925d("meta[property=\"og:duration\"]").attr('content');
      const _0x1c0792 = _0x3d925d("meta[property=\"og:image\"]").attr('content');
      const _0x4dfcde = _0x3d925d("meta[property=\"og:video:type\"]").attr('content');
      const _0x75cb56 = _0x3d925d("meta[property=\"og:video:width\"]").attr("content");
      const _0x27b04c = _0x3d925d("meta[property=\"og:video:height\"]").attr("content");
      const _0x501c12 = _0x3d925d("span.metadata").text();
      const _0x2d3801 = _0x3d925d("#video-player-bg > script:nth-child(6)").html();
      const _0x5be27e = {
        'low': (_0x2d3801.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[0x1],
        'high': _0x2d3801.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[0x1],
        'HLS': _0x2d3801.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[0x1],
        'thumb': _0x2d3801.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[0x1],
        'thumb69': _0x2d3801.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[0x1],
        'thumbSlide': _0x2d3801.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[0x1],
        'thumbSlideBig': _0x2d3801.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[0x1]
      };
      _0x478bf7({
        'status': true,
        'result': {
          'title': _0x4dd266,
          'URL': _0x35ccff,
          'duration': _0x3c6c9e,
          'image': _0x1c0792,
          'videoType': _0x4dfcde,
          'videoWidth': _0x75cb56,
          'videoHeight': _0x27b04c,
          'info': _0x501c12,
          'files': _0x5be27e
        }
      });
    })["catch"](_0xb4f901 => _0x740975({
      'status': false,
      'result': _0xb4f901
    }));
  });
}
cmd({
  'pattern': "xnxxdown",
  'alias': ["dlxnxx", "xnxxdl"],
  'react': '🫣',
  'desc': "Download xnxx videos",
  'category': 'nsfw',
  'use': ".xnxx <xnxx link>",
  'filename': __filename
}, async (_0x5e7229, _0xf68c87, _0x30ad8b, {
  from: _0x2b85d2,
  l: _0x29a811,
  quoted: _0x3855fc,
  body: _0x424222,
  isCmd: _0x586f0e,
  command: _0x38f631,
  args: _0x3ea14a,
  q: _0x326fa7,
  isGroup: _0x13fc28,
  sender: _0xb7dc8,
  senderNumber: _0x4e8536,
  botNumber2: _0x2a3d62,
  botNumber: _0x263489,
  pushname: _0x36c442,
  isMe: _0x397c13,
  isOwner: _0x554d11,
  groupMetadata: _0x1a3e7b,
  groupName: _0xb88e80,
  participants: _0x1ff8a9,
  groupAdmins: _0x4531b6,
  isBotAdmins: _0x12cc06,
  isAdmins: _0x2599c0,
  reply: _0x16dd72
}) => {
  try {
    if (!_0x326fa7) {
      return _0x16dd72("*Please give me url !!*");
    }
    let _0x4dc714 = await xdl(_0x326fa7);
    let _0x5eea69 = _0x4dc714.result.title;
    await _0x5e7229.sendMessage(_0x2b85d2, {
      'video': {
        'url': _0x4dc714.result.files.high
      },
      'caption': _0x5eea69,
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
          'sourceUrl': "https://github.com/sadiyamin",
          'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0xf68c87
    });
  } catch (_0x4149b9) {
    _0x16dd72("*Error !!*");
    console.log(_0x4149b9);
  }
});
cmd({
  'pattern': "xvdown",
  'alias': ['dlxv', 'xvdl'],
  'react': '🫣',
  'desc': "Download xvideos videos",
  'category': "nsfw",
  'use': ".xv <xvideos link>",
  'filename': __filename
}, async (_0xcbff32, _0x311dca, _0x402ecd, {
  from: _0x5f3e78,
  l: _0x30677f,
  quoted: _0x533b62,
  body: _0x20b5cb,
  isCmd: _0xa7b9b7,
  command: _0x14c846,
  args: _0x2ed960,
  q: _0x5bba94,
  isGroup: _0x43adce,
  sender: _0x4c4305,
  senderNumber: _0x1a7b74,
  botNumber2: _0x17424c,
  botNumber: _0x453999,
  pushname: _0x21afc8,
  isMe: _0x197c46,
  isOwner: _0x43cc97,
  groupMetadata: _0x312c14,
  groupName: _0x3270a7,
  participants: _0x94d100,
  groupAdmins: _0x49e2da,
  isBotAdmins: _0x35b2cd,
  isAdmins: _0x452c3c,
  reply: _0x4b93fb
}) => {
  try {
    if (!_0x5bba94) {
      return _0x4b93fb("*Please give me url !!*");
    }
    let _0x432c07 = await fetchJson("https://www.dark-yasiya-api.site/download/xvideo?url=" + _0x5bba94);
    const _0x384d13 = "\n   🔞 *XVIDEO DOWNLOADER* 🔞\n\n     \n• *Title* - " + _0x432c07.result.title + "\n\n• *Views* - " + _0x432c07.result.views + "\n\n• *Like* - " + _0x432c07.result.like + "\n\n• *Deslike* - " + _0x432c07.result.deslike + "\n\n• *Size* - " + _0x432c07.result.size;
    await _0xcbff32.sendMessage(_0x5f3e78, {
      'video': {
        'url': _0x432c07.result.dl_link
      },
      'caption': _0x384d13,
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
      'quoted': _0x311dca
    });
  } catch (_0x3840d3) {
    _0x4b93fb("*Error !!*");
    console.log(_0x3840d3);
  }
});
cmd({
  'pattern': "apk",
  'desc': "Download apk.",
  'category': "download",
  'filename': __filename
}, async (_0x424939, _0xc2ed01, _0x1b6752, {
  from: _0x9b7c66,
  quoted: _0x21f1c1,
  body: _0x3a9114,
  isCmd: _0x4745df,
  command: _0x267b67,
  args: _0xdee552,
  q: _0x34c8c9,
  isGroup: _0x4ffe27,
  sender: _0x97b3d7,
  senderNumber: _0x3b8ec8,
  botNumber2: _0x586135,
  botNumber: _0x320121,
  pushname: _0x1b7a2e,
  isMe: _0x2109d8,
  isOwner: _0x35db42,
  groupMetadata: _0xb16a77,
  groupName: _0x4f644e,
  participants: _0x5da777,
  groupAdmins: _0x2d07ab,
  isBotAdmins: _0x208ac8,
  isAdmins: _0x5b30df,
  reply: _0x5598d2
}) => {
  try {
    await _0x1b6752.react('⬇');
    const _0x4f27e0 = 'http://ws75.aptoide.com/api/7/apps/search/query=' + _0x34c8c9 + '/limit=1';
    const _0x2cc497 = await axios.get(_0x4f27e0);
    const _0xb1de40 = _0x2cc497.data;
    let _0x34cbd8 = _0xb1de40.datalist.list[0x0].size % 0xf4240;
    let _0x51e0d1 = '.' + _0x34cbd8;
    let _0x2fe240 = _0xb1de40.datalist.list[0x0].size / 0xf4240;
    let _0xcfcce6 = _0x2fe240 - _0x51e0d1;
    let _0x301fa7 = "\n┏━┫*⚬TWORLD-ᴍᴅ-ᴀᴘᴋ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*🏷️ Nᴀᴍᴇ :* " + _0xb1de40.datalist.list[0x0].name + "\n\n*📦 Sɪᴢᴇ :* " + _0xcfcce6 + "MB\n\n*🔖 Pᴀᴄᴋᴀɢᴇ :* " + _0xb1de40.datalist.list[0x0]['package'] + "\n\n*📆 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* " + _0xb1de40.datalist.list[0x0].updated + "\n\n*👤 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* " + _0xb1de40.datalist.list[0x0].developer.name + "\n\n> TWORLD-ᴍᴅ ✻\n";
    await _0x1b6752.react('⬆');
    await _0x424939.sendMessage(_0x9b7c66, {
      'document': {
        'url': _0xb1de40.datalist.list[0x0].file.path_alt
      },
      'fileName': _0xb1de40.datalist.list[0x0].name,
      'mimetype': "application/vnd.android.package-archive",
      'caption': _0x301fa7,
      'contextInfo': {
        'mentionedJid': ["94779062397@s.whatsapp.net"],
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
          'body': "Techno WORLD",
          'mediaType': 0x1,
          'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
          'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0xc2ed01
    });
    await _0x1b6752.react('✅');
  } catch (_0x3f7dce) {
    console.log(_0x3f7dce);
    _0x5598d2('' + _0x3f7dce);
  }
});
cmd({
  'pattern': 'gdrive',
  'desc': "To download Gdrive files.",
  'react': '🌐',
  'category': "download",
  'filename': __filename
}, async (_0x56a05d, _0x65ae42, _0x7a82ba, {
  from: _0x5a8626,
  quoted: _0x19783f,
  body: _0x25b2c0,
  isCmd: _0x21771c,
  command: _0x59850b,
  args: _0x13671f,
  q: _0x1cd351,
  isGroup: _0x47a204,
  sender: _0x51c200,
  senderNumber: _0x2388ab,
  botNumber2: _0x50aa2b,
  botNumber: _0x4a3422,
  pushname: _0x40e827,
  isMe: _0x2690b2,
  isOwner: _0x35ba7a,
  groupMetadata: _0x54fdd2,
  groupName: _0x454345,
  participants: _0xa0733e,
  groupAdmins: _0x51df92,
  isBotAdmins: _0x316adb,
  isAdmins: _0x22ee07,
  reply: _0x17d72e
}) => {
  try {
    await _0x56a05d.sendMessage(_0x5a8626, {
      'react': {
        'text': '⬇️',
        'key': _0x65ae42.key
      }
    });
    if (!_0x1cd351) {
      return _0x7a82ba.reply("Please Give Me a vaild Link...");
    }
    const _0x61c2ae = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0x1cd351 + "&apikey=mnp3grlZ";
    const _0xd973b3 = await axios.get(_0x61c2ae);
    const _0x2f849b = _0xd973b3.data.result.downloadUrl;
    if (_0x2f849b) {
      await _0x56a05d.sendMessage(_0x5a8626, {
        'react': {
          'text': '⬆️',
          'key': _0x65ae42.key
        }
      });
      await _0x56a05d.sendMessage(_0x5a8626, {
        'document': {
          'url': _0x2f849b
        },
        'mimetype': _0xd973b3.data.result.mimetype,
        'fileName': _0xd973b3.data.result.fileName,
        'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ TWORLD · · ·*\n\n> TWORLD-ᴍᴅ ✻",
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
            'body': "Techno World",
            'mediaType': 0x1,
            'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
            'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
            'renderLargerThumbnail': false,
            'showAdAttribution': true
          }
        }
      }, {
        'quoted': _0x65ae42
      });
    }
    await _0x56a05d.sendMessage(_0x5a8626, {
      'react': {
        'text': '✅',
        'key': _0x65ae42.key
      }
    });
  } catch (_0x1b0c68) {
    console.log(_0x1b0c68);
  }
});
