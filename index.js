const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

function encode(input) {
    let aLayer = input.split('').map(c => String.fromCharCode(c.charCodeAt(0) + 3)).join('');
    let tLayer = aLayer.split('').map(c => c.charCodeAt(0).toString(16)).join('-');
    let nLayer = tLayer.split('-').reverse().join('-');
    let dLayer = nLayer;
    let pLayer = Buffer.from(dLayer).toString('hex');

    return {
        original: input,
        aLayer,
        tLayer,
        nLayer,
        dLayer,
        pLayer
    };
}

function decode(encoded) {
    let pLayer = Buffer.from(encoded.pLayer, 'hex').toString();
    let dLayer = pLayer;
    let nLayer = dLayer.split('-').reverse().join('-');
    let tLayer = nLayer.split('-').map(c => String.fromCharCode(parseInt(c, 16))).join('');
    let aLayer = tLayer.split('').map(c => String.fromCharCode(c.charCodeAt(0) - 3)).join('');

    return {
        aLayer,
        tLayer,
        nLayer,
        dLayer,
        pLayer,
        decoded: aLayer
    };
}

app.post('/process', (req, res) => {
    const { data } = req.body;

    const encoded = encode(data);
    const decoded = decode(encoded);

    res.json({
        encoded,
        decoded
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
