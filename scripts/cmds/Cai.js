const _0x27a911 = _0x394c;
(function (_0x49a949, _0x1ae89f) {
    const _0x4016fa = _0x394c, _0x3b0f22 = _0x49a949();
    while (!![]) {
        try {
            const _0x4a3ddd = parseInt(_0x4016fa(0x12a)) / (-0x11cb + -0x49 * -0x47 + -0x273) * (-parseInt(_0x4016fa(0x139)) / (-0xeed * -0x2 + -0x9e8 + -0x13f0)) + parseInt(_0x4016fa(0x148)) / (-0x1 * 0xf2 + 0xa19 + -0x924) + -parseInt(_0x4016fa(0x13d)) / (0xb71 + -0xe7d + -0xe * -0x38) * (parseInt(_0x4016fa(0x131)) / (0x15e + -0x1 * -0x2426 + -0x257f * 0x1)) + parseInt(_0x4016fa(0x14b)) / (-0x1 * 0x1159 + 0x9a * -0x4 + 0x1 * 0x13c7) * (-parseInt(_0x4016fa(0x140)) / (0x5be + 0xe8f + 0x15a * -0xf)) + -parseInt(_0x4016fa(0x133)) / (-0x1 * -0xa99 + -0x7 * 0x1ff + 0x8 * 0x6d) + parseInt(_0x4016fa(0x134)) / (-0x1 * 0x2d3 + -0xd14 + -0xaa * -0x18) * (parseInt(_0x4016fa(0x142)) / (0x1c4b + 0xe07 + -0x2a48)) + -parseInt(_0x4016fa(0x137)) / (0x1 * 0x17f8 + -0x5b9 * 0x5 + 0x4b0) * (-parseInt(_0x4016fa(0x12f)) / (-0x1a8f * -0x1 + 0x416 + 0x45f * -0x7));
            if (_0x4a3ddd === _0x1ae89f)
                break;
            else
                _0x3b0f22['push'](_0x3b0f22['shift']());
        } catch (_0x17823e) {
            _0x3b0f22['push'](_0x3b0f22['shift']());
        }
    }
}(_0x5af7, 0xb994d + 0xd35df * -0x2 + 0x1c0c36));
const axios = require(_0x27a911(0x146));
let defaultCharacter = _0x27a911(0x121);
module[_0x27a911(0x147)] = {
    'config': {
        'name': _0x27a911(0x11e),
        'aliases': [_0x27a911(0x141)],
        'version': _0x27a911(0x125),
        'author': _0x27a911(0x12e),
        'role': 0x0,
        'category': _0x27a911(0x13f),
        'shortDescription': { 'en': _0x27a911(0x122) },
        'longDescription': { 'en': _0x27a911(0x122) },
        'guide': { 'en': _0x27a911(0x130) + 'y]' }
    },
    'onStart': async function ({
        message: _0x27f0b8,
        event: _0x24bc9b,
        args: _0x1dab64,
        commandName: _0x22fb70
    }) {
        const _0x4dfb18 = _0x27a911, _0x3ac4a7 = {
                'Rrnsk': function (_0x2c6d8f, _0x5d7945) {
                    return _0x2c6d8f || _0x5d7945;
                },
                'yWqXo': _0x4dfb18(0x120)
            }, [_0x249536, _0x387bf2] = _0x1dab64[_0x4dfb18(0x143)]('\x20')[_0x4dfb18(0x123)]('|')[_0x4dfb18(0x12d)](_0x17b09f => _0x17b09f[_0x4dfb18(0x132)]()), _0x22227b = _0x3ac4a7[_0x4dfb18(0x14a)](_0x387bf2, defaultCharacter);
        try {
            const _0xeaa409 = await axios[_0x4dfb18(0x149)](_0x4dfb18(0x13b) + _0x4dfb18(0x12b) + _0x4dfb18(0x124) + _0x4dfb18(0x126) + _0x4dfb18(0x136) + _0x4dfb18(0x13c) + _0x249536 + _0x4dfb18(0x144) + _0x22227b);
            if (_0xeaa409[_0x4dfb18(0x11f)] && _0xeaa409[_0x4dfb18(0x11f)]) {
                const _0x1247c3 = _0xeaa409[_0x4dfb18(0x11f)][_0x4dfb18(0x11b)], _0x29040b = '' + _0x1247c3;
                _0x27f0b8[_0x4dfb18(0x12c)]({ 'body': _0x29040b }, (_0x5d8fbc, _0x142b38) => {
                    const _0x4957f6 = _0x4dfb18;
                    global[_0x4957f6(0x129)][_0x4957f6(0x11d)][_0x4957f6(0x11c)](_0x142b38[_0x4957f6(0x13e)], {
                        'commandName': _0x22fb70,
                        'messageID': _0x142b38[_0x4957f6(0x13e)],
                        'author': _0x24bc9b[_0x4957f6(0x135)],
                        'character': _0x22227b
                    });
                });
            }
        } catch (_0x2ff224) {
            console[_0x4dfb18(0x128)](_0x3ac4a7[_0x4dfb18(0x13a)], _0x2ff224[_0x4dfb18(0x145)]);
        }
    },
    'onReply': async function ({
        message: _0x27d833,
        event: _0x1a35a7,
        Reply: _0x21bf8b,
        args: _0x4b9ea8
    }) {
        const _0x342bbb = _0x27a911, _0x22b3a7 = {
                'ErQEA': function (_0x22fb42, _0x341482) {
                    return _0x22fb42 != _0x341482;
                },
                'AAYPs': _0x342bbb(0x120)
            };
        let {
            author: _0x53bafb,
            commandName: _0x509457,
            character: _0x24d435
        } = _0x21bf8b;
        if (_0x22b3a7[_0x342bbb(0x138)](_0x1a35a7[_0x342bbb(0x135)], _0x53bafb))
            return;
        const [_0x11eba1] = _0x4b9ea8[_0x342bbb(0x143)]('\x20')[_0x342bbb(0x123)]('|')[_0x342bbb(0x12d)](_0x4d73eb => _0x4d73eb[_0x342bbb(0x132)]());
        try {
            const _0x22454c = await axios[_0x342bbb(0x149)](_0x342bbb(0x13b) + _0x342bbb(0x12b) + _0x342bbb(0x124) + _0x342bbb(0x126) + _0x342bbb(0x136) + _0x342bbb(0x13c) + _0x11eba1 + _0x342bbb(0x144) + _0x24d435);
            if (_0x22454c[_0x342bbb(0x11f)] && _0x22454c[_0x342bbb(0x11f)]) {
                const _0x4ef7fb = _0x22454c[_0x342bbb(0x11f)][_0x342bbb(0x11b)], _0x26fee6 = '' + _0x4ef7fb;
                _0x27d833[_0x342bbb(0x12c)]({ 'body': _0x26fee6 }, (_0x5e12f3, _0x53d954) => {
                    const _0x18daab = _0x342bbb;
                    global[_0x18daab(0x129)][_0x18daab(0x11d)][_0x18daab(0x11c)](_0x53d954[_0x18daab(0x13e)], {
                        'commandName': _0x509457,
                        'messageID': _0x53d954[_0x18daab(0x13e)],
                        'author': _0x1a35a7[_0x18daab(0x135)],
                        'character': _0x24d435
                    });
                });
            }
        } catch (_0x10eb55) {
            console[_0x342bbb(0x128)](_0x22b3a7[_0x342bbb(0x127)], _0x10eb55[_0x342bbb(0x145)]);
        }
    }
};
function _0x394c(_0x414053, _0x33a1f7) {
    const _0x5accb4 = _0x5af7();
    return _0x394c = function (_0x2af422, _0x32280e) {
        _0x2af422 = _0x2af422 - (0x1 * 0xbfb + -0x115b + 0x67b);
        let _0x1fb980 = _0x5accb4[_0x2af422];
        return _0x1fb980;
    }, _0x394c(_0x414053, _0x33a1f7);
}
function _0x5af7() {
    const _0x5daa34 = [
        'yWqXo',
        'https://ts',
        '?prompt=',
        '4FmNrSO',
        'messageID',
        'Ai-Chat',
        '77pFzoKM',
        'pretend',
        '10wvaksg',
        'join',
        '&name=',
        'message',
        'axios',
        'exports',
        '1415175CazIFr',
        'get',
        'Rrnsk',
        '747234AzZeoz',
        'response',
        'set',
        'onReply',
        'cai',
        'data',
        'Error:',
        'goku',
        'Botify-ai',
        'split',
        'uddho.onre',
        '1.0',
        'nder.com/a',
        'AAYPs',
        'error',
        'GoatBot',
        '113RMVgMH',
        '-ai-api-sh',
        'reply',
        'map',
        'Arfan',
        '12vrfNUW',
        '{pn}\x20[quer',
        '4563995NKDxmO',
        'trim',
        '673320JPEVTo',
        '5859486bbJTzw',
        'senderID',
        'pi/pretend',
        '32474959AvrbFh',
        'ErQEA',
        '14892FgPxJg'
    ];
    _0x5af7 = function () {
        return _0x5daa34;
    };
    return _0x5af7();
}