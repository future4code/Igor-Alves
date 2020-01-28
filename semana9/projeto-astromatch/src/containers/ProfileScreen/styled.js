import styled, { keyframes } from 'styled-components'
import Icon from '@mdi/react'


export const ProfilePicture = styled.img`
    height: 360px;
    width: 100%;
    display: block;
    z-index: 1;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  border: 1px solid #E7E6E6;
`

export const UserName = styled.div`
	font-weight: bold;
	font-size: 24px;
    margin: 10px 0 13px 30px;
`

export const UserAge = styled.div`
    margin-left: 10px;
	font-size: 20px;
`

export const UserBiografy = styled.div`
    font-size: 16px;
    margin: 20px 30px 0 30px;
`

export const SwipePageIcon = styled(Icon)`
	display: block;
	fill: #4AA397;
`

export const MatchPageIcon = styled(Icon)`
	display: block;
	fill: #753192;
`