import React, { FunctionComponent } from 'react'
import { Avatar, AvatarProps } from '@chakra-ui/react'

export interface BaseAvatarProps extends AvatarProps {
  link: string
}

const BaseAvatar: FunctionComponent<BaseAvatarProps> = ({ link, ...rest }) => {
  return <Avatar size="xl" src={link} mb={4} {...rest} />
}

export default BaseAvatar
