import { CPlusPlus } from 'styled-icons/boxicons-logos';
import { Nestjs, Nextdotjs, Nfc, Nodedotjs, Opencv, Python, ReactLogo, Typescript } from 'styled-icons/simple-icons';

export type StackChipProps = {
  icon: any;
  title: string;
  color?: any;
  id?: string;
};

export const stackList: StackChipProps[] = [
  {
    id: '1',
    icon: Typescript,
    title: 'Typescript',
    color: 'text-primary border-default-400'
  },
  {
    id: '2',
    icon: Nodedotjs,
    title: 'Node',
    color: 'text-green-600 border-default-400'
  },
  {
    id: '3',
    icon: Nextdotjs,
    title: 'Next',
    color: 'border-default-400'
  },
  {
    id: '6',
    icon: CPlusPlus,
    title: 'C++',
    color: 'text-blue-400 border-default-400'
  },
  {
    id: '4',
    icon: Nestjs,
    title: 'Nest',
    color: 'text-red-500 border-default-400'
  },
  {
    id: '5',
    icon: ReactLogo,
    title: 'React',
    color: 'text-cyan-500 border-default-400'
  },
  {
    id: '7',
    icon: Nfc,
    title: 'IoT',
    color: 'border-default-400'
  },
  {
    id: '8',
    icon: Opencv,
    title: 'OpenCv',
    color: 'text-red-400 border-default-400'
  },
  {
    id: '9',
    icon: Python,
    title: 'Python',
    color: 'border-default-400'
  }
];

export const animateNegativeToPositive = [
  -500, -475, -450, -425, -400, -375, -350, -325, -300, -275, -250, -225, -200, -175, -150, -125, -100, -75, -50, -25, 0
];

export const animatePositiveToNegative = [
  500, 475, 450, 425, 400, 375, 350, 325, 300, 275, 250, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0
];
