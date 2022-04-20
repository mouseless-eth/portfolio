import PixelFiat from '../assets/work/web2/pixelfiat.png';
import Pi from '../assets/work/web2/pi.png';
import InstagramBot from '../assets/work/web2/instagrambot.png';
import Portfolio from '../assets/work/web2/portfolio.png';
import BadgeDescription,
{
  csharp,
  unity,
  google,
  apple,
  selenium,
  python3,
  typescript,
  react,
} from './badges';

export default interface Web2Project {
  title: string,
  description: string,
  badges: BadgeDescription[],
  image: string,
}

export const web2: Web2Project[] = [
  {
    title: 'Pixel Fiat',
    description: 'Mobile incremental app where players progress by collecting pixel money',
    badges: [csharp, unity, google, apple],
    image: PixelFiat,
  },
  {
    title: 'Memorize Pi',
    description: 'Mobile app to help users remember the digits of π through a minimalist interface',
    badges: [csharp, unity, apple, google],
    image: Pi,
  },
  {
    title: 'Instagram Bot',
    description: 'Headless bot that posts daily with unique captions and gains followers + farms engagement',
    badges: [python3, selenium],
    image: InstagramBot,
  },
  {
    title: 'This Portfolio Site',
    description: 'The site that you are currently browsing was made by myself using react and a minimal starting template',
    badges: [react, typescript],
    image: Portfolio,
  },
];
