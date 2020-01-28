import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {AppBar} from '../../components/AppBar'
import {mdiAccountMultipleCheck} from '@mdi/js'
import {mdiAccountSwitch} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import {ProfilePicture, TitleWrapper, UserName, UserAge, UserBiografy, SwipePageIcon, MatchPageIcon} from './styled'


class ProfileScreen extends React.Component {
    render() {
        const {goToMatchScreen, goToSwipeScreen, selectedProfile} = this.props

        return (
            <div>
                <AppBar
                    leftAction={<SwipePageIcon
                        path={mdiAccountSwitch}
                        size={1}
                        onClick={goToSwipeScreen}
                    />}
                    rightAction={<MatchPageIcon
                        size={1.5}
                        path={mdiAccountMultipleCheck}
                        onClick={goToMatchScreen}
                    />}
                />
                <ProfilePicture src={selectedProfile.photo}/>
                <TitleWrapper>
                    <UserName>{selectedProfile.name},</UserName>
                    <UserAge>{selectedProfile.age}</UserAge>
                </TitleWrapper>
                <UserBiografy>{selectedProfile.bio}</UserBiografy>
            </div>
        )
    }
}

ProfileScreen.propTypes = {
    goToMatchScreen: PropTypes.func.isRequired,
    goToSwipeScreen: PropTypes.func.isRequired,
    matches: PropTypes.array,
    selectedProfile: PropTypes.object,
}

const mapStateToProps = (state) => ({
    matches: state.profiles.matches,
    selectedProfile: state.profiles.selectedProfile
})

const mapDispatchToProps = (dispatch) => ({
    goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
    goToMatchScreen: () => dispatch(updateCurrentPage('MatchScreen')),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
