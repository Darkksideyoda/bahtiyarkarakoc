import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { motion } from 'framer-motion';
import React from 'react';
import { Language } from 'styled-icons/material-rounded';

import Typography from '../Typography/Typography';

export default function App() {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom">
        <DropdownTrigger>
          <motion.button className="my-auto flex" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.6 }}>
            <Language size={20} />
          </motion.button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Language Selection" variant="flat">
          <DropdownItem key="help_and_feedback">
            <Typography variant="body1">English</Typography>
          </DropdownItem>
          <DropdownItem key="help_and_feedback">
            <Typography variant="body1">Turkish</Typography>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
