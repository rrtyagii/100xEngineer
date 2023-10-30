import { extractInformation } from './parser.js';
import { downloadFromURL } from './http-download.js';
import { createLink } from './utils.js';

const args = process.argv.slice(2);

// use the url from args and check if it is a proper url else pick the seed url
const url =
  args[0] && createLink(args[0])
    ? createLink(args[0])
    : createLink(
        'https://info.pagnis.in/blog/2020/10/13/basic-financial-hygiene/'
      );

const html = await downloadFromURL(url);
console.log(extractInformation(url.origin, html.body));
