const { createCanvas, loadImage } = require('canvas');
const ellipsis = require('text-ellipsis');
const { getContent } = require('@nuxt/content');

async function generateOGImage(contentSlug) {
  const content = await getContent(contentSlug, { text: true });
  const textContent = content.text;
  const canvasWidth = 1200;
  const canvasHeight = 630;
  const canvas = createCanvas(canvasWidth, canvasHeight);

  // Load the background image
  const backgroundImage = await loadImage('path/to/background-image.jpg');

  // Draw the background image onto the canvas
  const ctx = canvas.getContext('2d');
  ctx.drawImage(backgroundImage, 0, 0, canvasWidth, canvasHeight);

  // Truncate the text and draw it onto the canvas
  const truncatedText = ellipsis(textContent, 150);
  ctx.font = 'bold 48px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText(truncatedText, canvasWidth / 2, canvasHeight / 2);

  // Return the canvas as a data URL
  return canvas.toDataURL();
}

module.exports = generateOGImage;

/*
modules: [
  '@nuxt/content',
  ['og-image-generator', { generate: true }]
],

*/
