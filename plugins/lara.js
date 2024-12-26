const {
  cmd,
  commands
} = require("../command");
const os = require('os');
const {
  runtime
} = require("../lib/functions");
cmd({
  'pattern': "menu",
  'desc': "commands panel",
  'react': '🌸',
  'filename': __filename
}, async (_0x45dbfd, _0x3f66a2, _0x478f72, {
  from: _0x3f2e84,
  quoted: _0x46e192,
  body: _0x40c166,
  isCmd: _0x19bb40,
  command: _0x2d3a60,
  args: _0x11c19d,
  q: _0x32b1eb,
  isGroup: _0x5ecc36,
  sender: _0xc85095,
  senderNumber: _0x2da45e,
  botNumber2: _0x4554ca,
  botNumber: _0x59a738,
  pushname: _0x262319,
  isMe: _0x497e82,
  isOwner: _0x58ad87,
  groupMetadata: _0x193e30,
  groupName: _0x5e439b,
  participants: _0x44884b,
  groupAdmins: _0x1d7c64,
  isBotAdmins: _0x472268,
  isAdmins: _0x4091d2,
  reply: _0x43018c
}) => {
  try {
    const _0x16f733 = await _0x45dbfd.sendMessage(_0x3f2e84, {
      'image': {
        'url': "https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg"
      },
      'caption': "\n┏━┫*⚬TWORLD-ᴍᴅ-ᴍᴇɴᴜ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻╭─────────────✑\n◉│ *1*    *ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴍᴅ*\n◉│ *2*    *ꜱᴇᴀʀᴄʜ ᴄᴍᴅ*\n◉│ *3*    *ᴀɴɪᴍᴇ ᴄᴍᴅ*\n◉│ *4*    *ꜰᴜɴ ᴄᴍᴅ*\n◉│ *5*    *ᴄᴏɴᴠᴇʀᴛᴇᴅ ᴄᴍᴅ*\n◉│ *6*    *ᴀɪ ᴄᴍᴅ*\n◉│ *7*    *ɢʀᴏᴜᴘ ᴄᴍᴅ*\n◉│ *8*    *ᴏᴡɴᴇʀ ᴄᴍᴅ*\n◉│ *9*    *ꜱʏꜱᴛᴇᴍ ᴄᴍᴅ*\n┳╰─────────────✑\n⁠⁠⁠⁠┗━┫*⚬TWORLD-ᴍᴅ-ᴍᴇɴᴜ⚬*┣━✾\n\n*ᴍᴇɴᴛɪᴏɴ & ʀᴇᴘʟʏ ᴛᴏ ɴᴜᴍʙᴇʀ ꜱᴇʟᴇᴄᴛ ᴡɪᴛʜ ᴄᴀᴛᴇɢᴏʀʏ*\n\n> Lααɾα-ᴍᴅ ✻\n",
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
          'thumbnailUrl': 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg',
          'renderLargerThumbnail': true,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x3f66a2
    });
    const _0x5d9659 = _0x16f733.key.id;
    _0x45dbfd.ev.on('messages.upsert', async _0x4d00a8 => {
      const _0x13df0f = _0x4d00a8.messages[0x0];
      if (!_0x13df0f.message) {
        return;
      }
      const _0x1a2fc0 = _0x13df0f.message.conversation || _0x13df0f.message.extendedTextMessage?.["text"];
      const _0x41c18f = _0x13df0f.key.remoteJid;
      const _0x326478 = _0x13df0f.message.extendedTextMessage && _0x13df0f.message.extendedTextMessage.contextInfo.stanzaId === _0x5d9659;
      if (_0x326478) {
        if (_0x1a2fc0 === '1') {
          await _0x45dbfd.sendMessage(_0x41c18f, {
            'image': {
              'url': "https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg"
            },
            'caption': "\n┏━┫*⚬TWORLD-ᴍᴅ-ᴅᴏᴡɴ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.song*\n (_Downloading youtube song )_\n\n- _🌸 Ex :  .song lelena_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.video*\n (_Downloading you tube video )_\n\n- _🌸 Ex :  .video lelena_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.fb*\n (_Downloading facebook video )_\n\n- _🌸 Ex :  .fb <url>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.tiktok*\n (_Downloading tiktok )_\n\n- _🌸 Ex :  .tiktok <url>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.apk*\n (_Downloading apk )_\n\n- _🌸 Ex :  .apk whatsapp_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.mfire*\n (_Downloading mediafire )_\n\n- _🌸 Ex :  .mfire <url>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.gdrive*\n\n (_Downloading google drive file)_\n\n- _🌸 Ex :  .gdrive <link>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.tg*\n\n (_Downloading instagrm)_\n\n- _🌸 Ex :  .ig <link>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.twdl*\n\n (_Downloading twiter )_\n\n- _🌸 Ex :  .twdl <url>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.movie*\n\n (_Downloading sinhala sub movie)_\n\n- _🌸 Ex :  .movie spider man_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.baiscope*\n\n (_Downloading baiscope movie )_\n\n- _🌸 Ex :  .baiscope flash_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.ginisisila*\n\n (_Downloading ginisisila cartoon )_\n\n- _🌸 Ex :  .ginisisila ben 10_\n╰━━━━━━━━━━━━━━━\n\n╭━━━━━━━━━━━━━━━\n         *.xvdl*\n\n (_Downloading xvideos videos )_\n\n- _🌸 Ex :  .xvdl mia khalifa_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.xnxxdl*\n\n (_Downloading xnxx video )_\n\n- _🌸 Ex :  .xnxxdl <link>_\n╰━━━━━━━━━━━━━━━\n\n> Lααɾα-ᴍᴅ ✻\n",
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
                'body': "TEchno World",
                'mediaType': 0x1,
                'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
                'thumbnailUrl': 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg',
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x13df0f
          });
        } else {
          if (_0x1a2fc0 === '2') {
            await _0x45dbfd.sendMessage(_0x41c18f, {
              'image': {
                'url': "https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg"
              },
              'caption': "\n┏━┫*⚬TWORLD-ꜱᴇᴀʀᴄʜ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.img*\n\n (_Searching to google image)_\n\n- _🌸 Ex :  .img cars_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.githubstalk*\n\n (_Searching to github profile)_\n\n- _🌸 Ex :  .githubstalk sadiyamin_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.wether*\n\n (_Searching to wether)_\n\n- _🌸 Ex :  .wether mathara_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.movie*\n\n (_Searching to movie details)_\n\n- _🌸 Ex :  .movie spider man_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.yts*\n\n (_Searching to you tube links)_\n\n- _🌸 Ex :  .yts lara md whatsapp bot_\n╰━━━━━━━━━━━━━━━\n\n> Lααɾα-ᴍᴅ ✻\n",
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
                  'thumbnailUrl': 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg',
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x13df0f
            });
          } else {
            if (_0x1a2fc0 === '3') {
              await _0x45dbfd.sendMessage(_0x41c18f, {
                'image': {
                  'url': 'https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg'
                },
                'caption': "\n┏━┫*⚬TWORLD-ᴀɴɪᴍᴇ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.loli*\n\n (_Random loli image_)\n\n- _🌸 Ex :  .loli_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.waifu*\n\n (_Random waifu image_)\n\n- _🌸 Ex :  .waifu_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.neko*\n\n (_Random neko image_)\n\n- _🌸 Ex :  .neko_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.megumin*\n\n (_Random megumin image_)\n\n- _🌸 Ex :  .megumin_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.maid*\n\n (_Random maid image_)\n\n- _🌸 Ex :  .maid_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.awoo*\n\n (_Random awoo image_)\n\n- _🌸 Ex :  .awoo_\n╰━━━━━━━━━━━━━━━\n\n> Lααɾα-ᴍᴅ ✻\n",
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
                'quoted': _0x13df0f
              });
            } else {
              if (_0x1a2fc0 === '4') {
                await _0x45dbfd.sendMessage(_0x41c18f, {
                  'image': {
                    'url': 'https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg'
                  },
                  'caption': "\n┏━┫*⚬TWORLD-ꜰᴜɴ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.hack*\n\n _(Hack Frank)_\n\n- _🌸 Ex :  .hack_\n╰━━━━━━━━━━━━━━━\n\n> Lααɾα-ᴍᴅ ✻\n",
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
                  'quoted': _0x13df0f
                });
              } else {
                if (_0x1a2fc0 === '5') {
                  await _0x45dbfd.sendMessage(_0x41c18f, {
                    'image': {
                      'url': "https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg"
                    },
                    'caption': "\n┏━┫*⚬TWORLD-ᴄᴏɴᴠᴇʀᴛ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.sticker*\n         *.s*\n\n _(Photo to convert sticker)_\n\n- _🌸 Ex :  .sticker <reply to photo or short video_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.tts*\n\n _(Generated ai voice)_\n\n- _🌸 Ex :  .tts Hello World_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.trt*\n\n _(Translate to all language)_\n\n- _🌸 Ex :  .trt si how are you_\n╰━━━━━━━━━━━━━━━\n\n> Lααɾα-ᴍᴅ ✻\n",
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
                    'quoted': _0x13df0f
                  });
                } else {
                  if (_0x1a2fc0 === '6') {
                    await _0x45dbfd.sendMessage(_0x41c18f, {
                      'image': {
                        'url': "https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg"
                      },
                      'caption': "\n┏━┫*⚬TWORLD-ᴀɪ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.ai*\n\n _(Chat with ai)_\n\n- _🌸 Ex :  .ai how are you_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.gpt*\n\n _(Chat gpt)_\n\n- _🌸 Ex :  .gpt what's node.js_\n╰━━━━━━━━━━━━━━━\n\n> Lααɾα-ᴍᴅ ✻\n",
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
                      'quoted': _0x13df0f
                    });
                  } else {
                    if (_0x1a2fc0 === '7') {
                      await _0x45dbfd.sendMessage(_0x41c18f, {
                        'image': {
                          'url': "https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg"
                        },
                        'caption': "\n┏━┫*⚬TWORLD-ɢʀᴏᴜᴘ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.mute*\n\n _(Group close)_\n\n- _🌸 Ex :  .mute_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.unmute*\n\n _(Group open)_\n\n- _🌸 Ex :  .unmute_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.tagall*\n\n _(Group tag to all members)_\n\n- _🌸 Ex :  .tagall Hi_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.hidetag*\n\n _(Group tag to all members)_\n\n- _🌸 Ex :  .hidetag Hi_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.promote*\n\n _(Group members promoted)_\n\n- _🌸 Ex :  .promote @mention_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.demote*\n\n _(Group members demoted)_\n\n- _🌸 Ex :  .demote @mention_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.kick*\n\n _(Group members remove)_\n\n- _🌸 Ex :  .kick @mention_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.add*\n\n _(Group members add)_\n\n- _🌸 Ex :  .add 9477×××××_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.kickall*\n\n _(Group all members remove)_\n*⚠️ Warning*\n- _🌸 Ex :  .kickall_\n╰━━━━━━━━━━━━━━━\n\n> Lααɾα-ᴍᴅ ✻\n",
                        'contextInfo': {
                          'mentionedJid': ["94779062397@s.whatsapp.net"],
                          'groupMentions': [],
                          'forwardingScore': 0x1,
                          'isForwarded': true,
                          'forwardedNewsletterMessageInfo': {
                            'newsletterJid': '120363192254044294@newsletter',
                            'newsletterName': "Lααɾα-ᴍᴅ ✻",
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
                        'quoted': _0x13df0f
                      });
                    } else {
                      if (_0x1a2fc0 === '8') {
                        await _0x45dbfd.sendMessage(_0x41c18f, {
                          'image': {
                            'url': 'https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg'
                          },
                          'caption': "\n┏━┫*⚬TWORLD-ᴏᴡɴᴇʀ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.block*\n\n _(Block user)_\n\n- _🌸 Ex :  .block_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.ublock*\n\n _(Unblock user)_\n\n- _🌸 Ex :  .unblock_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.jid*\n\n _(Send to chat jid)_\n\n- _🌸 Ex :  .jid_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.gjid*\n\n _(Send to group jid)_\n\n- _🌸 Ex :  .gjid_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.restart*\n\n _(Restarting the bot)_\n\n- _🌸 Ex :  .restart_\n╰━━━━━━━━━━━━━━━\n\n> Lααɾα-ᴍᴅ ✻\n",
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
                          'quoted': _0x13df0f
                        });
                      } else if (_0x1a2fc0 === '9') {
                        await _0x45dbfd.sendMessage(_0x41c18f, {
                          'image': {
                            'url': "https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg"
                          },
                          'caption': "\n┏━┫*⚬TWORLD-ꜱʏꜱᴛᴇᴍ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.ping*\n\n _(Test bot speed)_\n\n- _🌸 Ex :  .ping\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.system*\n\n _(Check bot status)_\n\n- _🌸 Ex :  .system_\n╰━━━━━━━━━━━━━━━\n\n╭━━━━━━━━━━━━━━━\n         *.restart*\n\n _(Restarting alxa bot)_\n\n- _🌸 Ex :  .restart_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.owner*\n\n _(Alexa developer team)_\n\n- _🌸 Ex :  .owner_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.repo*\n         *.src*\n _(Alexa bot github repo)_\n\n- _🌸 Ex :  .repo_\n╰━━━━━━━━━━━━━━━\n\n> Lααɾα-ᴍᴅ ✻\n",
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
                          'quoted': _0x13df0f
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x1852a9) {
    console.log(_0x1852a9);
    _0x43018c('' + _0x1852a9);
  }
});
cmd({
  'pattern': "alive",
  'desc': 'about',
  'react': '🌸',
  'filename': __filename
}, async (_0x339c06, _0x657829, _0x444a7d, {
  from: _0x50334b,
  quoted: _0x4581e1,
  body: _0x3265a5,
  isCmd: _0x532c32,
  command: _0x51a106,
  args: _0x349583,
  q: _0x5cef06,
  isGroup: _0x64c024,
  sender: _0xf4096d,
  senderNumber: _0x27069d,
  botNumber2: _0x32c1d7,
  botNumber: _0x3c6e53,
  pushname: _0x2023b0,
  isMe: _0x1e1edb,
  isOwner: _0x70c4c5,
  groupMetadata: _0x38774f,
  groupName: _0x4e61da,
  participants: _0x4ac94a,
  groupAdmins: _0x2383a1,
  isBotAdmins: _0x533c42,
  isAdmins: _0x34ec77,
  reply: _0x2ae563
}) => {
  try {
    let _0x2b36b4 = "\n◉┏━┫*⚬TWORLD-ᴍᴅ-ᴀʟɪᴠᴇ⚬*┣━✾\n◉┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┏┻━━━━━━━━━\n┃*ʜɪ TWORLD-ᴍᴅ ᴀʟɪᴠᴇ ✻*\n┗┳━━━━━━━━━\n◉┃*ɪᴍ TECHNo-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*\n◉┃*ꜱɪᴍᴘᴀʟᴇ ᴊᴀᴠᴀ ꜱᴄʀɪᴘᴛ ʙᴏᴛ*\n◉┃*TECHNO WORLD ɪꜱ ᴍʏ ᴄʀᴇᴀᴛᴏʀ*\n◉┃*ɢᴇᴛ ᴍʏ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴛᴏ ᴜꜱᴇ*\n◉┃             *.ᴍᴇɴᴜ*\n◉┗━━━━━━━━━━━━━━\n━━┬┬┬┬┬┬┬┬┬┬┬━━\n       *TWORLD-ᴍᴅ ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏ*\n━━┴┴┴┴┴┴┴┴┴┴┴━━\n┏━━━━━━━━━━━━━━\n❍*ʀᴜɴ ᴛɪᴍᴇ :* " + runtime(process.uptime()) + "\n❍*ʀᴀᴍ ᴜꜱᴇ :* " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n❍*ᴘʟᴀᴛꜰᴏʀᴍ :* " + os.hostname() + "\n❍*ᴏᴡɴᴇʀ :* Techno World\n┗━━━━━━━━━━━━━━\n\n*ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ 🔢*\n\n *1*  ┃    *ᴍᴇɴᴜ*\n *2*  ┃    *TWORLD-ᴍᴅ ɢɪᴛ ʀᴇᴘᴏ*\n\n> TWORLD-ᴍᴅ ✻\n";
    await _0x339c06.sendMessage(_0x50334b, {
      'audio': {
        'url': 'https://github.com/tharumin/Alexa_Voice/raw/refs/heads/main/test2.mp3'
      },
      'mimetype': "audio/mpeg",
      'ptt': true,
      'contextInfo': {
        'externalAdReply': {
          'title': "TEchno World",
          'body': "Lααɾα-ᴍᴅ ✻",
          'mediaType': 0x1,
          'sourceUrl': 'https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt',
          'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
          'renderLargerThumbnail': true,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x657829
    });
    const _0x1bfad2 = await _0x339c06.sendMessage(_0x50334b, {
      'image': {
        'url': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/daenerys%20targaryen.jpeg"
      },
      'caption': _0x2b36b4,
      'contextInfo': {
        'mentionedJid': ["94779062397@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363192254044294@newsletter",
          'newsletterName': "TWORLD",
          'serverMessageId': 0x1
        },
        'externalAdReply': {
          'title': "TWORLD MD",
          'body': "TWORLD MD",
          'mediaType': 0x1,
          'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
          'thumbnailUrl': 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg',
          'renderLargerThumbnail': true,
          'showAdAttribution': true
        }
      }
    });
    const _0x18f409 = _0x1bfad2.key.id;
    _0x339c06.ev.on('messages.upsert', async _0x5b4f09 => {
      const _0x296f60 = _0x5b4f09.messages[0x0];
      if (!_0x296f60.message) {
        return;
      }
      const _0x592676 = _0x296f60.message.conversation || _0x296f60.message.extendedTextMessage?.['text'];
      const _0x2ed3bf = _0x296f60.key.remoteJid;
      const _0x2e2105 = _0x296f60.message.extendedTextMessage && _0x296f60.message.extendedTextMessage.contextInfo.stanzaId === _0x18f409;
      if (_0x2e2105) {
        if (_0x592676 === '1') {
          await _0x339c06.sendMessage(_0x2ed3bf, {
            'image': {
              'url': "https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg"
            },
            'caption': "\n┏━┫*⚬TWORLD-ᴍᴅ-ᴅᴏᴡɴ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.song*\n (_Downloading you tube song )_\n\n- _🌸 Ex :  .song lelena_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.video*\n (_Downloading you tube video )_\n\n- _🌸 Ex :  .video lelena_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.fb*\n (_Downloading facebook video )_\n\n- _🌸 Ex :  .fb <url>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.tiktok*\n (_Downloading tiktok )_\n\n- _🌸 Ex :  .tiktok <url>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.apk*\n (_Downloading apk )_\n\n- _🌸 Ex :  .apk whatsapp_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.mfire*\n (_Downloading mediafire )_\n\n- _🌸 Ex :  .mfire <url>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.gdrive*\n\n (_Downloading google drive file)_\n\n- _🌸 Ex :  .gdrive <link>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.tg*\n\n (_Downloading instagrm)_\n\n- _🌸 Ex :  .ig <link>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.twdl*\n\n (_Downloading twiter )_\n\n- _🌸 Ex :  .twdl <url>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.movie*\n\n (_Downloading sinhala sub movie)_\n\n- _🌸 Ex :  .movie spider man_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.baiscope*\n\n (_Downloading baiscope movie )_\n\n- _🌸 Ex :  .baiscope flash_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.ginisisila*\n\n (_Downloading ginisisila cartoon )_\n\n- _🌸 Ex :  .ginisisila ben 10_\n╰━━━━━━━━━━━━━━━\n\n╭━━━━━━━━━━━━━━━\n         *.xvdl*\n\n (_Downloading xvideos videos )_\n\n- _🌸 Ex :  .xvdl mia khalifa_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.xnxxdl*\n\n (_Downloading xnxx video )_\n\n- _🌸 Ex :  .xnxxdl <link>_\n╰━━━━━━━━━━━━━━━\n\n┏━┫*⚬Lααɾα-ꜱᴇᴀʀᴄʜ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.img*\n\n (_Searching to google image)_\n\n- _🌸 Ex :  .img cars_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.githubstalk*\n\n (_Searching to github profile)_\n\n- _🌸 Ex :  .githubstalk sadiyamin_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.wether*\n\n (_Searching to wether)_\n\n- _🌸 Ex :  .wether mathara_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.movie*\n\n (_Searching to movie details)_\n\n- _🌸 Ex :  .movie spider man_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.yts*\n\n (_Searching to you tube links)_\n\n- _🌸 Ex :  .yts lara md whatsapp bot_\n╰━━━━━━━━━━━━━━━\n\n┏━┫*⚬Lααɾα-ᴀɴɪᴍᴇ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.loli*\n\n (_Random loli image_)\n\n- _🌸 Ex :  .loli_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.waifu*\n\n (_Random waifu image_)\n\n- _🌸 Ex :  .waifu_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.neko*\n\n (_Random neko image_)\n\n- _🌸 Ex :  .neko_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.megumin*\n\n (_Random megumin image_)\n\n- _🌸 Ex :  .megumin_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.maid*\n\n (_Random maid image_)\n\n- _🌸 Ex :  .maid_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.awoo*\n\n (_Random awoo image_)\n\n- _🌸 Ex :  .awoo_\n╰━━━━━━━━━━━━━━━\n\n┏━┫*⚬TWORLD-ꜰᴜɴ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.hack*\n\n _(Hack Frank)_\n\n- _🌸 Ex :  .hack_\n╰━━━━━━━━━━━━━━━\n\n┏━┫*⚬TWORLD-ᴄᴏɴᴠᴇʀᴛ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.sticker*\n         *.s*\n\n _(Photo to convert sticker)_\n\n- _🌸 Ex :  .sticker <reply to photo or short video_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.tts*\n\n _(Generated ai voice)_\n\n- _🌸 Ex :  .tts Hello World_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.trt*\n\n _(Translate to all language)_\n\n- _🌸 Ex :  .trt si how are you_\n╰━━━━━━━━━━━━━━━\n\n┏━┫*⚬Lααɾα-ᴀɪ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.ai*\n\n _(Chat with ai)_\n\n- _🌸 Ex :  .ai how are you_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.gpt*\n\n _(Chat gpt)_\n\n- _🌸 Ex :  .gpt what's node.js_\n╰━━━━━━━━━━━━━━━\n\n┏━┫*⚬Lααɾα-ɢʀᴏᴜᴘ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.mute*\n\n _(Group close)_\n\n- _🌸 Ex :  .mute_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.unmute*\n\n _(Group open)_\n\n- _🌸 Ex :  .unmute_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.tagall*\n\n _(Group tag to all members)_\n\n- _🌸 Ex :  .tagall Hi_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.hidetag*\n\n _(Group tag to all members)_\n\n- _🌸 Ex :  .hidetag Hi_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.promote*\n\n _(Group members promoted)_\n\n- _🌸 Ex :  .promote @mention_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.demote*\n\n _(Group members demoted)_\n\n- _🌸 Ex :  .demote @mention_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.kick*\n\n _(Group members remove)_\n\n- _🌸 Ex :  .kick @mention_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.add*\n\n _(Group members add)_\n\n- _🌸 Ex :  .add 9477×××××_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.kickall*\n\n _(Group all members remove)_\n*⚠️ Warning*\n- _🌸 Ex :  .kickall_\n╰━━━━━━━━━━━━━━━\n\n┏━┫*⚬Lααɾα-ᴏᴡɴᴇʀ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.block*\n\n _(Block user)_\n\n- _🌸 Ex :  .block_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.ublock*\n\n _(Unblock user)_\n\n- _🌸 Ex :  .unblock_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.jid*\n\n _(Send to chat jid)_\n\n- _🌸 Ex :  .jid_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.gjid*\n\n _(Send to group jid)_\n\n- _🌸 Ex :  .gjid_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.restart*\n\n _(Restarting the bot)_\n\n- _🌸 Ex :  .restart_\n╰━━━━━━━━━━━━━━━\n\n┏━┫*⚬Lααɾα-ꜱʏꜱᴛᴇᴍ ᴄᴍᴅ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n╭━━━━━━━━━━━━━━━\n         *.ping*\n\n _(Test bot speed)_\n\n- _🌸 Ex :  .ping\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.system*\n\n _(Check bot status)_\n\n- _🌸 Ex :  .system_\n╰━━━━━━━━━━━━━━━\n\n╭━━━━━━━━━━━━━━━\n         *.restart*\n\n _(Restarting alxa bot)_\n\n- _🌸 Ex :  .restart_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.owner*\n\n _(Alexa developer team)_\n\n- _🌸 Ex :  .owner_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.repo*\n         *.src*\n _(Alexa bot github repo)_\n\n- _🌸 Ex :  .repo_\n╰━━━━━━━━━━━━━━━\n\n> Lααɾα-ᴍᴅ ✻\n",
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
                'body': "TEchno WORLD",
                'mediaType': 0x1,
                'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
                'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x296f60
          });
        } else if (_0x592676 === '2') {
          await _0x339c06.sendMessage(_0x2ed3bf, {
            'image': {
              'url': "https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg"
            },
            'caption': "\n┏━┫*⚬Tworld-ᴍᴅ-ʀᴇᴘᴏ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*ɢɪᴛ ʀᴇᴘᴏ :*\nhttps://github.com/\n\n*Tworld-ᴍᴅ ᴡᴇʙꜱɪᴛᴇ :*\n*1 :* .com\n*2 :* ttts\n\n*ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴᴇʟ :*\nhttps://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt\n\n*ʏᴛ ᴄʜᴀɴᴇʟ :*\nhttps://m.youtube.com/\n┳\n⁠⁠⁠⁠┗━┫*⚬Tworld-ᴍᴅ-ʀᴇᴘᴏ⚬*┣━✾\n\n*ᴏᴡɴᴇʀ :* *Techno World*\n*ᴀɢᴇ :* *00*\n*ꜰʀᴏᴍ :* *ꜱʀɪ ʟᴀɴᴋᴀ*\n*ꜱᴋɪʟ :* *nothing*\n*ᴄᴏɴᴛᴀᴄᴛ :* *404*\n\n> Tworld-ᴍᴅ ✻\n",
            'contextInfo': {
              'mentionedJid': ['94779062397@s.whatsapp.net'],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363192254044294@newsletter",
                'newsletterName': "TWorld-ᴍᴅ ✻",
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
            'quoted': _0x296f60
          });
        }
      }
    });
  } catch (_0x255e78) {
    console.log(_0x255e78);
    _0x2ae563('' + _0x255e78);
  }
});
cmd({
  'pattern': 'repo',
  'desc': "about",
  'react': '❕',
  'filename': __filename
}, async (_0x259ed7, _0xd36958, _0x48bd4b, {
  from: _0x2424e1,
  quoted: _0x35cc20,
  body: _0x1625d2,
  isCmd: _0x3d8dce,
  command: _0x5d0995,
  args: _0x1cef49,
  q: _0x27ed9d,
  isGroup: _0x113818,
  sender: _0x4a0fe2,
  senderNumber: _0x511359,
  botNumber2: _0x46b0eb,
  botNumber: _0x434a10,
  pushname: _0x5883a7,
  isMe: _0x46765a,
  isOwner: _0x22748a,
  groupMetadata: _0x2c3a85,
  groupName: _0x1555c0,
  participants: _0x56cb11,
  groupAdmins: _0x32e746,
  isBotAdmins: _0x585b53,
  isAdmins: _0x2d51e2,
  reply: _0x505345
}) => {
  try {
    await _0x259ed7.sendMessage(_0x2424e1, {
      'image': {
        'url': 'https://i.ibb.co/4fRLsZJ/Whats-App-Image-2024-12-26-at-22-06-04.jpg'
      },
      'caption': "\n┏━┫*⚬TWORLD-ᴍᴅ-ʀᴇᴘᴏ⚬*┣━✾\n┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┻\n*ɢɪᴛ ʀᴇᴘᴏ :*\nhttps://github.com/\n\n*TWORLD-ᴍᴅ ᴡᴇʙꜱɪᴛᴇ :*\n*1 :* https://google.com\n*2 :* https://yahoo.com\n\n*ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴᴇʟ :*\nhttps://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt\n\n*ʏᴛ ᴄʜᴀɴᴇʟ :*\nhttps://m.youtube.com/\n┳\n⁠⁠⁠⁠┗━┫*⚬TWORLD-ᴍᴅ-ʀᴇᴘᴏ⚬*┣━✾\n\n*ᴏᴡɴᴇʀ :* *Techno World*\n*ᴀɢᴇ :* *00*\n*ꜰʀᴏᴍ :* *ꜱʀɪ ʟᴀɴᴋᴀ*\n*ꜱᴋɪʟ :* *ʟᴇᴀʀɴɪɴɢ ᴊꜱ,ᴘʏᴛʜᴏɴ,ᴘʜᴘ,ᴅᴀᴛᴀʙᴀꜱᴇ*\n*ᴄᴏɴᴛᴀᴄᴛ :* *404*\n\n> TWORLD-ᴍᴅ ✻\n",
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
          'body': "ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ",
          'mediaType': 0x1,
          'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
          'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0xd36958
    });
  } catch (_0x654a8e) {
    console.log(_0x654a8e);
    _0x505345('' + _0x654a8e);
  }
});
