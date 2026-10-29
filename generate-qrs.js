import { PRODUCTS } from './src/productsData.js';
import QRCode from 'qrcode';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://richplus-eight.vercel.app/';
const qrDir = path.join(__dirname, 'qr');

if (!fs.existsSync(qrDir)) {
  fs.mkdirSync(qrDir, { recursive: true });
}

console.log(`Generating QR codes for ${PRODUCTS.length} products...\n`);

for (const product of PRODUCTS) {
  const canonicalName = product.displayName || product.brand;
  const url = `${DOMAIN}${encodeURIComponent(canonicalName)}`;
  // Sanitize displayName for use as filename
  const safeName = canonicalName.replace(/[()\/\\:?%*|"<>]/g, '-');
  const fileName = `${safeName}.pdf`;
  const filePath = path.join(qrDir, fileName);

  try {
    const qrDataUrl = await QRCode.toDataURL(url, {
      errorCorrectionLevel: 'H',
      margin: 2,
      width: 400,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });

    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);

    // Company header
    doc
      .fontSize(20)
      .font('Helvetica-Bold')
      .text(product.manufacturedBy?.company || 'Acadian Seaplants India Private Limited', { align: 'center' })
      .moveDown(0.5);

    // Divider
    doc
      .moveTo(50, doc.y)
      .lineTo(doc.page.width - 50, doc.y)
      .strokeColor('#cccccc')
      .stroke()
      .moveDown(1);

    // Product name
    doc
      .fontSize(18)
      .font('Helvetica-Bold')
      .fillColor('#000000')
      .text(canonicalName, { align: 'center' })
      .moveDown(0.4);

    // Category
    doc
      .fontSize(11)
      .font('Helvetica')
      .fillColor('#555555')
      .text(product.category || '', { align: 'center' })
      .moveDown(1.5);

    // QR code centred
    const qrSize = 300;
    const qrX = (doc.page.width - qrSize) / 2;
    doc.image(qrDataUrl, qrX, doc.y, { width: qrSize });
    doc.moveDown(1);

    // URL label below QR
    doc.y = doc.y + qrSize - 20;
    doc
      .fontSize(9)
      .font('Helvetica')
      .fillColor('#333333')
      .text(url, { align: 'center' });

    doc.end();
    await new Promise((resolve) => writeStream.on('finish', resolve));

    console.log(`✅  ${fileName}`);
    console.log(`    ${url}\n`);
  } catch (err) {
    console.error(`❌  Failed for "${canonicalName}":`, err.message);
  }
}

console.log('✨  All QR PDFs generated in the /qr folder!');
