import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TaskContainer = styled(motion.div)`
  align-items: center;
  background-color: ${({ theme }) => theme.body.background};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  overflow-y: auto;
  padding: 1rem 1.5rem;
  width: 70%;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    padding: 1rem;
    width: 100%;
  }
`
