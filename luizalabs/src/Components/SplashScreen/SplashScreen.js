import React, { useEffect } from 'react'
import {SplashContainer, Logo} from './styledSplash'
import LogoSplash from '../../Assets/Imgs/LogoSplash.png'

function SplashScreen(props) {
    useEffect(() => {
        setTimeout(() => { 
          props.setLoading(false);
        }, 1500);
      }, []);

    return (
        <SplashContainer>
            <Logo src={LogoSplash} />
        </SplashContainer>
    )
}

export default SplashScreen;