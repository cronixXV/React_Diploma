// import { create } from 'zustand';
// import ReactIcon from '../media/icons/stack/react.svg';
// import JsIcon from '../media/icons/stack/Javascript.svg';
// import TsIcon from '../media/icons/stack/TypeScript.svg';
// import HtmlIcon from '../media/icons/stack/HTML5.svg';
// import CssIcon from '../media/icons/stack/css.svg';
// import SassIcon from '../media/icons/stack/sass.svg';
// import Redux from '../media/icons/stack/redux.svg';
// import Material from '../media/icons/stack/material.svg';
// import Github from '../media/icons/stack/github.svg';
// import Git from '../media/icons/stack/git.svg';
// import NodeJs from '../media/icons/stack/Nodejs.svg';
// import Docker from '../media/icons/stack/Docker.svg';
// import Figma from '../media/icons/stack/Figma2.svg';
// import Bootstrap from '../media/icons/stack/bootstrap.svg';
// import Vite from '../media/icons/stack/vite.svg';
// import Webpack from '../media/icons/stack/webpack.svg';
// import Mongo from '../media/icons/stack/mongo.svg';

// interface Icon {
//   id: number;
//   name: string;
//   url: string;
// }

// interface IconStore {
//   icons: Icon[];
//   iconsRaraly: Icon[];
//   addIcon: (icon: Icon, type: 'icons' | 'iconsRaraly') => void;
//   removeIcon: (id: number, type: 'icons' | 'iconsRaraly') => void;
// }

// export const useIconStore = create<IconStore>((set) => ({
//   icons: [
//     { id: 1, name: 'React', url: ReactIcon },
//     { id: 2, name: 'Js', url: JsIcon },
//     { id: 3, name: 'Ts', url: TsIcon },
//     { id: 4, name: 'Html', url: HtmlIcon },
//     { id: 5, name: 'Css', url: CssIcon },
//     { id: 6, name: 'Sass', url: SassIcon },
//     { id: 7, name: 'Redux', url: Redux },
//     { id: 8, name: 'Material', url: Material },
//     { id: 9, name: 'Github', url: Github },
//     { id: 10, name: 'Git', url: Git },
//   ],

//   iconsRaraly: [
//     { id: 1, name: 'NodeJs', url: NodeJs },
//     { id: 2, name: 'Mongo', url: Mongo },
//     { id: 3, name: 'Docker', url: Docker },
//     { id: 4, name: 'Figma', url: Figma },
//     { id: 5, name: 'Bootstrap', url: Bootstrap },
//     { id: 6, name: 'Vite', url: Vite },
//     { id: 7, name: 'Webpack', url: Webpack },
//   ],

//   addIcon: (icon, type) =>
//     set((state) => ({
//       [type]: [...state[type], icon],
//     })),

//   removeIcon: (id, type) =>
//     set((state) => ({
//       [type]: state[type].filter((icon) => icon.id !== id),
//     })),
// }));
