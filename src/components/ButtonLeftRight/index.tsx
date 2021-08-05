import { Box } from '@material-ui/core';
import React from 'react';
import useStyle from './style'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'


interface ButtonLeftRightProps {
    left?: boolean;
    right?: boolean;

    disabled?: boolean;
}

const ButtonLeftRight: React.FC<ButtonLeftRightProps> = ({ left, right, disabled }) => {
    const noneIcon = left && right ? true : false

    const classes = useStyle()

    return (
        <>
            {
                disabled ?
                    <Box className={classes.containerNoDrop}>
                        {
                            noneIcon ? null :
                                left ? <FiChevronLeft size={27} /> :
                                    right ?
                                        <FiChevronRight size={27} />
                                        : null
                        }
                    </Box> :
                    <Box className={classes.container}>
                        {
                            noneIcon ? null :
                                left ? <FiChevronLeft size={27} /> :
                                    right ?
                                        <FiChevronRight size={27} />
                                        : null
                        }
                    </Box>
            }
        </>
    )
}
export default ButtonLeftRight
export { ButtonLeftRight };