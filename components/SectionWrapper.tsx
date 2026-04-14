'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
    className: string;
    id?: string;
}

export default function SectionWrapper({ children, className='', id }: SectionWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-80px' });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.5, ease: 'easeOut'}}
            className={`max-w-5xl mx-auto px-6 py-20 ${className}`}
            id={id}
        >
            {children}
        </motion.section>
    );
}