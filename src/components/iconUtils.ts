import type { IconName } from './icons'
import { Icons } from './icons'

// Helper function to get icon component by name
export const getIcon = (name: IconName) => Icons[name]

// Helper function to get all available icons
export const getAllIcons = () => Icons
