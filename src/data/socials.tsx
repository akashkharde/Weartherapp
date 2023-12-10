import { IoMailUnreadSharp } from "react-icons/io5";
import DiscordIcon from '@/components/icons/DiscordIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';

const socials = [
  {
    position: 0,
    title: 'View GitHub profile',
    Icon: GitHubIcon,
    link: 'https://github.lokkeestudios.com',
  },
  {
    position: 1,
    title: 'Join Discord server',
    Icon: DiscordIcon,
    link: 'https://discord.lokkeestudios.com',
  },
  {
    position: 2,
    title: 'View source code',
    Icon: <IoMailUnreadSharp />,
    link: 'https://github.com/lokkeestudios/WeatherWorks',
  },
];

export default socials;
