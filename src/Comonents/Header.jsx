import image from "../images/zadnja.png";
import {Box, Flex, Heading} from "@chakra-ui/react";
import {useEffect, useRef, useState} from "react";


export const Header = () => {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    })

    console.log(height)

    return (
        <Flex w={'100%'}>
            <Box ref={ref} position={'relative'} id="header" className="website-breeze__cover" style={{backgroundImage:`url(${image})`, height: `${screenSize.width / 5}px`, backgroundSize: 'cover', backgroundPosition: 'center center', width: '100%' }}>
                {/*<Box className="website-breeze__cover-backdrop" />*/}
                {/*<Box className="website-breeze__cover-box">*/}
                {/*<Flex position={'absolute'} top={screenSize.width > 600 ? '15%' : '16px'} flexDir={'column'}>*/}
                {/*    <h1 className="website-breeze__h1 website-breeze__editable">*/}
                {/*        <Box color={'black'} /*className={'text-shadow'}>Martina &amp; Luka&nbsp;</Box>*/}
                {/*    </h1>*/}
                {/*    <Box mt={'-44px'}>*/}
                {/*        <Heading  className="website-breeze__date website-breeze__editable darker" style={{color: 'black', fontWeight: 700}}>28.10.2023</Heading>*/}

                {/*    </Box>*/}

                {/*</Flex>*/}


                {/*    <Box className="website-breeze__centred-content" mt={'48px'}>*/}
                {/*/!*        <Box alignSelf={'center'} backdropBlur={'8px'} borderRadius={'8px'} className="website-breeze__text-center" width={'fit-content'} >*!/*/}
                {/*            <h1 className="website-breeze__h1 website-breeze__editable">*/}
                {/*                <Box className={'text-shadow'}>Martina &amp; Luka&nbsp;</Box>*/}
                {/*            </h1>*/}
                {/*        </Box>*/}
                {/*        <Box className="website-breeze__text-center">*/}
                {/*            <Heading className="website-breeze__date website-breeze__editable darker text-shadow" style={{color: 'white', fontWeight: 700}}>28 October 2023</Heading>*/}
                {/*        </Box>*/}
                {/*        <Box position={'absolute'} bottom={0} className="website-breeze__text-center" h={'fit-content'} mt={'112px'}>*/}
                {/*            <h2 className="website-breeze__cover-h2 website-breeze__editable" style={{width: 'fit-content'}}>*/}
                {/*                <Box className={'text-shadow'} paddingY={'8px'} alignSelf={'center'} backdropBlur={'8px'} borderRadius={'8px'} width={'fit-content'} fontWeight={700}>POZIVAMO VAS DA ZAJEDNO PROSLAVIMO DAN NAŠEG VJENČANJA !</Box>*/}
                {/*            </h2>*/}
                {/*        </Box>*/}

                {/*    </Box>*/}
                {/*</Box>*/}
                {/* <Box  w={'90%'}  position={'absolute'} top={screenSize.width < 928 ? screenSize.width < 366 ? `${height - 55}px` : `${height - 50}px` : `${height - 70}px`} ><h2 className="website-breeze__cover-h2 website-breeze__editable" style={{width: 'fit-content'}}>*/}
                {/*     <Box  color={'black'} paddingY={'8px'} alignSelf={'center'} backdropBlur={'8px'} borderRadius={'8px'} width={'fit-content'} fontStyle={'Comfortaa'} fontWeight={700} fontSize={screenSize.width < 928 ? screenSize.width < 366 ? `10px !important` : `12px` : `22px`}>POZIVAMO VAS DA ZAJEDNO PROSLAVIMO DAN NAŠEG VJENČANJA !</Box>*/}
                {/* </h2></Box>*/}
            </Box>
        </Flex>
    )
}
