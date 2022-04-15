import PixelFiat from '../assets/work/web2/pixelfiat.png';
import Pi from '../assets/work/web2/pi.png';
import InstagramBot from '../assets/work/web2/instagrambot.png';
import BadgeDescription,
{
  cSharp,
  unity,
  google,
  apple,
  selenium,
  python3,
} from './badges';

interface Project {
  title: string,
  description: string,
  badges: BadgeDescription[],
  image: string,
}

const web2: Project[] = [
  {
    title: 'Pixel Fiat',
    description: 'Mobile incremental app where players progress by collecting pixel money',
    badges: [cSharp, unity, google, apple],
    image: PixelFiat,
  },
  {
    title: 'Memorize Pi',
    description: 'Mobile app to help users remember the digits of π through a minimalist interface',
    badges: [cSharp, unity, apple, google],
    image: Pi,
  },
  {
    title: 'Instagram Bot',
    description: 'Headless bot that posts daily with unique captions and gains followers + farms engagement',
    badges: [python3, selenium],
    image: InstagramBot,
  },
];

export default web2;
