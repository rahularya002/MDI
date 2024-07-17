// components/ui/avatar.jsx

import { Avatar as NextUIAvatar } from '@nextui-org/react';

export const Avatar = ({ children, ...props }) => {
  return <NextUIAvatar {...props}>{children}</NextUIAvatar>;
};

export const AvatarImage = NextUIAvatar.Image;
export const AvatarFallback = NextUIAvatar.Fallback;
