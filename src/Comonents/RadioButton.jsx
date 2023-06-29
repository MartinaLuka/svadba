import {Box, useRadio} from "@chakra-ui/react";

export function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
        <Box as='label' my={'8px'} borderRadius={'8px'} bgColor={'lightblue'}>
            <input {...input} />
            <Box
                {...checkbox}
                color={'red'}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                borderColor={'blue'}
                _checked={{
                    bg: 'teal.600',
                    color: 'black',
                    borderColor: 'teal.600',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}
