import { FC } from 'react'
import config from '@/../package.json'

const Footer: FC = () => (
  <footer style={{ textAlign: "center" }}>
    &copy;copyright YMIR@Team 2022 version: { config.version }
  </footer>
)

export default Footer
