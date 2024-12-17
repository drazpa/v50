import React from 'react';
import { BarChart3, Code, Wallet, Gamepad, Terminal, Database, Eye } from 'lucide-react';
import { MenuItem } from './types';

export const appsMenuItems: MenuItem[] = [
  {
    id: 'trading-dashboard',
    title: 'MagicMint Trading Dashboard',
    description: 'Access real-time trading analytics',
    icon: <BarChart3 className="w-12 h-12" />,
    link: 'https://sweet-narwhal-04de49.netlify.app/'
  },
  {
    id: 'deck-builder',
    title: 'MagicMint Deck Builder',
    description: 'Create and manage your decks',
    icon: <Code className="w-12 h-12" />,
    isComingSoon: true
  },
  {
    id: 'portfolio-manager',
    title: 'MagicMint Portfolio Manager',
    description: 'Track your card collection value',
    icon: <Wallet className="w-12 h-12" />,
    isComingSoon: true
  },
  {
    id: 'game-simulator',
    title: 'MagicMint Level 1 Game Simulator',
    description: 'Practice your gameplay strategies',
    icon: <Gamepad className="w-12 h-12" />,
    isComingSoon: true
  },
  {
    id: 'magicminter',
    title: 'MagicMinter',
    description: 'Advanced minting platform',
    icon: <Terminal className="w-12 h-12" />,
    link: 'www.magicminter.com'
  },
  {
    id: 'mxm-portfolio',
    title: 'MagicMint MXM Digital Portfolio',
    description: 'Manage your digital assets portfolio',
    icon: <Database className="w-12 h-12" />,
    isComingSoon: true
  },
  {
    id: 'nft-viewer',
    title: 'MagicMint NFT Viewer',
    description: 'View and manage your NFT collection',
    icon: <Eye className="w-12 h-12" />,
    isComingSoon: true
  }
];