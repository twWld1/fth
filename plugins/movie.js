const axios = require("axios");
const {
  cmd,
  commands
} = require("../command");
const fs = require('fs');
const path = require("path");
const cheerio = require("cheerio");
const {
  sinhalaSub
} = require("mrnima-moviedl");
cmd({
  'pattern': "movie",
  'alias': ["sinhalasub"],
  'react': '📑',
  'category': "download",
  'desc': "Search movies on sinhalasub and get download links",
  'filename': __filename
}, async (_0x13c9aa, _0x2123e1, _0x26bf84, {
  from: _0x2beada,
  q: _0x19515d,
  reply: _0x54059c
}) => {
  try {
    if (!_0x19515d) {
      return await _0x54059c("*Please provide a search query! (e.g., Deadpool)*");
    }
    var _0x3904c9 = await sinhalaSub();
    const _0x4d4428 = await _0x3904c9.search(_0x19515d);
    const _0x1ff073 = _0x4d4428.result.slice(0x0, 0xa);
    if (!_0x1ff073 || _0x1ff073.length === 0x0) {
      return await _0x54059c("No results found for: " + _0x19515d);
    }
    let _0x49c238 = "🔢 *Please reply with the number you want to select*\n\n📽️ *Search Results for* \"" + _0x19515d + "\":\n\n";
    _0x1ff073.forEach((_0x45ce4b, _0xee64bc) => {
      _0x49c238 += '*' + (_0xee64bc + 0x1) + ".* " + _0x45ce4b.title + "\n🔗 Link: " + _0x45ce4b.link + "\n\n";
    });
    const _0x37a70e = await _0x13c9aa.sendMessage(_0x2beada, {
      'text': _0x49c238,
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
      'quoted': _0x26bf84
    });
    const _0x14c96d = _0x37a70e.key.id;
    _0x13c9aa.ev.on("messages.upsert", async _0x2a3ec4 => {
      const _0x597641 = _0x2a3ec4.messages[0x0];
      if (!_0x597641.message) {
        return;
      }
      const _0x473a9c = _0x597641.message.conversation || _0x597641.message.extendedTextMessage?.["text"];
      const _0x33c323 = _0x597641.message.extendedTextMessage && _0x597641.message.extendedTextMessage.contextInfo.stanzaId === _0x14c96d;
      if (_0x33c323) {
        const _0x5eee4f = parseInt(_0x473a9c.trim());
        if (!isNaN(_0x5eee4f) && _0x5eee4f > 0x0 && _0x5eee4f <= _0x1ff073.length) {
          const _0xc9cd73 = _0x1ff073[_0x5eee4f - 0x1];
          const _0x246d4a = "https://api-site-2.vercel.app/api/sinhalasub/movie?url=" + encodeURIComponent(_0xc9cd73.link);
          try {
            const _0x3bc443 = await axios.get(_0x246d4a);
            const _0x2ca307 = _0x3bc443.data.result;
            const _0x33cde5 = _0x2ca307.dl_links || [];
            if (_0x33cde5.length === 0x0) {
              return await _0x54059c("No PixelDrain links found.");
            }
            let _0x47cefa = "🔢 *Please reply with the number you want to select*\n\n🎥 *" + _0x2ca307.title + "*\n\n";
            _0x47cefa += "*Available PixelDrain Download Links:*\n";
            _0x33cde5.forEach((_0x5991e7, _0x287db8) => {
              _0x47cefa += '*' + (_0x287db8 + 0x1) + ".* " + _0x5991e7.quality + " - " + _0x5991e7.size + "\n🔗 Link: " + _0x5991e7.link + "\n\n";
            });
            const _0x494148 = await _0x13c9aa.sendMessage(_0x2beada, {
              'text': _0x47cefa,
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
              'quoted': _0x597641
            });
            const _0x14738c = _0x494148.key.id;
            _0x13c9aa.ev.on("messages.upsert", async _0x2785ec => {
              const _0x13d095 = _0x2785ec.messages[0x0];
              if (!_0x13d095.message) {
                return;
              }
              const _0x220c58 = _0x13d095.message.conversation || _0x13d095.message.extendedTextMessage?.['text'];
              const _0x11b5c0 = _0x13d095.message.extendedTextMessage && _0x13d095.message.extendedTextMessage.contextInfo.stanzaId === _0x14738c;
              if (_0x11b5c0) {
                const _0x3f7e40 = parseInt(_0x220c58.trim());
                if (!isNaN(_0x3f7e40) && _0x3f7e40 > 0x0 && _0x3f7e40 <= _0x33cde5.length) {
                  const _0x39807d = _0x33cde5[_0x3f7e40 - 0x1];
                  const _0x57f385 = _0x39807d.link.split('/').pop();
                  await _0x13c9aa.sendMessage(_0x2beada, {
                    'react': {
                      'text': '⬇️',
                      'key': _0x494148.key
                    }
                  });
                  await _0x13c9aa.sendMessage(_0x2beada, {
                    'text': "*Downloading your movie... 📥*\n*Wait few minits...*\n\n> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ TEchno WOrld*",
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
                        'body': "TEchno World",
                        'mediaType': 0x1,
                        'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
                        'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
                        'renderLargerThumbnail': false,
                        'showAdAttribution': true
                      }
                    }
                  }, {
                    'quoted': _0x26bf84
                  });
                  const _0x4bee71 = 'https://pixeldrain.com/api/file/' + _0x57f385;
                  await _0x13c9aa.sendMessage(_0x2beada, {
                    'react': {
                      'text': '⬆',
                      'key': _0x494148.key
                    }
                  });
                  await _0x13c9aa.sendMessage(_0x2beada, {
                    'document': {
                      'url': _0x4bee71
                    },
                    'mimetype': 'video/mp4',
                    'fileName': _0x2ca307.title + " - " + _0x39807d.quality + '.mp4',
                    'caption': _0x2ca307.title + "\nQuality: " + _0x39807d.quality + "\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ TEchno World*",
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
                    'quoted': _0x26bf84
                  });
                  await _0x13c9aa.sendMessage(_0x2beada, {
                    'react': {
                      'text': '✅',
                      'key': _0x26bf84.key
                    }
                  });
                } else {
                  await _0x54059c("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (_0x3f0504) {
            console.error("Error fetching movie details:", _0x3f0504);
            await _0x54059c("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await _0x54059c("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x7e47d) {
    console.error("Error during search:", _0x7e47d);
    _0x54059c("*An error occurred while searching!*");
  }
});
cmd({
  'pattern': "ginisisila",
  'alias': ["cartoon"],
  'react': '📑',
  'category': 'download',
  'desc': 'ginisisilacartoon.net',
  'filename': __filename
}, async (_0x1d2873, _0xd216d2, _0x163ef5, {
  from: _0x21e02f,
  q: _0x16580e,
  isDev: _0x4ac3b2,
  reply: _0x2a24ca
}) => {
  try {
    if (!_0x16580e) {
      return await _0x2a24ca("*Please provide a search query! (e.g., Garfield)*");
    }
    const _0x1c649f = "https://ginisisilacartoon.net/search.php?q=" + encodeURIComponent(_0x16580e);
    const _0x45bf90 = await axios.get(_0x1c649f);
    const _0x15eb94 = cheerio.load(_0x45bf90.data);
    let _0x3442b1 = [];
    _0x15eb94("div.inner-video-cell").each((_0x17a69e, _0x91a99e) => {
      const _0x435894 = _0x15eb94(_0x91a99e).find("div.video-title > a").attr('title');
      const _0x3ac96d = _0x15eb94(_0x91a99e).find("div.posted-time").text().trim();
      const _0x2afa6a = _0x15eb94(_0x91a99e).find("div.video-title > a").attr("href");
      const _0x12c713 = _0x15eb94(_0x91a99e).find("div.inner-video-thumb-wrapper img").attr("src");
      if (_0x435894 && _0x2afa6a) {
        _0x3442b1.push({
          'title': _0x435894,
          'postedTime': _0x3ac96d,
          'episodeLink': "https://ginisisilacartoon.net/" + _0x2afa6a,
          'imageUrl': _0x12c713
        });
      }
    });
    if (_0x3442b1.length === 0x0) {
      return await _0x2a24ca("No results found for: " + _0x16580e);
    }
    let _0x26cf8c = "🔢 *Please reply with the number you want to select*\n\n📺 Search Results for *" + _0x16580e + ":*\n\n";
    _0x3442b1.forEach((_0x1b4e89, _0xfb1300) => {
      _0x26cf8c += '*' + (_0xfb1300 + 0x1) + ".* " + _0x1b4e89.title + "\n🗓️ Posted: " + _0x1b4e89.postedTime + "\n🔗 Link: " + _0x1b4e89.episodeLink + "\n\n";
    });
    const _0x5dd19f = await _0x1d2873.sendMessage(_0x21e02f, {
      'text': _0x26cf8c,
      'contextInfo': {
        'mentionedJid': ["94779062397@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363192254044294@newsletter',
          'newsletterName': "TWorld-ᴍᴅ ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "TWORLD MD",
          'body': "TEchno World",
          'mediaType': 0x1,
          'sourceUrl': "https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt",
          'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x163ef5
    });
    const _0x44e901 = _0x5dd19f.key.id;
    _0x1d2873.ev.on("messages.upsert", async _0x275d84 => {
      const _0xd06d0b = _0x275d84.messages[0x0];
      if (!_0xd06d0b.message) {
        return;
      }
      const _0x5984f4 = _0xd06d0b.message.conversation || _0xd06d0b.message.extendedTextMessage?.["text"];
      const _0x14201e = _0xd06d0b.key.remoteJid;
      const _0x3cb6dc = _0xd06d0b.message.extendedTextMessage && _0xd06d0b.message.extendedTextMessage.contextInfo.stanzaId === _0x44e901;
      if (_0x3cb6dc) {
        const _0x434909 = parseInt(_0x5984f4.trim());
        if (!isNaN(_0x434909) && _0x434909 > 0x0 && _0x434909 <= _0x3442b1.length) {
          const _0x5acb02 = _0x3442b1[_0x434909 - 0x1];
          const _0x2c3271 = "*🪄 ɴᴀᴍᴇ:-* " + _0x5acb02.title + "\n⏳ *ᴅᴀᴛᴇ:-* " + _0x5acb02.postedTime + "\n📎 *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- " + _0x5acb02.episodeLink + "\n\n☘ *We are uploading the Movie/Episode you requested.*";
          const _0x56b7cf = {
            'image': {
              'url': _0x5acb02.imageUrl
            },
            'caption': _0x2c3271
          };
          await _0x1d2873.sendMessage(_0x14201e, _0x56b7cf, {
            'quoted': _0xd06d0b
          });
          const _0x315dfd = await axios.get(_0x5acb02.episodeLink);
          const _0x5882dd = cheerio.load(_0x315dfd.data);
          const _0xb4011a = _0x5882dd("div#player-holder iframe").attr("src");
          if (_0xb4011a) {
            const _0x5f5be3 = "https://www.dark-yasiya-api.site/download/ginisisila?url=" + _0xb4011a;
            try {
              const _0x1e19fb = await axios.get(_0x5f5be3);
              const _0x5d691b = _0x1e19fb.result.dl_link;
              if (_0x5d691b) {
                await _0x1d2873.sendMessage(_0x14201e, {
                  'document': {
                    'url': _0x5d691b
                  },
                  'mimetype': "video/mp4",
                  'fileName': "TWORLD | " + _0x5acb02.title + ".mp4",
                  'caption': _0x5acb02.title + " |  *TECHNO WORLD*\n\n> Laara-MD",
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
                      'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
                      'renderLargerThumbnail': false,
                      'showAdAttribution': true
                    }
                  }
                }, {
                  'quoted': _0xd06d0b
                });
              } else {
                await _0x2a24ca("Failed to retrieve the download link for this episode.");
              }
            } catch (_0xef63b4) {
              console.error("Error fetching the download link:", _0xef63b4);
              await _0x2a24ca("An error occurred while trying to fetch the download link.");
            }
          } else {
            await _0x2a24ca("No downloadable link found for this episode.");
          }
        } else {
          await _0x2a24ca("Please reply with a valid number from the list.");
        }
      }
    });
  } catch (_0x387561) {
    _0x2a24ca("*Error occurred while scraping!*");
    console.error(_0x387561);
  }
});
cmd({
  'pattern': "baiscope",
  'react': '📑',
  'category': "download",
  'desc': "baiscope.lk",
  'filename': __filename
}, async (_0x4c53d1, _0x47cf36, _0x3832c8, {
  from: _0x20fd1e,
  q: _0x205422,
  isDev: _0x289e57,
  reply: _0x3acc2a
}) => {
  try {
    if (!_0x205422) {
      return await _0x3acc2a("*Please provide a search query! (e.g., Avatar)*");
    }
    const _0xfc657b = "https://www.baiscope.lk/?s=" + encodeURIComponent(_0x205422);
    const _0x2264b4 = await axios.get(_0xfc657b);
    const _0x39c008 = cheerio.load(_0x2264b4.data);
    let _0x1d475e = [];
    _0x39c008("article.elementor-post").each((_0x50d475, _0x1a6b50) => {
      const _0x2270fe = _0x39c008(_0x1a6b50).find("h5.elementor-post__title > a").text().trim();
      const _0x3526f4 = _0x39c008(_0x1a6b50).find("h5.elementor-post__title > a").attr("href");
      const _0x43cea5 = _0x39c008(_0x1a6b50).find(".elementor-post__thumbnail img").attr("src");
      if (_0x2270fe && _0x3526f4 && _0x43cea5) {
        _0x1d475e.push({
          'title': _0x2270fe,
          'episodeLink': _0x3526f4,
          'imgUrl': _0x43cea5
        });
      }
    });
    if (_0x1d475e.length === 0x0) {
      return await _0x3acc2a("No results found for: " + _0x205422);
    }
    let _0x193587 = "📺 Search Results for *" + _0x205422 + ":*\n\n";
    _0x1d475e.forEach((_0x341aaa, _0xb7314b) => {
      _0x193587 += '*' + (_0xb7314b + 0x1) + ".* " + _0x341aaa.title + "\n🔗 Link: " + _0x341aaa.episodeLink + "\n\n";
    });
    const _0x5cf1b8 = await _0x4c53d1.sendMessage(_0x20fd1e, {
      'text': _0x193587
    }, {
      'quoted': _0x3832c8
    });
    const _0x3a4aff = _0x5cf1b8.key.id;
    _0x4c53d1.ev.on('messages.upsert', async _0x31f8f9 => {
      const _0x25496f = _0x31f8f9.messages[0x0];
      if (!_0x25496f.message) {
        return;
      }
      const _0x275fc2 = _0x25496f.message.conversation || _0x25496f.message.extendedTextMessage?.["text"];
      const _0x44f970 = _0x25496f.key.remoteJid;
      const _0x28ca5e = _0x25496f.message.extendedTextMessage && _0x25496f.message.extendedTextMessage.contextInfo.stanzaId === _0x3a4aff;
      if (_0x28ca5e) {
        const _0x5ddbfe = parseInt(_0x275fc2.trim());
        if (!isNaN(_0x5ddbfe) && _0x5ddbfe > 0x0 && _0x5ddbfe <= _0x1d475e.length) {
          const _0x33ec54 = _0x1d475e[_0x5ddbfe - 0x1];
          const _0x58c70a = await axios.get(_0x33ec54.episodeLink);
          const _0x35d8a4 = cheerio.load(_0x58c70a.data);
          const _0x575266 = _0x35d8a4("a.dlm-buttons-button").attr('href');
          if (_0x575266) {
            await _0x4c53d1.sendMessage(_0x44f970, {
              'image': {
                'url': _0x33ec54.imgUrl
              },
              'caption': "🎬 *" + _0x33ec54.title + "*\n🔗 Link: " + _0x33ec54.episodeLink + "\n⬇️ Download will follow."
            }, {
              'quoted': _0x25496f
            });
            const _0x3facb6 = path.join(__dirname, "downloaded_episode.zip");
            const _0x26f02c = fs.createWriteStream(_0x3facb6);
            const _0x243cb1 = await axios({
              'url': _0x575266,
              'method': 'GET',
              'responseType': "stream"
            });
            _0x243cb1.data.pipe(_0x26f02c);
            _0x26f02c.on("finish", async () => {
              await _0x4c53d1.sendMessage(_0x44f970, {
                'document': {
                  'url': _0x3facb6
                },
                'mimetype': 'application/zip',
                'fileName': _0x33ec54.title + ".zip",
                'caption': '*' + _0x33ec54.title + "*\n\n> Lααɾα-ᴍᴅ ✻",
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
                    'sourceUrl': 'https://chat.whatsapp.com/DRbySkWgcUpEGVUkbsI6jt',
                    'thumbnailUrl': "https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg",
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              }, {
                'quoted': _0x25496f
              });
              fs.unlinkSync(_0x3facb6);
            });
            _0x26f02c.on("error", _0x2aecc4 => {
              console.error("Error downloading ZIP file:", _0x2aecc4);
              _0x3acc2a("*Error downloading the episode ZIP file.*");
            });
          } else {
            await _0x3acc2a("*Download link not found for the selected episode.*");
          }
        } else {
          await _0x3acc2a("*Invalid selection. Please choose a valid number.*");
        }
      }
    });
  } catch (_0x8d7e0f) {
    console.error(_0x8d7e0f);
    await _0x3acc2a("*An error occurred while scraping the data.*");
  }
});
